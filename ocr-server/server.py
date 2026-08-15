import os
import uvicorn
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import fitz  # PyMuPDF, maps PDF to images directly without external tools
from paddleocr import PaddleOCR
import numpy as np
import cv2
import re

app = FastAPI(title="Vocabulary App OCR Server")

# Allow requests from GitHub Pages or any client via ngrok
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize PaddleOCR (supports Chinese and English handwriting detection)
# Disable enable_mkldnn to fix new PIR executor OneDNN runtime bugs in Python 3.12
ocr = PaddleOCR(use_angle_cls=True, lang="ch", use_gpu=False, enable_mkldnn=False)

def process_ocr_results(ocr_result):
    """
    Parses PaddleOCR raw outputs to pair English words with Chinese meanings.
    PaddleOCR returns layout: [[[x, y], [x, y]...], ('text', confidence)]
    """
    if not ocr_result or not ocr_result[0]:
        return []

    lines = []
    # Collect all detected text fragments with their vertical/horizontal coordinates
    for line in ocr_result[0]:
        box = line[0]
        text = line[1][0].strip()
        confidence = line[1][1]
        
        # Calculate bounding box center
        xs = [p[0] for p in box]
        ys = [p[1] for p in box]
        cx = sum(xs) / 4
        cy = sum(ys) / 4
        
        lines.append({
            "text": text,
            "cx": cx,
            "cy": cy,
            "h": max(ys) - min(ys),
            "w": max(xs) - min(xs)
        })
    
    # Sort lines top-to-bottom
    lines.sort(key=lambda l: l["cy"])
    
    paired_vocab = []
    
    # Simple parsing heuristic:
    # 1. Detect if a line looks like an English word/phrase.
    # 2. If the next line is Chinese, pair them.
    # 3. Detect if a single line contains both (e.g. "apple 蘋果" or "apple: 蘋果" or "apple - 蘋果")
    
    def is_english(t):
        # Allow letters, spaces, common symbols like slash or brackets
        clean = re.sub(r'[\(\)\[\]\s\-\/\,\.\d]', '', t)
        if not clean:
            return False
        # If more than 75% of characters are English letters
        letters = re.findall(r'[a-zA-Z]', clean)
        return len(letters) / len(clean) > 0.75

    i = 0
    while i < len(lines):
        item = lines[i]
        text = item["text"]
        
        # Check inline split (e.g., "apple n. 蘋果" or "apple - 蘋果" or "apple 蘋果")
        # Matches an English word followed by Chinese characters
        inline_match = re.match(r'^([a-zA-Z\s\-\,\.\(\)]+)(?:[\-\:]|\s+(?:adj\.|adv\.|n\.|v\.|prep\.|pron\.)?\s*|(?=[\u4e00-\u9fff]))(.*)$', text)
        
        if inline_match:
            eng = inline_match.group(1).strip()
            cht = inline_match.group(2).strip()
            # Clean up punctuation at the beginning of Chinese definition
            cht = re.sub(r'^[-\s\:\.\,]+', '', cht)
            
            if eng and cht and not is_english(cht):
                paired_vocab.append({"eng": eng, "cht": cht})
                i += 1
                continue
                
        # Split line pairing: current line is English, next line is Chinese
        if is_english(text) and (i + 1 < len(lines)):
            next_item = lines[i+1]
            next_text = next_item["text"]
            
            if not is_english(next_text):
                paired_vocab.append({"eng": text, "cht": next_text})
                i += 2
                continue
        
        # Fallback: if we can't pair it, but it contains English, add it with empty Chinese for user to fill
        if is_english(text):
            paired_vocab.append({"eng": text, "cht": ""})
            
        i += 1
        
    return paired_vocab

@app.post("/ocr")
@app.post("/ocr/")
async def perform_ocr(file: UploadFile = File(...)):
    filename = file.filename.lower()
    
    try:
        # Read file bytes
        file_bytes = await file.read()
        images_to_process = []
        
        if filename.endswith(".pdf"):
            # Load PDF using PyMuPDF
            doc = fitz.open(stream=file_bytes, filetype="pdf")
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                pix = page.get_pixmap(dpi=150) # Render page to image bytes at 150 DPI
                img_data = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.h, pix.w, pix.n)
                # Convert RGB/RGBA to OpenCV BGR
                if pix.n == 4:
                    img_data = cv2.cvtColor(img_data, cv2.COLOR_RGBA2BGR)
                elif pix.n == 3:
                    img_data = cv2.cvtColor(img_data, cv2.COLOR_RGB2BGR)
                images_to_process.append(img_data)
        else:
            # Load standard Image file
            nparr = np.frombuffer(file_bytes, np.uint8)
            img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
            if img is not None:
                images_to_process.append(img)
            else:
                raise HTTPException(status_code=400, detail="Invalid image file format")
                
        if not images_to_process:
            raise HTTPException(status_code=400, detail="No readable content found in file")
            
        all_pairs = []
        # Run OCR on each page/image
        for img in images_to_process:
            result = ocr.ocr(img)
            pairs = process_ocr_results(result)
            all_pairs.extend(pairs)
            
        return {
            "success": True,
            "count": len(all_pairs),
            "words": all_pairs
        }
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=5000, reload=True)
