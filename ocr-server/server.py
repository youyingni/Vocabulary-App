import uvicorn
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import fitz  # PyMuPDF
import easyocr
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

# Initialize EasyOCR (Traditional Chinese + English, CPU mode)
# First run will download models (~300MB), subsequent runs use cache
reader = easyocr.Reader(['ch_tra', 'en'], gpu=False, verbose=False)

def process_ocr_results(ocr_result):
    """
    Parses EasyOCR raw outputs to pair English words with Chinese meanings.
    EasyOCR returns layout: [[bbox], 'text', confidence]
    """
    if not ocr_result:
        return []

    lines = []
    for item in ocr_result:
        box = item[0]   # [[x1,y1],[x2,y2],[x3,y3],[x4,y4]]
        text = item[1].strip()
        confidence = item[2]

        if not text:
            continue

        xs = [p[0] for p in box]
        ys = [p[1] for p in box]
        cx = sum(xs) / len(xs)
        cy = sum(ys) / len(ys)

        lines.append({
            "text": text,
            "cx": cx,
            "cy": cy,
            "h": max(ys) - min(ys),
            "w": max(xs) - min(xs)
        })

    # Sort top-to-bottom, then left-to-right
    lines.sort(key=lambda l: (round(l["cy"] / 20), l["cx"]))

    paired_vocab = []

    def is_english(t):
        clean = re.sub(r'[\(\)\[\]\s\-\/\,\.\d]', '', t)
        if not clean:
            return False
        letters = re.findall(r'[a-zA-Z]', clean)
        return len(letters) / len(clean) > 0.75

    i = 0
    while i < len(lines):
        item = lines[i]
        text = item["text"]

        # Check inline split: "apple 蘋果" or "apple - 蘋果" or "apple n. 蘋果"
        inline_match = re.match(
            r'^([a-zA-Z][\w\s\-\,\.\(\)]*?)(?:[\-\:]|\s+(?:adj\.|adv\.|n\.|v\.|prep\.|pron\.|conj\.)?\s*|(?=[\u4e00-\u9fff\u3400-\u4dbf]))(.+)$',
            text
        )

        if inline_match:
            eng = inline_match.group(1).strip()
            cht = inline_match.group(2).strip()
            cht = re.sub(r'^[-\s\:\.\,]+', '', cht)

            if eng and cht and not is_english(cht):
                paired_vocab.append({"eng": eng, "cht": cht})
                i += 1
                continue

        # Split line pairing: current English, next line Chinese
        if is_english(text) and (i + 1 < len(lines)):
            next_text = lines[i + 1]["text"]
            if not is_english(next_text):
                paired_vocab.append({"eng": text, "cht": next_text})
                i += 2
                continue

        # Fallback: English only, empty Chinese for user to fill
        if is_english(text):
            paired_vocab.append({"eng": text, "cht": ""})

        i += 1

    return paired_vocab


@app.post("/ocr")
@app.post("/ocr/")
async def perform_ocr(file: UploadFile = File(...)):
    filename = file.filename.lower()

    try:
        file_bytes = await file.read()
        images_to_process = []

        if filename.endswith(".pdf"):
            doc = fitz.open(stream=file_bytes, filetype="pdf")
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                pix = page.get_pixmap(dpi=150)
                img_data = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.h, pix.w, pix.n)
                if pix.n == 4:
                    img_data = cv2.cvtColor(img_data, cv2.COLOR_RGBA2BGR)
                elif pix.n == 3:
                    img_data = cv2.cvtColor(img_data, cv2.COLOR_RGB2BGR)
                images_to_process.append(img_data)
        else:
            nparr = np.frombuffer(file_bytes, np.uint8)
            img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
            if img is not None:
                images_to_process.append(img)
            else:
                raise HTTPException(status_code=400, detail="Invalid image file format")

        if not images_to_process:
            raise HTTPException(status_code=400, detail="No readable content found in file")

        all_pairs = []
        for img in images_to_process:
            result = reader.readtext(img)
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
