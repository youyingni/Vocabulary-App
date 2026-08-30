import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load extracted vocabulary
with open(r"C:\Users\yyn\Desktop\lsp\Vocabulary-App\all_vocab.json", "r", encoding="utf-8") as f:
    vocab = json.load(f)

# Load current app.js
with open(r"C:\Users\yyn\Desktop\lsp\Vocabulary-App\app.js", "r", encoding="utf-8") as f:
    js = f.read()

def make_words_js(day_key, words, id_prefix):
    """Generate JavaScript array entries for words"""
    lines = []
    for i, w in enumerate(words, 1):
        eng = w['eng'].replace('\\', '\\\\').replace('`', '\\`').replace("'", "\\'")
        cht = w['cht'].replace('\\', '\\\\').replace('`', '\\`').replace("'", "\\'")
        lines.append(f'                    {{ id: "{id_prefix}-{i}", eng: "{eng}", cht: "{cht}" }}')
    return ",\n".join(lines)

# Map day keys to their unit IDs and JS array variable names
day_map = {
    "day02": ("toeic-day02", "d2"),
    "day03": ("toeic-day03", "d3"),
    "day04": ("toeic-day04", "d4"),
    "day05": ("toeic-day05", "d5"),
    "day06": ("toeic-day06", "d6"),
    "day07": ("toeic-day07", "d7"),
    "day08": ("toeic-day08", "d8"),
    "day09": ("toeic-day09", "d9"),
    "day10": ("toeic-day10", "d10"),
}

for day_key, (unit_id, id_prefix) in day_map.items():
    if day_key not in vocab:
        print(f"WARNING: {day_key} not in vocab!")
        continue
    
    words = vocab[day_key]
    new_words_js = make_words_js(day_key, words, id_prefix)
    
    # Pattern: find the words array for this unit
    # Match: id: "toeic-dayXX", ... words: [ ... ]
    # We find the unit block and replace its words array content
    pattern = rf'(id:\s*"{re.escape(unit_id)}".*?words:\s*\[)(.*?)(\s*\])'
    
    match = re.search(pattern, js, re.DOTALL)
    if match:
        old_content = match.group(0)
        new_content = match.group(1) + "\n" + new_words_js + "\n                " + match.group(3)
        js = js.replace(old_content, new_content, 1)
        print(f"✓ {day_key}: replaced {len(words)} words for unit {unit_id}")
    else:
        print(f"✗ {day_key}: could NOT find unit block for {unit_id}!")

# Write back
with open(r"C:\Users\yyn\Desktop\lsp\Vocabulary-App\app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("\nDone! app.js updated.")
