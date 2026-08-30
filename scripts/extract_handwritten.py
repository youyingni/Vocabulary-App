import fitz
import re

pdf_path = r"C:\Users\yyn\Downloads\多益.pdf"
doc = fitz.open(pdf_path)

words = []
for page in doc:
    text = page.get_text("text")
    # Looking for format: English word followed by Chinese translation
    # The format might be lines like:
    # word (n) meaning
    # word meaning
    
    # Simple regex parsing line by line
    lines = text.split("\n")
    for i, line in enumerate(lines):
        line = line.strip()
        # Find lines that start with english characters
        if re.match(r'^[a-zA-Z]', line):
            # Try to match eng + cht on same line
            m = re.match(r'^([a-zA-Z\s\-\.\/]+)([\u4e00-\u9fff\(].*)$', line)
            if m:
                eng = m.group(1).strip()
                cht = m.group(2).strip()
                if len(eng) > 1:
                    words.append({"eng": eng, "cht": cht})
            else:
                # Next line might be the translation
                if i + 1 < len(lines):
                    next_line = lines[i+1].strip()
                    if re.match(r'^[\u4e00-\u9fff\(]', next_line):
                        if len(line) > 1:
                            words.append({"eng": line, "cht": next_line})
                        
print(f"Extracted {len(words)} words.")
for w in words[:10]:
    print(f"[{w['eng']}] -> [{w['cht']}]")

if not words:
    # Let's print raw text to see the format
    print("\nRAW TEXT (first 500 chars):")
    print(doc[0].get_text("text")[:500])
