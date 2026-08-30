import pdfplumber
import json
import sys
import re
import os

sys.stdout.reconfigure(encoding='utf-8')

pdf_files = {
    "day02": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY02單詞卡 _ Quizlet.pdf",
    "day03": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY03單詞卡 _ Quizlet.pdf",
    "day04": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY04單詞卡 _ Quizlet.pdf",
    "day05": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY05單詞卡 _ Quizlet.pdf",
    "day06": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY06單詞卡 _ Quizlet.pdf",
    "day07": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY07單詞卡 _ Quizlet.pdf",
    "day08": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY08單詞卡 _ Quizlet.pdf",
    "day09": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY09單詞卡 _ Quizlet.pdf",
    "day10": r"C:\Users\yyn\Downloads\新制多益NEW TOEIC單字大全_DAY10單詞卡 _ Quizlet.pdf",
}

SKIP_PATTERNS = [
    r'^新制多益NEW TOEIC單字大全',
    r'^_DAY', r'^過去', r'^學生們也學習', r'^yah402',
    r'個詞語', r'則評論', r'這個學習集', r'^學習 \d',
    r'^選擇答案', r'^\d+ [a-zA-Z]+ \d+ [a-zA-Z]+$',
    r'^不知道', r'^本學習集中的詞語', r'^\s*\|',
    r'^\s*$', r'^儲存', r'^新增到日曆', r'留下第一個評分',
]

def should_skip(line):
    for pat in SKIP_PATTERNS:
        if re.search(pat, line.strip()):
            return True
    return False

def is_english_start(line):
    return bool(re.match(r'^[a-zA-Z]', line.strip()))

# Known POS markers
POS_MARKERS = ['(n.)', '(v.)', '(adj.)', '(adv.)', '(prep.)', '(pron.)', '(conj.)',
               'n.', 'v.', 'adj.', 'adv.', 'prep.', 'n/v', 'n./v.', 'adj./n.',
               'adj./adv.', '(a)', '(a.)', '(n)', '(v)']

def looks_like_definition(text):
    """Check if text looks like a Chinese definition (with or without POS marker)"""
    text = text.strip()
    # Has CJK characters
    if re.search(r'[\u4e00-\u9fff]', text):
        return True
    # Starts with a POS marker
    for m in POS_MARKERS:
        if text.startswith(m):
            return True
    return False

def parse_vocab_lines(lines):
    words = []
    seen_eng = set()
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue

        if is_english_start(line):
            # Try to split: English part vs Chinese/definition part on the same line
            # Strategy: find first CJK char OR known POS marker after the english word
            eng = ""
            cht = ""

            # Try to find where the Chinese starts
            # Pattern: one or more english words/phrases followed by definition
            # Match: "word [word...] (n./v.) chinese..." or "word chinese..."
            
            # First check for inline definition
            m = re.match(
                r'^([a-zA-Z][a-zA-Z0-9\s\-\.\(\)\/\'\"]*?)\s+'
                r'((?:n\.|v\.|adj\.|adv\.|prep\.|\(n[\.\)]|\(v[\.\)]|\(adj|\(a[\.\)]).*|[\u4e00-\u9fff].*)$',
                line
            )
            if m:
                eng = m.group(1).strip()
                cht = m.group(2).strip()
            else:
                eng = line
                cht = ""

            # Collect continuation lines for definition
            j = i + 1
            while j < len(lines):
                next_line = lines[j].strip()
                if not next_line:
                    break
                if looks_like_definition(next_line) and not is_english_start(next_line):
                    cht = (cht + " " + next_line).strip() if cht else next_line
                    j += 1
                else:
                    break
            i = j

            if eng and eng not in seen_eng and len(eng) > 1:
                # Clean up trailing table artifacts from PDF
                cht = re.sub(r'\s*\|.*$', '', cht).strip()
                seen_eng.add(eng)
                words.append({"eng": eng, "cht": cht})
        else:
            i += 1
    return words

all_vocab = {}

for day, path in pdf_files.items():
    print(f"\n=== {day.upper()} ===")
    try:
        with pdfplumber.open(path) as pdf:
            full_text = ""
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    full_text += text + "\n"
                tables = page.extract_tables()
                if tables:
                    for table in tables:
                        for row in table:
                            if row:
                                full_text += " | ".join([c or "" for c in row]) + "\n"

            lines = [l.strip() for l in full_text.split("\n") if not should_skip(l) and l.strip()]
            words = parse_vocab_lines(lines)
            all_vocab[day] = words
            print(f"  {len(words)} words")
            for w in words[:5]:
                print(f"    [{w['eng']}] -> [{w['cht']}]")
            print("  ...")
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback; traceback.print_exc()

output_path = r"C:\Users\yyn\Desktop\lsp\Vocabulary-App\all_vocab2.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(all_vocab, f, ensure_ascii=False, indent=2)

print(f"\nSaved to {output_path}")
print("\nSummary:")
for day, words in all_vocab.items():
    missing_pos = [w for w in words if not re.search(r'^[\(\[nvadjprepconj]', w['cht'].strip())]
    print(f"  {day}: {len(words)} words | {len(missing_pos)} missing explicit POS")
