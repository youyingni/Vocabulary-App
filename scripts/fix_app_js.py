import re

with open(r"C:\Users\yyn\Desktop\lsp\Vocabulary-App\app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Fix generateId() -> static IDs
def replace_id(match):
    global counter
    counter += 1
    return f'id: "static-{counter}"'

counter = 0
js = re.sub(r'id:\s*generateId\(\)', replace_id, js)

# 2. Add deduplication migration logic
migration_code = """
// V2 Deduplication Migration
let v2Deduplicated = localStorage.getItem('v2Deduplicated_1');
if (!v2Deduplicated) {
    let deduplicated = false;
    folders.forEach(folder => {
        let uniqueUnits = {};
        let newUnits = [];
        folder.units.forEach(unit => {
            if (!uniqueUnits[unit.name]) {
                uniqueUnits[unit.name] = unit;
                newUnits.push(unit);
            } else {
                // Merge progress into the kept unit
                let keptUnit = uniqueUnits[unit.name];
                unit.words.forEach(dupWord => {
                    let keptWord = keptUnit.words.find(w => w.eng === dupWord.eng);
                    if (keptWord) {
                        if (dupWord.mastery > keptWord.mastery) keptWord.mastery = dupWord.mastery;
                        keptWord.correctCount += dupWord.correctCount || 0;
                        keptWord.wrongCount += dupWord.wrongCount || 0;
                        if (dupWord.streak > keptWord.streak) keptWord.streak = dupWord.streak;
                        if (dupWord.nextReviewAt) {
                            if (!keptWord.nextReviewAt || new Date(dupWord.nextReviewAt) < new Date(keptWord.nextReviewAt)) {
                                keptWord.nextReviewAt = dupWord.nextReviewAt;
                            }
                        }
                    }
                });
                deduplicated = true;
            }
        });
        folder.units = newUnits;
        
        // Also deduplicate words within each unit just in case
        folder.units.forEach(unit => {
            let uniqueWords = {};
            let newWords = [];
            unit.words.forEach(w => {
                if (!uniqueWords[w.eng]) {
                    uniqueWords[w.eng] = w;
                    newWords.push(w);
                } else {
                    let keptWord = uniqueWords[w.eng];
                    if (w.mastery > keptWord.mastery) keptWord.mastery = w.mastery;
                    keptWord.correctCount += w.correctCount || 0;
                    keptWord.wrongCount += w.wrongCount || 0;
                    if (w.streak > keptWord.streak) keptWord.streak = w.streak;
                    deduplicated = true;
                }
            });
            unit.words = newWords;
        });
    });
    
    if (deduplicated) {
        save();
        console.log("Deduplication completed");
    }
    localStorage.setItem('v2Deduplicated_1', 'true');
}
"""

if "// V2 Deduplication Migration" not in js:
    # Insert right after v2Migrated block
    js = js.replace("if (v2Migrated) save();", "if (v2Migrated) save();\n" + migration_code)

with open(r"C:\Users\yyn\Desktop\lsp\Vocabulary-App\app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Fixed generateId() and added deduplication migration.")
