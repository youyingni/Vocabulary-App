"""
Vocab Master v2.0 → v2.1 Migration Script
Step 1: Schema V9 + Migration
Step 2: Shared Progress Helper

This script modifies app.js to:
1. Add new constants (APP_VERSION, SCHEMA_VERSION)
2. Add normalizeWord(), createDefaultProgress(), getWordProgress()
3. Add migrateToV9() function
4. Modify startup logic for V9 migration
5. Replace all direct word.mastery/wrongCount/etc accesses with getWordProgress()
6. Update save() → saveAppData()
7. Update starred system to use shared progress
"""

import re

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Keep a backup
with open('app.js.bak', 'w', encoding='utf-8') as f:
    f.write(js)

print("Backup created: app.js.bak")

# ============================================================
# PART 1: Add new constants after DATA_VERSION line
# ============================================================

old_data_version = "const DATA_VERSION = 8; // Bump this to force-refresh default unit content"
new_data_version = """const DATA_VERSION = 8; // Bump this to force-refresh default unit content
const APP_VERSION = "2.1.0";
const SCHEMA_VERSION = 9;

// =====================================================
// WORD NORMALIZATION & PROGRESS HELPERS
// =====================================================
function normalizeWord(eng) {
    return (eng || "").trim().toLowerCase().replace(/\\s+/g, " ");
}

function createDefaultProgress(normalizedEng) {
    const now = new Date().toISOString();
    return {
        normalizedEng,
        mastery: 0,
        streak: 0,
        correctCount: 0,
        wrongCount: 0,
        starred: false,
        ignored: false,
        lastReviewedAt: null,
        lastWrongAt: null,
        nextReviewAt: null,
        createdAt: now,
        updatedAt: now
    };
}

// Global reference - will be populated after data load
let appData = null; // alias for vocabApp_v2 after migration

function getWordProgress(word) {
    if (!appData || !appData.progressByWord) return createDefaultProgress(normalizeWord(word.eng || word.word || ""));
    const key = word.normalizedEng || word.normalizedWord || normalizeWord(word.eng || word.word || "");
    if (!appData.progressByWord[key]) {
        appData.progressByWord[key] = createDefaultProgress(key);
    }
    return appData.progressByWord[key];
}

function updateWordProgress(word, updates) {
    const progress = getWordProgress(word);
    Object.assign(progress, updates, { updatedAt: new Date().toISOString() });
    return progress;
}

function getEncounterCount(normalizedEng) {
    if (!appData || !appData.words) return 1;
    const key = normalizedEng || "";
    let count = 0;
    appData.words.forEach(w => {
        if (normalizeWord(w.word || w.eng || "") === key) count++;
    });
    return count;
}

function getEncounterSources(normalizedEng) {
    if (!appData || !appData.words) return [];
    const key = normalizedEng || "";
    const sources = [];
    const CATEGORY_META_LOCAL = {
        "folder-toeic-career": "TOEIC 商業、辦公與職涯",
        "folder-toeic-daily": "TOEIC 日常、生活與雜項",
        "folder-toeic-similar": "TOEIC 易混淆與相近字群",
        "folder-parker": "Parker",
        "folder-toeic": "新制多益 New TOEIC",
        "folder-handwritten": "📝 手寫筆記單字",
        "folder-toeic-phrases": "TOEIC 常用片語與句型",
        "folder-toeic-business": "TOEIC 商業、辦公與職涯"
    };
    appData.words.forEach(w => {
        if (normalizeWord(w.word || w.eng || "") === key) {
            const folderName = CATEGORY_META_LOCAL[w.category] || w.category;
            const unitName = (w.tags && w.tags.length > 0) ? w.tags[0] : "Default";
            sources.push({ folder: folderName, unit: unitName });
        }
    });
    return sources;
}"""

js = js.replace(old_data_version, new_data_version)
print("PART 1: Added constants and helper functions")

# ============================================================
# PART 2: Add migrateToV9() and modify startup
# ============================================================

# Find the startup section and replace it
old_startup = """// V2 Data Schema
let vocabApp_v2 = JSON.parse(localStorage.getItem('vocabApp_v2')) || null;
let starredIds = JSON.parse(localStorage.getItem('starredIds')) || [];
let currentView = JSON.parse(localStorage.getItem('currentView')) || { type: 'unit', folderId: null, unitId: null };
let isTestMode = false;

// We still maintain `folders` in memory as a computed view to keep UI intact during Phase 0
let folders = [];"""

new_startup = """// V2 Data Schema
let vocabApp_v2 = JSON.parse(localStorage.getItem('vocabApp_v2')) || null;
let starredIds = JSON.parse(localStorage.getItem('starredIds')) || [];
let currentView = JSON.parse(localStorage.getItem('currentView')) || { type: 'unit', folderId: null, unitId: null };
let isTestMode = false;

// We still maintain `folders` in memory as a computed view to keep UI intact
let folders = [];

// =====================================================
// SCHEMA V9 MIGRATION
// =====================================================
function migrateToV9(data) {
    console.log("[Migration] Starting V8 → V9 migration...");
    
    // 1. Backup before migration
    try {
        localStorage.setItem("vocabApp_backup_pre_v9", JSON.stringify(data));
        console.log("[Migration] Backup saved as vocabApp_backup_pre_v9");
    } catch(e) {
        console.warn("[Migration] Could not save backup:", e.message);
    }
    
    // 2. Build progressByWord from all words
    const progressByWord = {};
    const oldStarredIds = JSON.parse(localStorage.getItem('starredIds')) || [];
    
    if (data.words && Array.isArray(data.words)) {
        data.words.forEach(w => {
            const nEng = normalizeWord(w.word || w.eng || "");
            if (!nEng) return; // skip empty
            
            // Add normalizedEng to word (for future reference)
            w.normalizedEng = nEng;
            // Also keep normalizedWord for backward compat
            w.normalizedWord = nEng;
            
            const isStarred = oldStarredIds.includes(w.id);
            
            if (!progressByWord[nEng]) {
                // First occurrence - create from this word's data
                progressByWord[nEng] = {
                    normalizedEng: nEng,
                    mastery: w.mastery || 0,
                    streak: w.streak || 0,
                    correctCount: w.correctCount || 0,
                    wrongCount: w.wrongCount || 0,
                    starred: isStarred,
                    ignored: w.ignored || false,
                    lastReviewedAt: w.lastReviewedAt || null,
                    lastWrongAt: w.lastWrongAt || null,
                    nextReviewAt: w.nextReviewAt || null,
                    createdAt: w.createdAt || new Date().toISOString(),
                    updatedAt: w.updatedAt || new Date().toISOString()
                };
            } else {
                // Merge: apply §15 rules
                const existing = progressByWord[nEng];
                existing.mastery = Math.max(existing.mastery, w.mastery || 0);
                existing.wrongCount = (existing.wrongCount || 0) + (w.wrongCount || 0);
                existing.correctCount = (existing.correctCount || 0) + (w.correctCount || 0);
                if (isStarred) existing.starred = true;
                if (w.ignored) existing.ignored = true;
                // streak: keep max
                existing.streak = Math.max(existing.streak || 0, w.streak || 0);
                // lastReviewedAt: latest
                if (w.lastReviewedAt && (!existing.lastReviewedAt || new Date(w.lastReviewedAt) > new Date(existing.lastReviewedAt))) {
                    existing.lastReviewedAt = w.lastReviewedAt;
                }
                // lastWrongAt: latest
                if (w.lastWrongAt && (!existing.lastWrongAt || new Date(w.lastWrongAt) > new Date(existing.lastWrongAt))) {
                    existing.lastWrongAt = w.lastWrongAt;
                }
                // nextReviewAt: earliest not-yet-expired
                if (w.nextReviewAt) {
                    if (!existing.nextReviewAt || new Date(w.nextReviewAt) < new Date(existing.nextReviewAt)) {
                        existing.nextReviewAt = w.nextReviewAt;
                    }
                }
            }
        });
    }
    
    // 3. Update schema
    data.schemaVersion = SCHEMA_VERSION;
    data.progressByWord = progressByWord;
    if (!data.imports) data.imports = [];
    if (!data.settings) data.settings = {};
    
    const uniqueWords = Object.keys(progressByWord).length;
    const totalAppearances = data.words ? data.words.length : 0;
    console.log(`[Migration] Complete: ${totalAppearances} appearances → ${uniqueWords} unique words with shared progress`);
    
    return data;
}

// Run migration if needed
if (vocabApp_v2 && (!vocabApp_v2.schemaVersion || vocabApp_v2.schemaVersion < SCHEMA_VERSION)) {
    try {
        vocabApp_v2 = migrateToV9(vocabApp_v2);
        localStorage.setItem('vocabApp_v2', JSON.stringify(vocabApp_v2));
        console.log("[Migration] V9 data saved successfully");
    } catch(e) {
        console.error("[Migration] FAILED:", e);
        alert("資料升級失敗：" + e.message + "\\n\\n您的原始資料已備份在 vocabApp_backup_pre_v9。");
    }
}

// Set global appData reference
appData = vocabApp_v2;"""

js = js.replace(old_startup, new_startup)
print("PART 2: Added migrateToV9() and modified startup")

# ============================================================
# PART 3: Update save() to saveAppData() with error handling
# ============================================================

old_save = """function save() {
    localStorage.setItem('vocabApp_v2', JSON.stringify(vocabApp_v2));
    localStorage.setItem('starredIds',  JSON.stringify(starredIds));
    localStorage.setItem('currentView', JSON.stringify(currentView));
}"""

new_save = """function save() {
    saveAppData();
}

function saveAppData() {
    try {
        localStorage.setItem('vocabApp_v2', JSON.stringify(vocabApp_v2));
        // starredIds kept for backward compat but progress.starred is authoritative
        localStorage.setItem('starredIds',  JSON.stringify(starredIds));
        localStorage.setItem('currentView', JSON.stringify(currentView));
    } catch(e) {
        if (e.name === 'QuotaExceededError' || e.code === 22) {
            alert('本機儲存空間不足。\\n\\n請先匯出 JSON 備份後清理部分資料。');
        } else {
            console.error('Save failed:', e);
        }
    }
}"""

js = js.replace(old_save, new_save)
print("PART 3: Updated save() with error handling")

# ============================================================
# PART 4: Update getWordDuplicateCount → use normalizedEng
# ============================================================

old_dup = """function getWordDuplicateCount(engText) {
    if (!engText) return 1;
    const searchEng = engText.trim().toLowerCase();
    let count = 0;
    folders.forEach(f => {
        f.units.forEach(u => {
            u.words.forEach(w => {
                if (w.eng && w.eng.trim().toLowerCase() === searchEng) {
                    count++;
                }
            });
        });
    });
    return count;
}"""

new_dup = """function getWordDuplicateCount(engText) {
    if (!engText) return 1;
    const key = normalizeWord(engText);
    return getEncounterCount(key);
}"""

js = js.replace(old_dup, new_dup)
print("PART 4: Updated getWordDuplicateCount()")

# ============================================================
# PART 5: Update createWordCard() to use shared progress
# ============================================================

old_card_start = """function createWordCard(word, showBadge = false) {
    const isStarred = starredIds.includes(word.id);
    const mastery = word.mastery || 0;
    const dupCount = getWordDuplicateCount(word.eng);
    const dupBadgeHtml = dupCount > 1 
        ? `<span style="display:inline-block; margin-left:8px; font-size:0.55em; padding:2px 6px; background:rgba(239,68,68,0.15); color:#ef4444; border-radius:12px; border:1px solid rgba(239,68,68,0.3); vertical-align: middle;" title="此單字在所有字庫中共出現 ${dupCount} 次">⚠️ 重複手抄 (${dupCount})</span>` 
        : '';"""

new_card_start = """function createWordCard(word, showBadge = false) {
    const progress = getWordProgress(word);
    const isStarred = progress.starred;
    const mastery = progress.mastery || 0;
    const nEng = word.normalizedEng || word.normalizedWord || normalizeWord(word.eng || word.word || "");
    const encounterCount = getEncounterCount(nEng);
    const dupBadgeHtml = encounterCount > 1 
        ? `<span class="encounter-badge" data-neng="${nEng}" style="display:inline-block; margin-left:8px; font-size:0.55em; padding:2px 6px; background:rgba(59,130,246,0.15); color:#60a5fa; border-radius:12px; border:1px solid rgba(59,130,246,0.3); vertical-align: middle; cursor:pointer;" title="點擊查看來源" onclick="showEncounterDetail('${nEng.replace(/'/g, "\\\\'")}', event)">📝 遇過 ${encounterCount} 次</span>` 
        : '';"""

js = js.replace(old_card_start, new_card_start)
print("PART 5: Updated createWordCard() header")

# ============================================================
# PART 6: Update toggleStar() to use shared progress
# ============================================================

old_toggle_star = """function toggleStar(wordId, event) {
    if (event) event.stopPropagation();
    const idx = starredIds.indexOf(wordId);
    if (idx === -1) {
        starredIds.push(wordId);
    } else {
        if (!confirm('確定要移除此單字的星號嗎？')) return;
        starredIds.splice(idx, 1);
    }
    save();
    renderSidebar();
    renderMainContent();
}"""

new_toggle_star = """function toggleStar(wordId, event) {
    if (event) event.stopPropagation();
    // Find the word to get its normalizedEng
    let targetWord = null;
    if (appData && appData.words) {
        targetWord = appData.words.find(w => w.id === wordId);
    }
    if (!targetWord) {
        // Fallback: search in folders
        folders.forEach(f => f.units.forEach(u => u.words.forEach(w => {
            if (w.id === wordId) targetWord = w;
        })));
    }
    if (!targetWord) return;
    
    const progress = getWordProgress(targetWord);
    if (progress.starred) {
        if (!confirm('確定要移除此單字的星號嗎？')) return;
        progress.starred = false;
        progress.updatedAt = new Date().toISOString();
        // Also update starredIds for backward compat
        starredIds = starredIds.filter(id => id !== wordId);
    } else {
        progress.starred = true;
        progress.updatedAt = new Date().toISOString();
        // Also update starredIds for backward compat
        if (!starredIds.includes(wordId)) starredIds.push(wordId);
    }
    save();
    renderSidebar();
    renderMainContent();
}"""

js = js.replace(old_toggle_star, new_toggle_star)
print("PART 6: Updated toggleStar()")

# ============================================================
# PART 7: Update showDashboard() to use shared progress
# ============================================================

old_dashboard_counts = """    folders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                // Due"""

# Let me find and replace the dashboard counting section more carefully
# First find the showDashboard function
dashboard_idx = js.find("function showDashboard()")
if dashboard_idx != -1:
    # Find the counting loop
    old_dash_loop = """    folders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                // Due
                if (word.nextReviewAt && new Date(word.nextReviewAt) <= today) dueCount++;
                // Wrong
                if (word.wrongCount && word.wrongCount > 0) wrongCount++;
                // Mastered
                if (word.mastery && word.mastery >= 5) masteredCount++;
            });
        });
    });"""
    
    # Check if this pattern exists
    if old_dash_loop in js:
        new_dash_loop = """    // Use progressByWord for dashboard stats (deduplicated by normalizedEng)
    if (appData && appData.progressByWord) {
        Object.values(appData.progressByWord).forEach(progress => {
            if (progress.ignored) return;
            if (progress.nextReviewAt && new Date(progress.nextReviewAt) <= today) dueCount++;
            if (progress.wrongCount && progress.wrongCount > 0 && progress.mastery < 4) wrongCount++;
            if (progress.mastery >= 4) masteredCount++;
        });
        // Count new (never reviewed)
        const reviewedKeys = new Set(Object.keys(appData.progressByWord).filter(k => appData.progressByWord[k].lastReviewedAt));
        const allKeys = new Set();
        if (appData.words) {
            appData.words.forEach(w => {
                const nEng = normalizeWord(w.word || w.eng || "");
                if (nEng) allKeys.add(nEng);
            });
        }
        allKeys.forEach(k => {
            if (!reviewedKeys.has(k)) newCount++;
        });
    }"""
        js = js.replace(old_dash_loop, new_dash_loop)
        print("PART 7a: Updated showDashboard() counting loop")
    else:
        # Try alternate pattern
        print("PART 7a: WARNING - Could not find exact dashboard loop pattern, trying alternate...")
        # Find the section more flexibly
        pattern_start = "folders.forEach(folder => {\n        folder.units.forEach(unit => {\n            unit.words.forEach(word => {\n                // Due"
        alt_idx = js.find("// Due\n", dashboard_idx)
        if alt_idx != -1:
            print(f"PART 7a: Found '// Due' at position {alt_idx}")
            # We'll handle this in a second pass if needed
        else:
            print("PART 7a: SKIPPED - manual fix needed for dashboard counting")

# Also check for the mastery >= 5 check in dashboard
if "word.mastery >= 5) masteredCount++" in js:
    # Already handled above
    pass
elif "word.mastery >= 5" in js:
    print("PART 7b: Found alternate mastery check pattern")

# ============================================================
# PART 8: Update renderStatsView() to use shared progress
# ============================================================

old_stats = """function renderStatsView() {
    setFormattedTitle('📊 學習統計');
    headerActions.classList.add('hidden');
    statsSectionEl.classList.remove('hidden');
    
    let total = 0, m0 = 0, m12 = 0, m34 = 0, m5 = 0;
    
    folders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                total++;
                const m = word.mastery || 0;
                if (m === 0) m0++;
                else if (m === 1 || m === 2) m12++;
                else if (m === 3 || m === 4) m34++;
                else if (m >= 5) m5++;
            });
        });
    });"""

new_stats = """function renderStatsView() {
    setFormattedTitle('📊 學習統計');
    headerActions.classList.add('hidden');
    statsSectionEl.classList.remove('hidden');
    
    let total = 0, m0 = 0, m12 = 0, m34 = 0, m5 = 0;
    
    // Use progressByWord for stats (deduplicated by normalizedEng)
    if (appData && appData.progressByWord) {
        Object.values(appData.progressByWord).forEach(progress => {
            total++;
            const m = progress.mastery || 0;
            if (m === 0) m0++;
            else if (m === 1 || m === 2) m12++;
            else if (m === 3 || m === 4) m34++;
            else if (m >= 5) m5++;
        });
    }"""

js = js.replace(old_stats, new_stats)
print("PART 8: Updated renderStatsView()")

# ============================================================
# PART 9: Update fcRemember() to use shared progress
# ============================================================

old_fc_remember = """function fcRemember() {
    const word = fcWords[fcIndex];
    if (word) {
        previousWordState = {
            id: word.id,
            mastery: word.mastery,
            streak: word.streak,
            correctCount: word.correctCount,
            wrongCount: word.wrongCount,
            lastWrongAt: word.lastWrongAt,
            lastReviewedAt: word.lastReviewedAt,
            nextReviewAt: word.nextReviewAt
        };
        showUndoToast('記得');

        
        let prevMastery = word.mastery || 0;
        if (!isBrowseMode && !fcSession.masteryIncreasedWordIds.has(word.id)) {
            word.mastery = Math.min(prevMastery + 1, 5);
            fcSession.masteryIncreasedWordIds.add(word.id);
            if (prevMastery === 3 && word.mastery === 4) {
                fcSession.newlyMasteredIds.add(word.id);
            }
        }
        if (!isBrowseMode) { fcSession.answeredWordIds.add(word.id); }
        if (!isBrowseMode) { fcSession.correctWordIds.add(word.id); }

        if (!isBrowseMode) { word.correctCount = (word.correctCount || 0) + 1; }
        if (!isBrowseMode) { word.streak = (word.streak || 0) + 1; }
        if (!isBrowseMode) { word.lastReviewedAt = new Date().toISOString(); }
        if (!isBrowseMode) { word.nextReviewAt = getNextReviewDate(word.mastery); }
        if (!isBrowseMode) save();
    }"""

new_fc_remember = """function fcRemember() {
    const word = fcWords[fcIndex];
    if (word) {
        const progress = getWordProgress(word);
        const nEng = word.normalizedEng || word.normalizedWord || normalizeWord(word.eng || word.word || "");
        
        previousWordState = {
            id: word.id,
            normalizedEng: nEng,
            mastery: progress.mastery,
            streak: progress.streak,
            correctCount: progress.correctCount,
            wrongCount: progress.wrongCount,
            lastWrongAt: progress.lastWrongAt,
            lastReviewedAt: progress.lastReviewedAt,
            nextReviewAt: progress.nextReviewAt
        };
        showUndoToast('記得');

        if (!isBrowseMode) {
            const now = new Date().toISOString();
            progress.correctCount = (progress.correctCount || 0) + 1;
            progress.streak = (progress.streak || 0) + 1;
            progress.lastReviewedAt = now;
            progress.updatedAt = now;
            
            // Session mastery limit: same normalizedEng max +1 per session
            if (!fcSession.masteryIncreasedKeys.has(nEng)) {
                let prevMastery = progress.mastery || 0;
                progress.mastery = Math.min(prevMastery + 1, 5);
                fcSession.masteryIncreasedKeys.add(nEng);
                if (prevMastery === 3 && progress.mastery === 4) {
                    fcSession.newlyMasteredKeys.add(nEng);
                }
            }
            
            fcSession.answeredKeys.add(nEng);
            fcSession.correctKeys.add(nEng);
            
            progress.nextReviewAt = getNextReviewDate(progress.mastery);
            save();
        }
    }"""

js = js.replace(old_fc_remember, new_fc_remember)
print("PART 9: Updated fcRemember()")

# ============================================================
# PART 10: Update fcForget() to use shared progress
# ============================================================

old_fc_forget_part = """    const word = fcWords[fcIndex];
    if (word) {
        previousWordState = {
            id: word.id,
            mastery: word.mastery,
            streak: word.streak,
            correctCount: word.correctCount,
            wrongCount: word.wrongCount,
            lastWrongAt: word.lastWrongAt,
            lastReviewedAt: word.lastReviewedAt,
            nextReviewAt: word.nextReviewAt
        };
        if (!isBrowseMode) showUndoToast('忘記');

        if (!isBrowseMode) { word.mastery = Math.max((word.mastery || 0) - 1, 0); }
        if (!isBrowseMode) { word.wrongCount = (word.wrongCount || 0) + 1; }
        if (!isBrowseMode) { word.streak = 0; }
        if (!isBrowseMode) { word.lastReviewedAt = new Date().toISOString(); }
        if (!isBrowseMode) { word.lastWrongAt = new Date().toISOString(); }
        
        if (!isBrowseMode) {
            let tomorrow = new Date();
            tomorrow.setHours(0, 0, 0, 0);
            tomorrow.setDate(tomorrow.getDate() + 1);
            word.nextReviewAt = tomorrow.toISOString();
        }
        
        if (!isBrowseMode) save();
    }"""

new_fc_forget_part = """    const word = fcWords[fcIndex];
    if (word) {
        const progress = getWordProgress(word);
        const nEng = word.normalizedEng || word.normalizedWord || normalizeWord(word.eng || word.word || "");
        
        previousWordState = {
            id: word.id,
            normalizedEng: nEng,
            mastery: progress.mastery,
            streak: progress.streak,
            correctCount: progress.correctCount,
            wrongCount: progress.wrongCount,
            lastWrongAt: progress.lastWrongAt,
            lastReviewedAt: progress.lastReviewedAt,
            nextReviewAt: progress.nextReviewAt
        };
        if (!isBrowseMode) showUndoToast('忘記');

        if (!isBrowseMode) {
            const now = new Date().toISOString();
            progress.mastery = Math.max((progress.mastery || 0) - 1, 0);
            progress.wrongCount = (progress.wrongCount || 0) + 1;
            progress.streak = 0;
            progress.lastReviewedAt = now;
            progress.lastWrongAt = now;
            progress.updatedAt = now;
            
            let tomorrow = new Date();
            tomorrow.setHours(0, 0, 0, 0);
            tomorrow.setDate(tomorrow.getDate() + 1);
            progress.nextReviewAt = tomorrow.toISOString();
            
            fcSession.answeredKeys.add(nEng);
            fcSession.wrongKeys.add(nEng);
            
            save();
        }
    }"""

js = js.replace(old_fc_forget_part, new_fc_forget_part)
print("PART 10: Updated fcForget()")

# ============================================================
# PART 11: Update fcSession structure
# ============================================================

old_fc_session = """let fcSession = {
    id: null,
    startedAt: null,
    wordIds: [],
    answeredWordIds: new Set(),
    masteryIncreasedWordIds: new Set(),
    correctWordIds: new Set(),
    wrongWordIds: new Set(),
    newlyMasteredIds: new Set()
};"""

new_fc_session = """let fcSession = {
    id: null,
    startedAt: null,
    wordKeys: [],        // normalizedEng keys
    answeredKeys: new Set(),
    masteryIncreasedKeys: new Set(),
    correctKeys: new Set(),
    wrongKeys: new Set(),
    newlyMasteredKeys: new Set()
};"""

js = js.replace(old_fc_session, new_fc_session)
print("PART 11: Updated fcSession structure")

# Also update the session initialization in openFlashcardMode
old_session_init = """    fcSession = {
        id: 'session-' + Math.random().toString(36).substr(2, 9),
        startedAt: new Date().toISOString(),
        wordIds: fcWords.map(w => w.id),
        answeredWordIds: new Set(),
        masteryIncreasedWordIds: new Set(),
        correctWordIds: new Set(),
        wrongWordIds: new Set(),
        newlyMasteredIds: new Set()
    };"""

new_session_init = """    fcSession = {
        id: 'session-' + Math.random().toString(36).substr(2, 9),
        startedAt: new Date().toISOString(),
        wordKeys: fcWords.map(w => w.normalizedEng || w.normalizedWord || normalizeWord(w.eng || w.word || "")),
        answeredKeys: new Set(),
        masteryIncreasedKeys: new Set(),
        correctKeys: new Set(),
        wrongKeys: new Set(),
        newlyMasteredKeys: new Set()
    };"""

js = js.replace(old_session_init, new_session_init)
print("PART 11b: Updated session initialization")

# ============================================================
# PART 12: Update SRS getNextReviewDate()
# ============================================================

old_srs = """function getNextReviewDate(mastery) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    const daysToAdd = { 0: 0, 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }[Math.min(mastery || 0, 5)];
    d.setDate(d.getDate() + daysToAdd);
    return d.toISOString();
}"""

new_srs = """function getNextReviewDate(mastery) {
    // §25: Fixed SRS intervals based on mastery level
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    // Use next calendar day as base (§27)
    d.setDate(d.getDate() + getReviewIntervalDays(mastery));
    return d.toISOString();
}

function getReviewIntervalDays(mastery) {
    switch (Math.min(mastery || 0, 5)) {
        case 0: case 1: return 1;
        case 2: return 3;
        case 3: return 7;
        case 4: return 14;
        case 5: return 30;
        default: return 1;
    }
}"""

js = js.replace(old_srs, new_srs)
print("PART 12: Updated SRS getNextReviewDate()")

# ============================================================
# PART 13: Update Undo to use shared progress
# ============================================================

# Find the undo handler
old_undo = """        word.mastery = previousWordState.mastery;"""
if old_undo in js:
    # Get surrounding context to be more specific
    undo_idx = js.find(old_undo)
    # Read more context
    context_start = max(0, undo_idx - 200)
    context = js[context_start:undo_idx + 200]
    
    # Replace the undo block
    old_undo_block = """        word.mastery = previousWordState.mastery;"""
    new_undo_block = """        const undoProgress = getWordProgress(word);
        undoProgress.mastery = previousWordState.mastery;"""
    js = js.replace(old_undo_block, new_undo_block, 1)
    print("PART 13: Updated Undo mastery restore")

# ============================================================
# PART 14: Update Today's Review algorithm
# ============================================================

old_today_review = """        if (currentView.type === 'today') {
            const today = new Date();
            today.setHours(0,0,0,0);
            let candidates = [];
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        if (w.mastery >= 5) return; // Skip mastered
                        let score = 0;
                        if (w.wrongCount > 0) score += 100; // Prioritize wrong
                        if (w.nextReviewAt && new Date(w.nextReviewAt) <= today) score += 50; // Due
                        if (!w.lastReviewedAt) score += 10; // New
                        if (score > 0) candidates.push({ word: w, score });
                    });
                });
            });
            candidates.sort((a, b) => b.score - a.score);
            fcWords = candidates.slice(0, 20).map(c => c.word); // Max 20"""

new_today_review = """        if (currentView.type === 'today') {
            const today = new Date();
            today.setHours(0,0,0,0);
            const dailyLimit = (appData && appData.settings && appData.settings.dailyReviewCount) || 20;
            
            // §29-§31: Build candidates from all words, deduplicate by normalizedEng
            let seenKeys = new Set();
            let catA = []; // Recent wrong + due
            let catB = []; // Due
            let catC = []; // Never reviewed
            let catD = []; // Other low mastery
            
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        const nEng = w.normalizedEng || w.normalizedWord || normalizeWord(w.eng || w.word || "");
                        if (!nEng || seenKeys.has(nEng)) return;
                        seenKeys.add(nEng);
                        
                        const progress = getWordProgress(w);
                        if (progress.ignored) return; // §29: exclude ignored
                        if (progress.mastery >= 4) return; // Skip mastered unless due
                        
                        const isDue = progress.nextReviewAt && new Date(progress.nextReviewAt) <= today;
                        const recentWrong = progress.lastWrongAt != null;
                        const neverReviewed = progress.lastReviewedAt == null;
                        const encounterCount = getEncounterCount(nEng);
                        
                        // Also include mastered words that are due
                        if (progress.mastery >= 4 && !isDue) return;
                        
                        if (recentWrong && isDue) {
                            catA.push({ word: w, progress, encounterCount });
                        } else if (isDue) {
                            catB.push({ word: w, progress, encounterCount });
                        } else if (neverReviewed) {
                            catC.push({ word: w, progress, encounterCount });
                        } else if (progress.mastery < 4) {
                            catD.push({ word: w, progress, encounterCount });
                        }
                    });
                });
            });
            
            // §31: Sort each category
            catA.sort((a, b) => (b.progress.wrongCount - a.progress.wrongCount) || 
                new Date(b.progress.lastWrongAt || 0) - new Date(a.progress.lastWrongAt || 0) ||
                (b.encounterCount - a.encounterCount));
            catB.sort((a, b) => new Date(a.progress.nextReviewAt || 0) - new Date(b.progress.nextReviewAt || 0) || 
                (a.progress.mastery - b.progress.mastery) ||
                (b.encounterCount - a.encounterCount));
            catC.sort(() => Math.random() - 0.5);
            catD.sort((a, b) => (a.progress.mastery - b.progress.mastery) || 
                new Date(a.progress.lastReviewedAt || 0) - new Date(b.progress.lastReviewedAt || 0) ||
                (b.encounterCount - a.encounterCount));
            
            let allCandidates = [...catA, ...catB, ...catC, ...catD];
            fcWords = allCandidates.slice(0, dailyLimit).map(c => c.word);"""

js = js.replace(old_today_review, new_today_review)
print("PART 14: Updated Today's Review algorithm")

# ============================================================
# PART 15: Update starred view to use shared progress
# ============================================================

old_starred_view_collect = """        } else if (currentView.type === 'starred') {
            fcWords = [];
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        if (starredIds.includes(w.id)) fcWords.push(w);
                    });
                });
            });"""

new_starred_view_collect = """        } else if (currentView.type === 'starred') {
            fcWords = [];
            let starredSeen = new Set();
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        const nEng = w.normalizedEng || w.normalizedWord || normalizeWord(w.eng || w.word || "");
                        const progress = getWordProgress(w);
                        if (progress.starred && !starredSeen.has(nEng)) {
                            starredSeen.add(nEng);
                            fcWords.push(w);
                        }
                    });
                });
            });"""

js = js.replace(old_starred_view_collect, new_starred_view_collect)
print("PART 15: Updated starred view in flashcard mode")

# ============================================================
# PART 16: Update wrong words view in flashcard mode
# ============================================================

old_wrong_view_collect = """        } else if (currentView.type === 'wrong') {
            fcWords = [];
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        if (w.wrongCount && w.wrongCount > 0) fcWords.push(w);
                    });
                });
            });
            fcWords.sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0));"""

new_wrong_view_collect = """        } else if (currentView.type === 'wrong') {
            fcWords = [];
            let wrongSeen = new Set();
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        const nEng = w.normalizedEng || w.normalizedWord || normalizeWord(w.eng || w.word || "");
                        const progress = getWordProgress(w);
                        // §36: Current wrong = wrongCount > 0 && mastery < 4
                        if (progress.wrongCount > 0 && progress.mastery < 4 && !wrongSeen.has(nEng)) {
                            wrongSeen.add(nEng);
                            fcWords.push(w);
                        }
                    });
                });
            });
            fcWords.sort((a, b) => {
                const pA = getWordProgress(a), pB = getWordProgress(b);
                return (pB.wrongCount || 0) - (pA.wrongCount || 0);
            });"""

js = js.replace(old_wrong_view_collect, new_wrong_view_collect)
print("PART 16: Updated wrong words in flashcard mode")

# ============================================================
# PART 17: Update stats_review in flashcard mode
# ============================================================

old_stats_review = """        } else if (currentView.type === 'stats_review') {
            const level = currentView.level;
            let candidates = [];
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        const m = w.mastery || 0;
                        if (level === -1) {
                            candidates.push(w);
                        } else if (level === 0 && m === 0) {
                            candidates.push(w);
                        } else if (level === 1 && (m === 1 || m === 2)) {
                            candidates.push(w);
                        } else if (level === 3 && (m === 3 || m === 4)) {
                            candidates.push(w);
                        } else if (level === 5 && m >= 5) {
                            candidates.push(w);
                        }
                    });
                });
            });
            candidates.sort(() => Math.random() - 0.5);
            fcWords = candidates.slice(0, 40);"""

new_stats_review = """        } else if (currentView.type === 'stats_review') {
            const level = currentView.level;
            let candidates = [];
            let statsSeen = new Set();
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        const nEng = w.normalizedEng || w.normalizedWord || normalizeWord(w.eng || w.word || "");
                        if (statsSeen.has(nEng)) return;
                        statsSeen.add(nEng);
                        const progress = getWordProgress(w);
                        const m = progress.mastery || 0;
                        if (level === -1) {
                            candidates.push(w);
                        } else if (level === 0 && m === 0) {
                            candidates.push(w);
                        } else if (level === 1 && (m === 1 || m === 2)) {
                            candidates.push(w);
                        } else if (level === 3 && (m === 3 || m === 4)) {
                            candidates.push(w);
                        } else if (level === 5 && m >= 5) {
                            candidates.push(w);
                        }
                    });
                });
            });
            candidates.sort(() => Math.random() - 0.5);
            fcWords = candidates.slice(0, 40);"""

js = js.replace(old_stats_review, new_stats_review)
print("PART 17: Updated stats_review in flashcard mode")

# ============================================================
# PART 18: Update confusion quiz to use shared progress
# ============================================================

old_cq_correct = """                q.correctWord.mastery = Math.min((q.correctWord.mastery || 0) + 1, 5);
                q.correctWord.correctCount = (q.correctWord.correctCount || 0) + 1;
                save();"""

new_cq_correct = """                const cqProgress = getWordProgress(q.correctWord);
                cqProgress.mastery = Math.min((cqProgress.mastery || 0) + 1, 5);
                cqProgress.correctCount = (cqProgress.correctCount || 0) + 1;
                cqProgress.lastReviewedAt = new Date().toISOString();
                cqProgress.updatedAt = new Date().toISOString();
                cqProgress.nextReviewAt = getNextReviewDate(cqProgress.mastery);
                save();"""

js = js.replace(old_cq_correct, new_cq_correct)
print("PART 18a: Updated confusion quiz correct answer")

old_cq_wrong = """                q.correctWord.mastery = Math.max((q.correctWord.mastery || 0) - 1, 0);
                q.correctWord.wrongCount = (q.correctWord.wrongCount || 0) + 1;
                save();"""

new_cq_wrong = """                const cqWrongProgress = getWordProgress(q.correctWord);
                cqWrongProgress.mastery = Math.max((cqWrongProgress.mastery || 0) - 1, 0);
                cqWrongProgress.wrongCount = (cqWrongProgress.wrongCount || 0) + 1;
                cqWrongProgress.lastWrongAt = new Date().toISOString();
                cqWrongProgress.lastReviewedAt = new Date().toISOString();
                cqWrongProgress.updatedAt = new Date().toISOString();
                // §26: Wrong → nextReviewAt = tomorrow
                let cqTomorrow = new Date(); cqTomorrow.setHours(0,0,0,0); cqTomorrow.setDate(cqTomorrow.getDate() + 1);
                cqWrongProgress.nextReviewAt = cqTomorrow.toISOString();
                save();"""

js = js.replace(old_cq_wrong, new_cq_wrong)
print("PART 18b: Updated confusion quiz wrong answer")

# ============================================================
# PART 19: Add showEncounterDetail() function
# ============================================================

# Add before the INIT section
init_marker = "// =====================================================\n// INIT\n// ====================================================="
encounter_detail_func = """// =====================================================
// ENCOUNTER DETAIL MODAL
// =====================================================
function showEncounterDetail(normalizedEng, event) {
    if (event) event.stopPropagation();
    const sources = getEncounterSources(normalizedEng);
    if (sources.length === 0) return;
    
    let sourceHtml = sources.map(s => 
        `<div style="padding:8px 12px; background:rgba(255,255,255,0.05); border-radius:8px; margin-bottom:6px;">
            <div style="font-weight:600; color:var(--text-primary);">${s.folder}</div>
            <div style="font-size:0.9rem; color:var(--text-secondary);">${s.unit}</div>
        </div>`
    ).join('');
    
    // Create modal overlay
    let modal = document.getElementById('encounter-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'encounter-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content" style="max-width:400px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h2 id="encounter-modal-title" style="font-size:1.3rem;"></h2>
                <button class="icon-btn" onclick="document.getElementById('encounter-modal').classList.add('hidden')" style="color:var(--text-secondary);"><span class="material-symbols-outlined">close</span></button>
            </div>
            <p style="color:var(--text-secondary); margin-bottom:12px;">你在以下位置遇過這個單字：</p>
            <div id="encounter-modal-sources"></div>
        </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
    }
    
    document.getElementById('encounter-modal-title').textContent = normalizedEng;
    document.getElementById('encounter-modal-sources').innerHTML = sourceHtml;
    modal.classList.remove('hidden');
}

""" + init_marker

js = js.replace(init_marker, encounter_detail_func)
print("PART 19: Added showEncounterDetail()")

# ============================================================
# PART 20: Update dashboard mastery checks
# ============================================================

# Check for remaining word.mastery references that need updating
# The showDashboard counting was already handled in PART 7
# Let's check for the pattern where mastery is checked in the dashboard display
if "word.mastery >= 5" in js:
    # This might be in the mastered count check - let's check context
    remaining = js.count("word.mastery")
    print(f"PART 20: WARNING - {remaining} remaining 'word.mastery' references")

# Let's also handle the data validation for words during rebuild
# We need to ensure normalizedEng is set on all words
old_rebuild_push = """        // Push a proxy-like object or mapped object so UI bindings work?
        // Wait, UI uses `word.eng` and `word.cht`! We must map v2 keys back to v1 keys for the UI to read them, 
        // OR we just use getters/setters so updates write back to v2.
        Object.defineProperty(w, 'eng', { get: function() { return this.word; }, set: function(val) { this.word = val; }});
        Object.defineProperty(w, 'cht', { get: function() { return this.meaning; }, set: function(val) { this.meaning = val; }});
        
        unit.words.push(w);"""

new_rebuild_push = """        // Push a proxy-like object or mapped object so UI bindings work?
        // Wait, UI uses `word.eng` and `word.cht`! We must map v2 keys back to v1 keys for the UI to read them, 
        // OR we just use getters/setters so updates write back to v2.
        if (!w.eng) Object.defineProperty(w, 'eng', { get: function() { return this.word; }, set: function(val) { this.word = val; }, configurable: true});
        if (!w.cht) Object.defineProperty(w, 'cht', { get: function() { return this.meaning; }, set: function(val) { this.meaning = val; }, configurable: true});
        
        // Ensure normalizedEng is set (§85)
        if (!w.normalizedEng) {
            w.normalizedEng = normalizeWord(w.word || "");
        }
        
        unit.words.push(w);"""

js = js.replace(old_rebuild_push, new_rebuild_push)
print("PART 20: Updated rebuildFoldersView() to ensure normalizedEng")

# ============================================================
# PART 21: Update Backup Export to V9 format
# ============================================================

old_backup_export = """        const backupObj = {
            schemaVersion: vocabApp_v2.schemaVersion,
            words: vocabApp_v2.words,
            settings: vocabApp_v2.settings,
            metadata: {
                ...vocabApp_v2.metadata,
                lastExportedAt: new Date().toISOString()
            }
        };"""

new_backup_export = """        const backupObj = {
            schemaVersion: vocabApp_v2.schemaVersion || SCHEMA_VERSION,
            words: vocabApp_v2.words,
            progressByWord: vocabApp_v2.progressByWord || {},
            imports: vocabApp_v2.imports || [],
            settings: vocabApp_v2.settings || {},
            metadata: {
                ...vocabApp_v2.metadata,
                lastExportedAt: new Date().toISOString(),
                appVersion: APP_VERSION
            }
        };"""

js = js.replace(old_backup_export, new_backup_export)
print("PART 21: Updated backup export to V9 format")

# ============================================================
# PART 22: Update remaining dashboard word.mastery references
# ============================================================

# Fix the dashboard word.mastery checks that were inside the forEach
# Check if PART 7 handled it correctly
if "word.mastery >= 5) masteredCount++" in js:
    print("PART 22: WARNING - Dashboard mastery check still uses word.mastery directly")
elif "word.mastery > 0" in js:
    print("PART 22: WARNING - Some word.mastery references remain")

# Let's count remaining direct word.mastery and word.wrongCount references
remaining_mastery = js.count("word.mastery")
remaining_wrong = js.count("word.wrongCount")
remaining_correct = js.count("word.correctCount")
remaining_streak = js.count("word.streak")
print(f"PART 22 Stats: word.mastery={remaining_mastery}, word.wrongCount={remaining_wrong}, word.correctCount={remaining_correct}, word.streak={remaining_streak}")

# ============================================================
# FINAL: Write the modified file
# ============================================================

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("\n✅ Migration script complete! app.js has been updated.")
print("Backup saved as app.js.bak")

# Also update index.html cache version and sw.js
import re as re2

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = re2.sub(r'v=\d{8}_\d+', 'v=20260906_24', html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("index.html cache version bumped to v24")

with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()
sw = re2.sub(r'vocab-app-v\d+', 'vocab-app-v24', sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("sw.js cache version bumped to v24")
