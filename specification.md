# 📚 Vocab Master (單字本 PWA) 系統規格書

**最後更新時間**：2026年9月
**當前版本**：v2.0 (Service Worker Cache v23)

---

## 1. 系統架構與技術棧 (Tech Stack)
*   **前端核心**：純原生 HTML5, CSS3, Vanilla JavaScript (ES6+)，無依賴大型前端框架（如 React/Vue）。
*   **資料儲存 (Data Storage)**：完全依賴瀏覽器的 `localStorage` 進行本地端持久化儲存（離線可用，無後端資料庫）。
*   **PWA (漸進式網頁應用)**：支援 Service Worker (`sw.js`) 與 `manifest.json`，可安裝至 iOS/Android 桌面，並支援完全離線執行與快取更新。
*   **第三方套件**：僅使用 Chart.js (CDN) 作為「學習統計」的資料視覺化繪圖。

---

## 2. 核心功能模組 (Core Modules)

### 2.1 導覽與字庫管理 (Navigation & Folders)
*   **側邊欄 (Sidebar)**：支援響應式設計（手機版為抽屜式選單，電腦版固定於左側）。
*   **資料夾與回數 (Folders & Units)**：
    *   內建/預設字庫（如：新制多益、Parker）。
    *   自建字庫（如：📝 手寫筆記單字）。
    *   每層資料夾可包含多個「回數 (Units)」，每個回數內含具體的單字列表。

### 2.2 單字管理與展示 (Word Management)
*   **單字卡片結構**：包含英文 (`eng`)、中文解釋 (`cht`)、熟練度星星 (1~5星)、出處單元標籤。
*   **手動新增單字**：在任何單元內皆可透過表單手動新增單字。
*   **重複查重機制 (Duplicate Detection)**：
    *   系統會在背景自動比對所有資料夾的英文單字（忽略大小寫與前後空白）。
    *   若單字重複出現，卡片上會自動掛載醒目的 `⚠️ 重複手抄 (N)` 紅色標籤。
*   **發音功能 (TTS, Text-to-Speech)**：
    *   使用 Web Speech API。
    *   **多國口音連播**：點擊發音時，會自動按照「美式 (US) ➡️ 英式 (GB) ➡️ 澳洲 (AU) ➡️ 加拿大 (CA)」的順序輪播發音。

### 2.3 智慧與自訂學習區 (Smart & Custom Study)
*   **🌟 加星號的單字**：使用者可將單字打星號，集中在此區複習。
*   **❌ 錯題複習**：系統自動收集測驗中標記為「忘記」的單字，並依據錯誤次數 (wrongCount) 排序，錯越多的排越前面。
*   **🎓 自訂學習與測驗**：
    *   以「樹狀核取方塊 (Tree Checkbox)」呈現所有字庫與回數。
    *   使用者可自由勾選跨資料夾、跨回數的單字。
    *   點擊「開始卡片模式」將勾選的單字集合進行專屬測驗。

### 2.4 卡片測驗模式 (Flashcard Mode)
*   **方向選擇**：提供「🔀 隨機」、「🇬🇧 英 ➡️ 🇹🇼 中」、「🇹🇼 中 ➡️ 🇬🇧 英」三種翻卡測驗模式。
*   **翻卡與計分機制 (Spaced Repetition)**：
    *   點擊卡片翻面後，需選擇「記得 (右滑/✔)」或「忘記 (左滑/✖)」。
    *   **記得**：熟練度 (Mastery) 增加，最高達 5 星（🔥 已熟練）。
    *   **忘記**：錯誤次數增加，熟練度歸零或下降，單字自動排入「錯題複習」清單。
*   **今日複習 (Today's Review)**：系統會自動根據演算法（錯誤次數高、到期需複習、尚未複習過）挑選 20 個單字進行每日任務。

### 2.5 學習統計與進階挑戰 (Stats & Challenges)
*   **📊 學習統計**：
    *   使用圖表顯示各熟練度（0~5星）的單字分佈比例。
    *   顯示「已熟練單字量」、「容易混淆單字量」等數據，並可直接點擊區塊進行針對性複習。
*   **🔀 易混淆挑戰 (Confusion Quiz)**：
    *   系統隨機挑選 10 題進行四選一選擇題測驗。
    *   錯誤選項 (Distractors) 會利用 Levenshtein Distance (編輯距離演算法) 動態計算，挑選出與正確答案**拼字最相似**的其他單字作為干擾選項，增加測驗難度。

### 2.6 資料備份與轉移 (Data Backup)
*   **📥 筆記匯入與匯出**：
    *   提供完整的 JSON 格式匯出，方便使用者將進度備份至電腦或其他裝置。
    *   支援將外部 JSON 匯入系統，並可選擇「🔄 合併資料（不覆蓋進度）」或「⚠️ 完全覆寫（清空舊資料）」。

---

## 3. 資料結構 (Data Schema V8)
系統儲存在 `localStorage` 中的核心物件 `vocabApp_v2` 結構如下：
```typescript
interface VocabAppV2 {
    folders: Folder[];
}

interface Folder {
    id: string;          // 資料夾唯一 ID
    name: string;        // 資料夾名稱
    icon: string;        // Material Symbols 點綴圖示
    cssClass: string;    // 自訂 CSS 類別
    units: Unit[];       // 包含的回數陣列
}

interface Unit {
    id: string;          // 回數唯一 ID
    name: string;        // 回數名稱
    words: Word[];       // 單字陣列
}

interface Word {
    id: string;          // 單字唯一 ID
    eng: string;         // 英文單字
    cht: string;         // 中文解釋
    mastery?: number;    // 熟練度 (0~5)
    wrongCount?: number; // 錯誤次數
    lastReviewedAt?: string; // 上次複習時間 (ISO String)
    nextReviewAt?: string;   // 下次預計複習時間 (ISO String)
}
```
