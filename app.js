// =====================================================
// DEFAULT DATA — Folders & Units
// =====================================================
const defaultFolders = [
    {
        id: "folder-parker",
        name: "Parker",
        icon: "menu_book",
        cssClass: "folder-parker",
        units: [
            {
                id: "unit-01",
                name: "01 Occupations 職業",
                words: [
                    { id: "w1-1",  eng: "receptionist",       cht: "n. 接待員" },
                    { id: "w1-2",  eng: "dentist",             cht: "n. 牙醫" },
                    { id: "w1-3",  eng: "electrician",         cht: "n. 電工、電匠" },
                    { id: "w1-4",  eng: "surgeon",             cht: "n. 外科醫生" },
                    { id: "w1-5",  eng: "painter",             cht: "n. 畫家、油漆工" },
                    { id: "w1-6",  eng: "tailor",              cht: "n. 裁縫師" },
                    { id: "w1-7",  eng: "captain",             cht: "n. 機長、船長" },
                    { id: "w1-8",  eng: "hairstylist",         cht: "n. 髮型師" },
                    { id: "w1-9",  eng: "pharmacist",          cht: "n. 藥劑師" },
                    { id: "w1-10", eng: "typist",              cht: "n. 打字員" },
                    { id: "w1-11", eng: "construction worker", cht: "n. 建築工人" },
                    { id: "w1-12", eng: "accountant",          cht: "n. 會計師" },
                    { id: "w1-13", eng: "housekeeper",         cht: "n. 飯店房務" },
                    { id: "w1-14", eng: "musician",            cht: "n. 音樂家" },
                    { id: "w1-15", eng: "travel agent",        cht: "n. 旅遊專員" },
                    { id: "w1-16", eng: "editor",              cht: "n. 編輯" },
                    { id: "w1-17", eng: "pilot",               cht: "n. 機師、飛行員" },
                    { id: "w1-18", eng: "florist",             cht: "n. 花匠、花商" },
                    { id: "w1-19", eng: "architect",           cht: "n. 建築師" },
                    { id: "w1-20", eng: "mechanic",            cht: "n. 技師、技工" },
                    { id: "w1-21", eng: "banker",              cht: "n. 銀行家" },
                    { id: "w1-22", eng: "entrepreneur",        cht: "n. 企業家" },
                    { id: "w1-23", eng: "carpenter",           cht: "n. 木工木匠" },
                    { id: "w1-24", eng: "technician",          cht: "n. 技術人員" },
                    { id: "w1-25", eng: "engineer",            cht: "n. 工程師" },
                    { id: "w1-26", eng: "chef",                cht: "n. 廚師、主廚" },
                    { id: "w1-27", eng: "realtor",             cht: "n. 房屋中介" },
                    { id: "w1-28", eng: "secretary",           cht: "n. 秘書" },
                    { id: "w1-29", eng: "attorney",            cht: "n. 律師" },
                    { id: "w1-30", eng: "butcher",             cht: "n. 肉販、屠夫" }
                ]
            },
            {
                id: "unit-02",
                name: "02 Recreation 娛樂",
                words: [
                    { id: "w2-1",  eng: "entry-level",   cht: "adj. 入門的；初階的" },
                    { id: "w2-2",  eng: "circus",        cht: "n. 馬戲團" },
                    { id: "w2-3",  eng: "professional",  cht: "adj./n. 專業的；專業人士" },
                    { id: "w2-4",  eng: "excited",       cht: "adj. 興奮的；激動的" },
                    { id: "w2-5",  eng: "favorable",     cht: "adj. 有利的；贊同的" },
                    { id: "w2-6",  eng: "gym",           cht: "n. 健身房" },
                    { id: "w2-7",  eng: "celebrity",     cht: "n. 名人" },
                    { id: "w2-8",  eng: "location",      cht: "n. 地點；位置" },
                    { id: "w2-9",  eng: "participate",   cht: "v. 參與；參加" },
                    { id: "w2-10", eng: "outdoors",      cht: "adv. 在室外" },
                    { id: "w2-11", eng: "accustomed",    cht: "adj. 習慣的" },
                    { id: "w2-12", eng: "pass",          cht: "v./n. 通過；經過；通行證" },
                    { id: "w2-13", eng: "indulge",       cht: "v. 沉溺；沉迷" },
                    { id: "w2-14", eng: "drama",         cht: "n. 戲劇" },
                    { id: "w2-15", eng: "fascinating",   cht: "adj. 吸引人的" },
                    { id: "w2-16", eng: "salon",         cht: "n. 美容院；美髮廳" },
                    { id: "w2-17", eng: "occasion",      cht: "n. 場合；時機、時刻" },
                    { id: "w2-18", eng: "headline",      cht: "n. 標題（deadline: n. 截止期限）" },
                    { id: "w2-19", eng: "traditional",   cht: "adj. 傳統的" },
                    { id: "w2-20", eng: "fishing",       cht: "n. 釣魚" },
                    { id: "w2-21", eng: "amuse",         cht: "v. 使…開心；逗…開心" },
                    { id: "w2-22", eng: "live",          cht: "adj./adv. 現場的；直播的；活體的" },
                    { id: "w2-23", eng: "recreation",   cht: "n. 娛樂" },
                    { id: "w2-24", eng: "cozy",          cht: "adj. 安逸舒適的" },
                    { id: "w2-25", eng: "exhilarating", cht: "adj. 令人興奮的（= exciting）" },
                    { id: "w2-26", eng: "photography",  cht: "n. 攝影" },
                    { id: "w2-27", eng: "indoors",       cht: "adv. 在室內" },
                    { id: "w2-28", eng: "craft",         cht: "n. 手藝；工藝（draft: n. 草稿）" },
                    { id: "w2-29", eng: "enjoyable",     cht: "adj. 令人愉快的" },
                    { id: "w2-30", eng: "adventure",     cht: "n. 冒險" }
                ]
            },
            {
                id: "unit-03",
                name: "03 Sports 運動",
                words: [
                    { id: "w3-1",  eng: "extremely",      cht: "adv. 極度、極其" },
                    { id: "w3-2",  eng: "challenge",      cht: "n./v. 挑戰、考驗" },
                    { id: "w3-3",  eng: "tournament",     cht: "n. 競標賽" },
                    { id: "w3-4",  eng: "chase",          cht: "n./v. 追逐、追求" },
                    { id: "w3-5",  eng: "spectator",      cht: "n. 觀眾" },
                    { id: "w3-6",  eng: "race",           cht: "n. 賽跑、種族" },
                    { id: "w3-7",  eng: "stadium",        cht: "n. 體育場" },
                    { id: "w3-8",  eng: "workout",        cht: "n. 健身、鍛煉" },
                    { id: "w3-9",  eng: "intensity",      cht: "n. 強烈、強度" },
                    { id: "w3-10", eng: "fitness",        cht: "n. 健康、合適" },
                    { id: "w3-11", eng: "collaborate",    cht: "v. 協力合作" },
                    { id: "w3-12", eng: "habit",          cht: "n. 習慣" },
                    { id: "w3-13", eng: "still",          cht: "adv. 仍然、還是；adj. 靜止不動的" },
                    { id: "w3-14", eng: "combative",      cht: "adj. 好戰的、鬥志高昂的" },
                    { id: "w3-15", eng: "league",         cht: "n. 聯盟" },
                    { id: "w3-16", eng: "grab",           cht: "v. 抓住、奪取" },
                    { id: "w3-17", eng: "defense",        cht: "n. 防禦、保衛" },
                    { id: "w3-18", eng: "aerobics",       cht: "n. 有氧運動" },
                    { id: "w3-19", eng: "marathon",       cht: "n. 馬拉松" },
                    { id: "w3-20", eng: "dynamic",        cht: "adj. 動態的" },
                    { id: "w3-21", eng: "lose",           cht: "v. 丟失、輸掉" },
                    { id: "w3-22", eng: "commentary",     cht: "n. 實況報導" },
                    { id: "w3-23", eng: "lift",           cht: "n./v. 舉起、抬起" },
                    { id: "w3-24", eng: "mountaineering", cht: "n. 登山" },
                    { id: "w3-25", eng: "prize",          cht: "n. 獎" },
                    { id: "w3-26", eng: "gesture",        cht: "n. 手勢、表態；v. 做手勢" },
                    { id: "w3-27", eng: "runner-up",      cht: "n. 亞軍" },
                    { id: "w3-28", eng: "coach",          cht: "n. 教練" },
                    { id: "w3-29", eng: "lean",           cht: "v./n. 傾斜" },
                    { id: "w3-30", eng: "stiff",          cht: "adj. 硬挺的、僵硬的" }
                ]
            }
        ]
    },
    {
        id: "folder-toeic",
        name: "新制多益 New TOEIC",
        icon: "import_contacts",
        cssClass: "folder-toeic",
        units: [
            {
                id: "toeic-day01",
                name: "Day 01",
                words: [
                    { id: "d1-1",  eng: "resume",        cht: "n. 履歷表" },
                    { id: "d1-2",  eng: "opening",       cht: "n. 空缺，職缺；開張，開始" },
                    { id: "d1-3",  eng: "applicant",     cht: "n. 申請者、應徵者" },
                    { id: "d1-4",  eng: "requirement",   cht: "n. 必要條件" },
                    { id: "d1-5",  eng: "meet",          cht: "v. 滿足，符合（要求、條件等）" },
                    { id: "d1-6",  eng: "qualified",     cht: "adj. 有資格的；勝任的" },
                    { id: "d1-7",  eng: "candidate",     cht: "n. 候選者，應徵者" },
                    { id: "d1-8",  eng: "confidence",    cht: "n. 信心，自信；信任" },
                    { id: "d1-9",  eng: "highly",        cht: "adv. 很；非常" },
                    { id: "d1-10", eng: "professional",  cht: "adj. 專業的，職業的；n. 專家" },
                    { id: "d1-11", eng: "interview",     cht: "n./v. 面試" },
                    { id: "d1-12", eng: "hire",          cht: "v. 雇用" },
                    { id: "d1-13", eng: "training",      cht: "n. 訓練" },
                    { id: "d1-14", eng: "reference",     cht: "n. 推薦信；參考" },
                    { id: "d1-15", eng: "position",      cht: "n. 職位；位置；v. 放置" },
                    { id: "d1-16", eng: "achievement",   cht: "n. 成就；達成" },
                    { id: "d1-17", eng: "impressed",     cht: "adj. 感到印象深刻的" },
                    { id: "d1-18", eng: "excellent",     cht: "adj. 優秀的；傑出的" },
                    { id: "d1-19", eng: "eligible",      cht: "adj. 有資格的；合適的" },
                    { id: "d1-20", eng: "identify",      cht: "v. 辨認；認出" },
                    { id: "d1-21", eng: "associate",     cht: "v. 使有關聯" },
                    { id: "d1-22", eng: "condition",     cht: "n. 條件" },
                    { id: "d1-23", eng: "employment",    cht: "n. 雇用" },
                    { id: "d1-24", eng: "lack",          cht: "v./n. 缺乏" },
                    { id: "d1-25", eng: "managerial",    cht: "adj. 管理的" },
                    { id: "d1-26", eng: "diligent",      cht: "adj. 勤奮的" },
                    { id: "d1-27", eng: "familiar",      cht: "adj. 熟悉的；親近的" },
                    { id: "d1-28", eng: "proficiency",   cht: "n. 熟練；精通" },
                    { id: "d1-29", eng: "prospective",   cht: "adj. 預期的；未來的" },
                    { id: "d1-30", eng: "appeal",        cht: "v./n. 呼籲，有吸引力" },
                    { id: "d1-31", eng: "specialize",    cht: "v. 專攻；專門從事" },
                    { id: "d1-32", eng: "apprehensive",  cht: "adj. 擔心的、憂慮的" },
                    { id: "d1-33", eng: "consultant",    cht: "n. 顧問" },
                    { id: "d1-34", eng: "entitle",       cht: "v. 給…權利" },
                    { id: "d1-35", eng: "degree",        cht: "n. 學位" },
                    { id: "d1-36", eng: "payroll",       cht: "n. 薪水帳冊，發薪名單" },
                    { id: "d1-37", eng: "recruit",       cht: "v. 招募（新進人員等）" },
                    { id: "d1-38", eng: "certification", cht: "n.（資格）證明" },
                    { id: "d1-39", eng: "occupation",    cht: "n. 職業" },
                    { id: "d1-40", eng: "wage",          cht: "n. 工資，薪水" }
                ]
            },
            {
                id: "toeic-day02",
                name: "Day 02",
                words: [
                    { id: "d2-1", eng: "attire", cht: "(n.) 服裝、衣著" },
                    { id: "d2-2", eng: "code", cht: "規範 慣例 密碼" },
                    { id: "d2-3", eng: "concern", cht: "n.擔心；憂慮 v.使擔心；關係到，影響到" },
                    { id: "d2-4", eng: "policy", cht: "政策，規定；保險單" },
                    { id: "d2-5", eng: "comply", cht: "遵守，遵從" },
                    { id: "d2-6", eng: "regulation", cht: "規定" },
                    { id: "d2-7", eng: "exception", cht: "n.例外" },
                    { id: "d2-8", eng: "adhere", cht: "遵守，堅持" },
                    { id: "d2-9", eng: "severely", cht: "嚴格地、嚴重地" },
                    { id: "d2-10", eng: "refrain", cht: "克制，抑制" },
                    { id: "d2-11", eng: "permission", cht: "允許 許可" },
                    { id: "d2-12", eng: "access", cht: "n.使用權，接近；通道 v.接近，到達" },
                    { id: "d2-13", eng: "thoroughly", cht: "徹底地 完全地 非常" },
                    { id: "d2-14", eng: "revise", cht: "修訂，變更（意見、計畫等）" },
                    { id: "d2-15", eng: "approach", cht: "n.接近方法，處理方法 v.接近，靠近" },
                    { id: "d2-16", eng: "approval", cht: "(n)批准;認可" },
                    { id: "d2-17", eng: "form", cht: "種類、類型、形式" },
                    { id: "d2-18", eng: "immediately", cht: "立即，馬上" },
                    { id: "d2-19", eng: "inspection", cht: "檢查，視察" },
                    { id: "d2-20", eng: "arrangement", cht: "安排，準備，佈置" },
                    { id: "d2-21", eng: "procedure", cht: "手續、程序" },
                    { id: "d2-22", eng: "negative", cht: "負面的 消極的" },
                    { id: "d2-23", eng: "mandate", cht: "v.使...成為必須(做)的，授權給... n.授權，命令" },
                    { id: "d2-24", eng: "effect", cht: "n.(法律等地)效力，效果，影響 v.造成(結果)" },
                    { id: "d2-25", eng: "drastically", cht: "激烈地，大幅地，徹底地" },
                    { id: "d2-26", eng: "according to", cht: "根據，依照" },
                    { id: "d2-27", eng: "enable", cht: "使...能夠(做某事)" },
                    { id: "d2-28", eng: "standard", cht: "標準" },
                    { id: "d2-29", eng: "constant", cht: "adj. 持續的；不斷的" },
                    { id: "d2-30", eng: "act", cht: "n.法案，法令；行為，行動 v.擔當；行動" },
                    { id: "d2-31", eng: "compensation", cht: "補償(金)，報酬" },
                    { id: "d2-32", eng: "ban", cht: "n.禁止，禁令 v.禁止" },
                    { id: "d2-33", eng: "obligation", cht: "義務、責任" },
                    { id: "d2-34", eng: "authorize", cht: "v.批准...，授權...做某事" },
                    { id: "d2-35", eng: "prohibit", cht: "v.禁止" },
                    { id: "d2-36", eng: "abolish", cht: "廢除(制度，法律等)" },
                    { id: "d2-37", eng: "enforce", cht: "執行、實施（法律）" },
                    { id: "d2-38", eng: "habit", cht: "n.習慣" },
                    { id: "d2-39", eng: "legislation", cht: "立法 法律 法規" },
                    { id: "d2-40", eng: "restrict", cht: "限制 限定" }
                
                ]
            },
            {
                id: "toeic-day03",
                name: "Day 03",
                words: [
                    { id: "d3-1", eng: "accustomed", cht: "習慣的" },
                    { id: "d3-2", eng: "Corporation", cht: "股份(有限)公司，法人" },
                    { id: "d3-3", eng: "demanding", cht: "要求很多的，吃力的" },
                    { id: "d3-4", eng: "colleague", cht: "(n.)(工作上的)同事" },
                    { id: "d3-5", eng: "division", cht: "部門" },
                    { id: "d3-6", eng: "request", cht: "n.要求 v.要求" },
                    { id: "d3-7", eng: "efficiently", cht: "有效率地" },
                    { id: "d3-8", eng: "manage", cht: "經營，管理；設法做到，勉強做到" },
                    { id: "d3-9", eng: "submit", cht: "提交" },
                    { id: "d3-10", eng: "directly", cht: "直接地" },
                    { id: "d3-11", eng: "remind", cht: "提醒；使想起" },
                    { id: "d3-12", eng: "instruct", cht: "v.教導，指示" },
                    { id: "d3-13", eng: "deadline", cht: "截止期限，最後期限" },
                    { id: "d3-14", eng: "sample", cht: "n.樣本，樣品，試用品 v.試吃，抽樣檢查" },
                    { id: "d3-15", eng: "notify", cht: "通知；告知" },
                    { id: "d3-16", eng: "perform", cht: "執行，實施(工作、任務、義務等)" },
                    { id: "d3-17", eng: "monitor", cht: "監視，監控，監督" },
                    { id: "d3-18", eng: "deserve", cht: "值得，應該得到" },
                    { id: "d3-19", eng: "assignment", cht: "工作，任務，作業" },
                    { id: "d3-20", eng: "entire", cht: "整個的" },
                    { id: "d3-21", eng: "release", cht: "v.發表，公開 n.發行，上市" },
                    { id: "d3-22", eng: "extension", cht: "(n.)延長，延期；(電話的)分機" },
                    { id: "d3-23", eng: "electronically", cht: "以電子方式(利用電腦、經由電腦傳輸)" },
                    { id: "d3-24", eng: "attendance", cht: "出席，出勤" },
                    { id: "d3-25", eng: "absolutely", cht: "adv.完全地,絕對地" },
                    { id: "d3-26", eng: "delegate", cht: "(v)委任(權限等) (n)代表" },
                    { id: "d3-27", eng: "attentively", cht: "專心地，聚精會神地" },
                    { id: "d3-28", eng: "supervision", cht: "監督" },
                    { id: "d3-29", eng: "workshop", cht: "專題討論會；研討會" },
                    { id: "d3-30", eng: "draw", cht: "拉 吸引" },
                    { id: "d3-31", eng: "revision", cht: "修訂" },
                    { id: "d3-32", eng: "reluctantly", cht: "不情願地；勉強地" },
                    { id: "d3-33", eng: "acquaint", cht: "使認識;使熟悉" },
                    { id: "d3-34", eng: "convey", cht: "傳達(事情)" },
                    { id: "d3-35", eng: "check", cht: "檢查，查明；確認" },
                    { id: "d3-36", eng: "headquarters", cht: "總部、總公司" },
                    { id: "d3-37", eng: "file", cht: "(v.)把...歸檔，正式提起或提出(文件、申請、 告訴等)" },
                    { id: "d3-38", eng: "oversee", cht: "監督" },
                    { id: "d3-39", eng: "involved", cht: "(adj.) 有關的，牽涉在內的" },
                    { id: "d3-40", eng: "concentrate", cht: "集中，專注 (n)代表 | 告訴等) |" }
                
                ]
            },
            {
                id: "toeic-day04",
                name: "Day 04",
                words: [
                    { id: "d4-1", eng: "lax", cht: "adj.(行動等)鬆懈的，散漫的" },
                    { id: "d4-2", eng: "procrastinate", cht: "拖延" },
                    { id: "d4-3", eng: "combine", cht: "聯合的，結合的" },
                    { id: "d4-4", eng: "accomplish", cht: "達成" },
                    { id: "d4-5", eng: "voluntarily", cht: "自願地 自動自發地" },
                    { id: "d4-6", eng: "undertake", cht: "從事 承擔(工作)" },
                    { id: "d4-7", eng: "assume", cht: "假定，以為；承擔(責任、角色)" },
                    { id: "d4-8", eng: "occasionally", cht: "adv.偶爾" },
                    { id: "d4-9", eng: "employee", cht: "員工；受雇者" },
                    { id: "d4-10", eng: "assist", cht: "協助，援助" },
                    { id: "d4-11", eng: "satisfied", cht: "感到滿意的，滿足的" },
                    { id: "d4-12", eng: "manner", cht: "方式 態度" },
                    { id: "d4-13", eng: "responsible", cht: "(adj.)應該負責的，負責任的" },
                    { id: "d4-14", eng: "conduct", cht: "進行(任務等)" },
                    { id: "d4-15", eng: "adjust", cht: "調整，適應" },
                    { id: "d4-16", eng: "personnel", cht: "(n.)(總稱)人員;員工;人事部門" },
                    { id: "d4-17", eng: "agree", cht: "v. 同意" },
                    { id: "d4-18", eng: "supervise", cht: "監督，指導" },
                    { id: "d4-19", eng: "coworker", cht: "(n.)同事，共同工作者" },
                    { id: "d4-20", eng: "direct", cht: "引導，指揮，指導" },
                    { id: "d4-21", eng: "confidential", cht: "adj.機密的,秘密的" },
                    { id: "d4-22", eng: "assign", cht: "分配 指派" },
                    { id: "d4-23", eng: "leading", cht: "領導的，領先的，主要的" },
                    { id: "d4-24", eng: "formal", cht: "正式的" },
                    { id: "d4-25", eng: "remove", cht: "去除，把...免職" },
                    { id: "d4-26", eng: "collect", cht: "收集，收取" },
                    { id: "d4-27", eng: "coordinate", cht: "協調" },
                    { id: "d4-28", eng: "hardly", cht: "幾乎不..." },
                    { id: "d4-29", eng: "abstract", cht: "抽象的" },
                    { id: "d4-30", eng: "directory", cht: "n.通訊錄；工商名錄；電話簿" },
                    { id: "d4-31", eng: "accountable", cht: "應負責任的" },
                    { id: "d4-32", eng: "skillfully", cht: "巧妙地 熟練地" },
                    { id: "d4-33", eng: "exclusive", cht: "獨有的，排外的" },
                    { id: "d4-34", eng: "intention", cht: "意圖，意向" },
                    { id: "d4-35", eng: "transform", cht: "改變，轉變" },
                    { id: "d4-36", eng: "respectful", cht: "adj.尊重的，尊敬的" },
                    { id: "d4-37", eng: "duplicate", cht: "副本" },
                    { id: "d4-38", eng: "contrary", cht: "(n.)相反(的情況)" },
                    { id: "d4-39", eng: "disturbing", cht: "令人不安的，令人焦慮的，煩擾人的" },
                    { id: "d4-40", eng: "engage", cht: "(v.)(使)參加，(使)從事" },
                    { id: "d4-41", eng: "foster", cht: "v.促進，培養" },
                    { id: "d4-42", eng: "Neutrality", cht: "(n.中立，中立性)" },
                    { id: "d4-43", eng: "widely", cht: "廣泛地" }
                
                ]
            },
            {
                id: "toeic-day05",
                name: "Day 05",
                words: [
                    { id: "d5-1", eng: "sophisticated", cht: "(adj.)(機器)精密的，複雜的；高雅的" },
                    { id: "d5-2", eng: "timely", cht: "及時的 適時的" },
                    { id: "d5-3", eng: "realistically", cht: "adv.實際上，在現實情況下" },
                    { id: "d5-4", eng: "promptly", cht: "迅速地；準時地" },
                    { id: "d5-5", eng: "accessible", cht: "可進入的，可利用的" },
                    { id: "d5-6", eng: "implement", cht: "實施 執行" },
                    { id: "d5-7", eng: "Feedback", cht: "回饋意見，反應" },
                    { id: "d5-8", eng: "outstanding", cht: "(adj.)傑出的；(負債等)未償付的" },
                    { id: "d5-9", eng: "inform", cht: "通知(某人)" },
                    { id: "d5-10", eng: "replacement", cht: "(n.)代替；代替物，代替者" },
                    { id: "d5-11", eng: "announcement", cht: "公告 宣布" },
                    { id: "d5-12", eng: "department", cht: "(n.)(組織、機構的)部門" },
                    { id: "d5-13", eng: "permanently", cht: "永久地" },
                    { id: "d5-14", eng: "fulfill", cht: "(v.)滿足(條件等)，履行(諾言、義務等)" },
                    { id: "d5-15", eng: "outline", cht: "n.概要，大綱 v.概述，略述" },
                    { id: "d5-16", eng: "explain", cht: "說明" },
                    { id: "d5-17", eng: "contain", cht: "包含;容納" },
                    { id: "d5-18", eng: "compile", cht: "(v.)匯編(資料等)；收集" },
                    { id: "d5-19", eng: "subsequent", cht: "(a.)隨後的,後來的" },
                    { id: "d5-20", eng: "overview", cht: "概要、概觀" },
                    { id: "d5-21", eng: "provider", cht: "供應者，提供者" },
                    { id: "d5-22", eng: "matter", cht: "問題；事情" },
                    { id: "d5-23", eng: "expertise", cht: "專業知識，專門技術" },
                    { id: "d5-24", eng: "demonstrate", cht: "證明；(用模型、實驗等)說明；示範操作" },
                    { id: "d5-25", eng: "remainder", cht: "剩餘(的東西)" },
                    { id: "d5-26", eng: "essential", cht: "必要的；不可或缺的 ,本質上的" },
                    { id: "d5-27", eng: "divide", cht: "劃分，分開" },
                    { id: "d5-28", eng: "major", cht: "主要的，重大的" },
                    { id: "d5-29", eng: "compliance", cht: "(n.)(對於命令、法規的)遵守" },
                    { id: "d5-30", eng: "clarify", cht: "闡明" },
                    { id: "d5-31", eng: "face", cht: "(v.)面對(問題等)；面向...，正對...." },
                    { id: "d5-32", eng: "follow", cht: "跟隨...;密切注意；(清楚地)聽懂，了解" },
                    { id: "d5-33", eng: "aspect", cht: "(n.) 方面 觀點" },
                    { id: "d5-34", eng: "apparently", cht: "看起來 似乎" },
                    { id: "d5-35", eng: "aware", cht: "adj. 知道的；意識到的" },
                    { id: "d5-36", eng: "extended", cht: "adj.(期間等)延長的，延伸的" },
                    { id: "d5-37", eng: "accidentally", cht: "(ad.)偶然地,意外地" },
                    { id: "d5-38", eng: "advisable", cht: "可取的;明智的" },
                    { id: "d5-39", eng: "concerned", cht: "擔心的；有關的" },
                    { id: "d5-40", eng: "speak", cht: "講話" }
                
                ]
            },
            {
                id: "toeic-day06",
                name: "Day 06",
                words: [
                    { id: "d6-1", eng: "collection", cht: "(n.)收藏品，收集的東西；(款項的)收取" },
                    { id: "d6-2", eng: "exhibition", cht: "展覽" },
                    { id: "d6-3", eng: "celebrity", cht: "名人" },
                    { id: "d6-4", eng: "live", cht: "(adj.)現場表演的，(廣播、電視)直播的" },
                    { id: "d6-5", eng: "improvise", cht: "即興演奏，即席演講，即興創作" },
                    { id: "d6-6", eng: "popular", cht: "受歡迎的" },
                    { id: "d6-7", eng: "donation", cht: "捐贈,捐獻" },
                    { id: "d6-8", eng: "alumni", cht: "校友們，畢業生們" },
                    { id: "d6-9", eng: "present", cht: "v.提出，出示 adj.現在的，出席的" },
                    { id: "d6-10", eng: "admission", cht: "入場" },
                    { id: "d6-11", eng: "banquet", cht: "宴會" },
                    { id: "d6-12", eng: "anniversary", cht: "週年紀念日" },
                    { id: "d6-13", eng: "required", cht: "必要的，必須的" },
                    { id: "d6-14", eng: "succeed", cht: "成功，接著發生，繼任" },
                    { id: "d6-15", eng: "rest", cht: "v.休息 n.休息，剩餘部分" },
                    { id: "d6-16", eng: "fund-raising", cht: "募款" },
                    { id: "d6-17", eng: "resume", cht: "(v.) 繼續 重新開始" },
                    { id: "d6-18", eng: "issue", cht: "n.(期刊的)一期；問題，爭議" },
                    { id: "d6-19", eng: "subscription", cht: "(定期刊物的)訂閱" },
                    { id: "d6-20", eng: "appear", cht: "出現，現身" },
                    { id: "d6-21", eng: "accompany", cht: "(v.) 陪同、伴隨" },
                    { id: "d6-22", eng: "edition", cht: "(出版品的)版本" },
                    { id: "d6-23", eng: "specifically", cht: "明確地，具體地；特別，特別地" },
                    { id: "d6-24", eng: "anonymous", cht: "(a)匿名的,不具名的" },
                    { id: "d6-25", eng: "commit", cht: "奉獻，使致力於某事" },
                    { id: "d6-26", eng: "informative", cht: "提供資訊的，有益的" },
                    { id: "d6-27", eng: "audience", cht: "觀眾；聽眾" },
                    { id: "d6-28", eng: "author", cht: "作者；作家" },
                    { id: "d6-29", eng: "note", cht: "注意到；提及" },
                    { id: "d6-30", eng: "antique", cht: "古董" },
                    { id: "d6-31", eng: "manuscript", cht: "n.手稿,原稿" },
                    { id: "d6-32", eng: "beneficial", cht: "有益的;有利的" },
                    { id: "d6-33", eng: "upcoming", cht: "即將來臨的" },
                    { id: "d6-34", eng: "lend", cht: "借出" },
                    { id: "d6-35", eng: "current", cht: "adj.現在的，目前的；現行的，通用的" },
                    { id: "d6-36", eng: "local", cht: "地方的, 當地的" },
                    { id: "d6-37", eng: "variety", cht: "多樣性，變化" },
                    { id: "d6-38", eng: "advocate", cht: "擁護者" },
                    { id: "d6-39", eng: "contributor", cht: "投稿人、捐贈者" },
                    { id: "d6-40", eng: "defy", cht: "反抗；使（說明、描寫等）不可能" },
                    { id: "d6-41", eng: "fascinating", cht: "迷人的，美妙的" },
                    { id: "d6-42", eng: "showing", cht: "(電影、舞台劇等的)上映，上演；展示" }
                
                ]
            },
            {
                id: "toeic-day07",
                name: "Day 07",
                words: [
                    { id: "d7-1", eng: "survey", cht: "調查，意見調查" },
                    { id: "d7-2", eng: "analysis", cht: "n.分析" },
                    { id: "d7-3", eng: "respondent", cht: "回答者 受訪者" },
                    { id: "d7-4", eng: "monopoly", cht: "(商品的)獨佔，壟斷" },
                    { id: "d7-5", eng: "competition", cht: "競爭" },
                    { id: "d7-6", eng: "consistently", cht: "adv.一貫地，始終如一地" },
                    { id: "d7-7", eng: "demand", cht: "n.需求 v.要求" },
                    { id: "d7-8", eng: "do one\'s utmost 盡全力", cht: "" },
                    { id: "d7-9", eng: "expand", cht: "擴張；擴大" },
                    { id: "d7-10", eng: "advanced", cht: "高階的，先進的" },
                    { id: "d7-11", eng: "postpone", cht: "使延期，延後" },
                    { id: "d7-12", eng: "additional", cht: "額外的；附加的" },
                    { id: "d7-13", eng: "appreciate", cht: "(v.)感謝；賞識；欣賞" },
                    { id: "d7-14", eng: "demonstration", cht: "(n.)證明；說明，示範操作" },
                    { id: "d7-15", eng: "buy", cht: "買,購買" },
                    { id: "d7-16", eng: "examine", cht: "檢查，審查" },
                    { id: "d7-17", eng: "effective", cht: "(adj.)有效的；(法律等)生效的，已實行的" },
                    { id: "d7-18", eng: "like", cht: "喜歡" },
                    { id: "d7-19", eng: "especially", cht: "尤其；特別" },
                    { id: "d7-20", eng: "closely", cht: "仔細地，嚴密地" },
                    { id: "d7-21", eng: "reserve", cht: "(v.)預約，保留；保存" },
                    { id: "d7-22", eng: "cooperate", cht: "協力，合作" },
                    { id: "d7-23", eng: "very", cht: "非常；很" },
                    { id: "d7-24", eng: "consecutive", cht: "連續的" },
                    { id: "d7-25", eng: "expectation", cht: "預期，期待" },
                    { id: "d7-26", eng: "publicize", cht: "公布、宣傳" },
                    { id: "d7-27", eng: "raise", cht: "提高，增加；提出(疑問)" },
                    { id: "d7-28", eng: "extremely", cht: "極度地 非常" },
                    { id: "d7-29", eng: "affect", cht: "(v.)影響，對...產生不好的作用" },
                    { id: "d7-30", eng: "target", cht: "n.目標 v.以...為目標" },
                    { id: "d7-31", eng: "campaign", cht: "n.活動/競選活動" },
                    { id: "d7-32", eng: "probable", cht: "有可能的" },
                    { id: "d7-33", eng: "focus", cht: "聚焦、集中" },
                    { id: "d7-34", eng: "seasonal", cht: "季節的；季節性的" },
                    { id: "d7-35", eng: "impact", cht: "影響；衝擊" },
                    { id: "d7-36", eng: "comparison", cht: "比較" },
                    { id: "d7-37", eng: "gap", cht: "差距" },
                    { id: "d7-38", eng: "mounting", cht: "增加中的，上升中的" },
                    { id: "d7-39", eng: "reflective", cht: "反映的 v.以...為目標 |" }
                
                ]
            },
            {
                id: "toeic-day08",
                name: "Day 08",
                words: [
                    { id: "d8-1", eng: "n.手段；方法", cht: "" },
                    { id: "d8-2", eng: "advertisement", cht: "廣告" },
                    { id: "d8-3", eng: "marginal", cht: "微小的 邊緣的" },
                    { id: "d8-4", eng: "customer", cht: "顧客" },
                    { id: "d8-5", eng: "influence", cht: "n.影響 v.影響" },
                    { id: "d8-6", eng: "instantly", cht: "(adv.) 立即，馬上" },
                    { id: "d8-7", eng: "creative", cht: "adj.創造性的，有創意的" },
                    { id: "d8-8", eng: "aggressively", cht: "積極地" },
                    { id: "d8-9", eng: "aim", cht: "v.以...為目標 n.目標，目的" },
                    { id: "d8-10", eng: "strategy", cht: "n.策略" },
                    { id: "d8-11", eng: "indicate", cht: "v.顯示，指出" },
                    { id: "d8-12", eng: "attract", cht: "吸引，引起(興趣等)" },
                    { id: "d8-13", eng: "experience", cht: "n.經驗，體驗 v.體驗，經歷" },
                    { id: "d8-14", eng: "analyze", cht: "v.分析" },
                    { id: "d8-15", eng: "introduce", cht: "(v.)介紹，發表(商品)" },
                    { id: "d8-16", eng: "advise", cht: "勸告；建議" },
                    { id: "d8-17", eng: "subscribe", cht: "訂閱" },
                    { id: "d8-18", eng: "absence", cht: "不在 缺少 缺席 缺勤" },
                    { id: "d8-19", eng: "means", cht: "n.手段；方法" },
                    { id: "d8-20", eng: "prefer", cht: "(v.)(比其他的東西)更喜歡，偏好" },
                    { id: "d8-21", eng: "advantage", cht: "優點；優勢" },
                    { id: "d8-22", eng: "forward", cht: "adv.向前 v.轉交，轉寄(物品、信件等)" },
                    { id: "d8-23", eng: "contemporary", cht: "同時代的，當代的，現代的" },
                    { id: "d8-24", eng: "discussion", cht: "討論，談論" },
                    { id: "d8-25", eng: "initial", cht: "adj.最初的,開始的" },
                    { id: "d8-26", eng: "steadily", cht: "平穩地 穩定地" },
                    { id: "d8-27", eng: "necessarily", cht: "必然" },
                    { id: "d8-28", eng: "resolve", cht: "(v.)解決(問題等)" },
                    { id: "d8-29", eng: "detect", cht: "察覺 發現" },
                    { id: "d8-30", eng: "intensify", cht: "(v.)強化，增強，使...變強烈" },
                    { id: "d8-31", eng: "favorably", cht: "善意地，順利地" },
                    { id: "d8-32", eng: "cover", cht: "包含 支付 覆蓋" },
                    { id: "d8-33", eng: "less", cht: "adj.較少的，較小的" },
                    { id: "d8-34", eng: "majority", cht: "大多數；大部分" },
                    { id: "d8-35", eng: "adopt", cht: "採納" },
                    { id: "d8-36", eng: "largely", cht: "大部分地，主要" },
                    { id: "d8-37", eng: "disregard", cht: "(v.) 不理會、忽視" },
                    { id: "d8-38", eng: "effort", cht: "n.努力" },
                    { id: "d8-39", eng: "incentive", cht: "獎勵 獎金" },
                    { id: "d8-40", eng: "need", cht: "n.需求，要求 v.需要(做...)" },
                    { id: "d8-41", eng: "mastermind", cht: "(n.)(計畫等的)策畫者 v.需要(做...) |" }
                
                ]
            },
            {
                id: "toeic-day09",
                name: "Day 09",
                words: [
                    { id: "d9-1", eng: "stagnant", cht: "停滯的、不景氣的" },
                    { id: "d9-2", eng: "dramatically", cht: "戲劇性地" },
                    { id: "d9-3", eng: "brisk", cht: "活潑的、興旺的" },
                    { id: "d9-4", eng: "unstable", cht: "不穩定的，易變的" },
                    { id: "d9-5", eng: "rapidly", cht: "迅速地；很快地" },
                    { id: "d9-6", eng: "soar", cht: "(v.)(物價等)高升，急漲" },
                    { id: "d9-7", eng: "assert", cht: "斷言,主張" },
                    { id: "d9-8", eng: "boost", cht: "(v.)推動，促進(景氣)，使上升" },
                    { id: "d9-9", eng: "analyst", cht: "分析師" },
                    { id: "d9-10", eng: "potential", cht: "adj.潛在的 n.潛力，可能性" },
                    { id: "d9-11", eng: "pleased", cht: "高興的；滿意的" },
                    { id: "d9-12", eng: "remain", cht: "(v.)保持(...的狀態)，仍然有待..." },
                    { id: "d9-13", eng: "limited", cht: "有限的" },
                    { id: "d9-14", eng: "costly", cht: "(adj.)昂貴的;代價高的" },
                    { id: "d9-15", eng: "particular", cht: "特定的" },
                    { id: "d9-16", eng: "drastic", cht: "激烈的，猛烈的，徹底的" },
                    { id: "d9-17", eng: "evenly", cht: "均勻地，平均地" },
                    { id: "d9-18", eng: "evidence", cht: "證據" },
                    { id: "d9-19", eng: "prospect", cht: "展望 預期" },
                    { id: "d9-20", eng: "Lead", cht: "(v.)領導，引導；導致(某種結果)" },
                    { id: "d9-21", eng: "fall", cht: "(v.)(價格、數值)下降" },
                    { id: "d9-22", eng: "period", cht: "期間，時期" },
                    { id: "d9-23", eng: "indicator", cht: "指標" },
                    { id: "d9-24", eng: "industry", cht: "n.工業,產業" },
                    { id: "d9-25", eng: "likely", cht: "(adj.)很可能(做...)的" },
                    { id: "d9-26", eng: "boom", cht: "繁榮，興盛" },
                    { id: "d9-27", eng: "director", cht: "主管；董事" },
                    { id: "d9-28", eng: "substitute", cht: "n.代替品 v.代替" },
                    { id: "d9-29", eng: "consequence", cht: "結果,後果" },
                    { id: "d9-30", eng: "fairly", cht: "相當 頗為" },
                    { id: "d9-31", eng: "economical", cht: "(adj.) 經濟的、節約的" },
                    { id: "d9-32", eng: "thrive", cht: "繁榮，成功" },
                    { id: "d9-33", eng: "implication", cht: "暗示 可能的結果" },
                    { id: "d9-34", eng: "wane", cht: "減少、衰退" },
                    { id: "d9-35", eng: "prosperity", cht: "繁榮" },
                    { id: "d9-36", eng: "despression", cht: "不景氣，蕭條" },
                    { id: "d9-37", eng: "dwindle", cht: "逐漸減少 逐漸變小" },
                    { id: "d9-38", eng: "impede", cht: "v.妨礙，阻礙" },
                    { id: "d9-39", eng: "promising", cht: "有前途的；有希望的" },
                    { id: "d9-40", eng: "adversity", cht: "(n)逆境、不幸 v.代替 |" }
                
                ]
            },
            {
                id: "toeic-day10",
                name: "Day 10",
                words: [
                    { id: "d10-1", eng: "purchase", cht: "v.購買 n.購買(的東西)" },
                    { id: "d10-2", eng: "installment", cht: "n.分期付款" },
                    { id: "d10-3", eng: "affordable", cht: "(adj.)(價格)負擔得起的" },
                    { id: "d10-4", eng: "exactly", cht: "確切地，正好" },
                    { id: "d10-5", eng: "auction", cht: "拍賣" },
                    { id: "d10-6", eng: "authentic", cht: "真正的，正統的" },
                    { id: "d10-7", eng: "charge", cht: "n.收費，費用，責任 v.索取(費用)，把...記在帳上" },
                    { id: "d10-8", eng: "notice", cht: "通知；公告" },
                    { id: "d10-9", eng: "experienced", cht: "有經驗的，熟練的" },
                    { id: "d10-10", eng: "instruction", cht: "說明、指示" },
                    { id: "d10-11", eng: "expert", cht: "n.專家 adj.專門的，專業的" },
                    { id: "d10-12", eng: "warranty", cht: "(n)(品質等的)保證，保證書" },
                    { id: "d10-13", eng: "refund", cht: "退款" },
                    { id: "d10-14", eng: "subscriber", cht: "訂閱者 用戶" },
                    { id: "d10-15", eng: "delivery", cht: "運送" },
                    { id: "d10-16", eng: "price", cht: "價格" },
                    { id: "d10-17", eng: "receipt", cht: "收據" },
                    { id: "d10-18", eng: "offer", cht: "v.提供 n.提供，優惠" },
                    { id: "d10-19", eng: "carefully", cht: "小心謹慎地 仔細地" },
                    { id: "d10-20", eng: "benefit", cht: "n.利益，好處 v.受益，受惠" },
                    { id: "d10-21", eng: "exclusively", cht: "獨佔地、排外地" },
                    { id: "d10-22", eng: "description", cht: "(n.)(產品等的)說明，描述" },
                    { id: "d10-23", eng: "relatively", cht: "相對地" },
                    { id: "d10-24", eng: "spare", cht: "v.節省，吝惜 adj.備用的，剩下的" },
                    { id: "d10-25", eng: "preparation", cht: "準備" },
                    { id: "d10-26", eng: "area", cht: "地區 區域" },
                    { id: "d10-27", eng: "clearance", cht: "清除 清倉 准許" },
                    { id: "d10-28", eng: "alter", cht: "(v)改變(性質、形象)，修改(衣服)" },
                    { id: "d10-29", eng: "apply", cht: "適用，應用；申請" },
                    { id: "d10-30", eng: "mutually", cht: "互相，彼此" },
                    { id: "d10-31", eng: "method", cht: "方法，方式" },
                    { id: "d10-32", eng: "acceptable", cht: "adj.可接受的，還可以的" },
                    { id: "d10-33", eng: "desire", cht: "n.渴望，慾望 v.渴望，想要" },
                    { id: "d10-34", eng: "redeemable", cht: "(adj.)可兌換(現金、商品)的，可償還的" },
                    { id: "d10-35", eng: "officially", cht: "正式地" },
                    { id: "d10-36", eng: "consumption", cht: "消費(量)，消耗" },
                    { id: "d10-37", eng: "qualify", cht: "使...有資格" },
                    { id: "d10-38", eng: "fabric", cht: "布料" },
                    { id: "d10-39", eng: "valid", cht: "有效的" },
                    { id: "d10-40", eng: "vendor", cht: "小販，攤販；販賣業者 adj.備用的，剩下的 | v.渴望，想要 |" }
                
                ]
            }
        ]
    },
    {
        id: "folder-handwritten",
        name: "📝 手寫筆記單字",
        icon: "edit_note",
        cssClass: "folder-handwritten",
        units: []
    }
];

// =====================================================
// STATE
// =====================================================
const DATA_VERSION = 4; // Bump this to force-refresh default unit content

let folders     = JSON.parse(localStorage.getItem('folders'))     || null;
let starredIds  = JSON.parse(localStorage.getItem('starredIds'))  || [];
let currentView = JSON.parse(localStorage.getItem('currentView')) || { type: 'unit', folderId: null, unitId: null };
let isTestMode  = false;

// Collect all default word IDs for quick lookup
const defaultWordIds = new Set();
defaultFolders.forEach(f => f.units.forEach(u => u.words.forEach(w => defaultWordIds.add(w.id))));

// First-run: seed default folders
if (!folders) {
    folders = JSON.parse(JSON.stringify(defaultFolders));
    localStorage.setItem('dataVersion', DATA_VERSION);
    save();
} else {
    const storedVersion = parseInt(localStorage.getItem('dataVersion') || '0', 10);
    let changed = false;

    defaultFolders.forEach(defFolder => {
        let folder = folders.find(f => f.id === defFolder.id);
        if (!folder) {
            folders.push(JSON.parse(JSON.stringify(defFolder)));
            changed = true;
        } else {
            // Sync icon/cssClass from default in case they changed
            folder.icon     = defFolder.icon;
            folder.cssClass = defFolder.cssClass;

            defFolder.units.forEach(defUnit => {
                let unit = folder.units.find(u => u.id === defUnit.id);
                if (!unit) {
                    folder.units.push(JSON.parse(JSON.stringify(defUnit)));
                    changed = true;
                } else {
                    if (storedVersion < DATA_VERSION) {
                        // Version bump: replace all default words with fresh content
                        // but keep user-added words (those NOT in the default set)
                        const userWords = unit.words.filter(w => !defaultWordIds.has(w.id));
                        unit.words = [...JSON.parse(JSON.stringify(defUnit.words)), ...userWords];
                        unit.name  = defUnit.name; // sync name too
                        changed = true;
                    } else {
                        // Normal run: only add truly missing default words
                        defUnit.words.forEach(defWord => {
                            if (!unit.words.find(w => w.id === defWord.id)) {
                                unit.words.push(JSON.parse(JSON.stringify(defWord)));
                                changed = true;
                            }
                        });
                    }
                }
            });
        }
    });

    localStorage.setItem('dataVersion', DATA_VERSION);
    if (changed) save();
}

// =====================================================
// PERSISTENCE
// =====================================================
let syncDebounceTimer = null;

function save() {
    localStorage.setItem('folders',     JSON.stringify(folders));
    localStorage.setItem('starredIds',  JSON.stringify(starredIds));
    localStorage.setItem('currentView', JSON.stringify(currentView));
    
    // Track update time locally
    const now = Date.now();
    localStorage.setItem('lastUpdatedTime', now.toString());
    
    // Automatically trigger debounced upload if logged into Supabase
    if (supabaseClient && supabaseClient.auth.getSession) {
        clearTimeout(syncDebounceTimer);
        syncDebounceTimer = setTimeout(() => {
            syncPush();
        }, 2000);
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// =====================================================
// DOM REFERENCES
// =====================================================
const folderListEl       = document.getElementById('folder-list');
const starredCountEl     = document.getElementById('starred-count');
const starredNavEl       = document.getElementById('starred-nav');
const wordSectionEl      = document.getElementById('word-section');
const emptyStateEl       = document.getElementById('empty-state');
const currentTitleEl     = document.getElementById('current-unit-title');
const wordListEl         = document.getElementById('word-list');
const wordCountEl        = document.getElementById('word-count');
const addWordAreaEl      = document.getElementById('add-word-area');
const addWordFormEl      = document.getElementById('add-word-form');
const wordEngEl          = document.getElementById('word-eng');
const wordChtEl          = document.getElementById('word-cht');
const toggleTestModeBtn  = document.getElementById('toggle-test-mode');
const headerActions      = document.querySelector('.header-actions');
const sidebarEl          = document.querySelector('.sidebar');
const sidebarToggleBtn   = document.getElementById('sidebar-toggle');
const sidebarOverlayEl   = document.getElementById('sidebar-overlay');
const globalSearchInput  = document.getElementById('global-search-input');
const clearSearchBtn     = document.getElementById('clear-search-btn');

// Keep track of the last viewed unit/starred tab before a search query was typed
let lastActiveView = currentView.type !== 'search' ? { ...currentView } : { type: 'starred', folderId: null, unitId: null };

// =====================================================
// RENDER SIDEBAR
// =====================================================
function renderSidebar() {
    // Starred badge
    starredCountEl.textContent = starredIds.length;
    starredNavEl.classList.toggle('active', currentView.type === 'starred');

    // Render folder groups
    folderListEl.innerHTML = '';
    folders.forEach(folder => {
        const isOpen = folder.units.some(u => u.id === currentView.unitId) || folder._open;
        const group = document.createElement('div');
        group.className = `unit-group ${folder.cssClass} ${isOpen ? 'open' : ''}`;

        const header = document.createElement('div');
        header.className = 'group-header';
        header.innerHTML = `
            <span class="material-symbols-outlined group-icon">${folder.icon}</span>
            <span class="group-title">${folder.name}</span>
            <span class="material-symbols-outlined folder-arrow">chevron_right</span>
        `;
        header.onclick = () => {
            folder._open = !group.classList.contains('open');
            group.classList.toggle('open');
        };

        const ul = document.createElement('ul');
        ul.className = 'unit-list';

        folder.units.forEach(unit => {
            const li = document.createElement('li');
            li.className = `unit-item ${unit.id === currentView.unitId ? 'active' : ''}`;
            li.innerHTML = `
                <span>${unit.name}</span>
                <button class="delete-unit" title="刪除回數" onclick="deleteUnit('${folder.id}','${unit.id}',event)">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            `;
            li.addEventListener('click', (e) => {
                if (e.target.closest('.delete-unit')) return;
                selectUnit(folder.id, unit.id);
            });
            ul.appendChild(li);
        });

        group.appendChild(header);
        group.appendChild(ul);
        folderListEl.appendChild(group);
    });
}

function closeMobileSidebar() {
    if (sidebarEl) sidebarEl.classList.remove('open');
    if (sidebarOverlayEl) sidebarOverlayEl.classList.remove('open');
}

function clearSearchInputSilently() {
    if (globalSearchInput) globalSearchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
}

function selectUnit(folderId, unitId) {
    clearSearchInputSilently();
    currentView = { type: 'unit', folderId, unitId };
    lastActiveView = { ...currentView };
    isTestMode = false;
    save();
    renderSidebar();
    renderMainContent();
    closeMobileSidebar();
}

function selectStarred() {
    clearSearchInputSilently();
    currentView = { type: 'starred', folderId: null, unitId: null };
    lastActiveView = { ...currentView };
    isTestMode = false;
    save();
    renderSidebar();
    renderMainContent();
    closeMobileSidebar();
}

// =====================================================
// RENDER MAIN
// =====================================================
function renderMainContent() {
    if (currentView.type === 'search') {
        renderSearchView();
    } else if (currentView.type === 'starred') {
        renderStarredView();
    } else if (currentView.type === 'unit' && currentView.unitId) {
        renderUnitView();
    } else {
        showEmpty();
    }
}

function setFormattedTitle(titleText) {
    if (!currentTitleEl) return;
    
    // Pattern to match "01 Occupations 職業" or "02 Recreation 娛樂"
    // English part: letters, spaces, digits, hyphens. Chinese part: Chinese characters.
    const match = titleText.match(/^([a-zA-Z0-9\s\-]+)\s+([\u4e00-\u9fff\s\/]+)$/);
    
    if (match) {
        const engPart = match[1].trim();
        const chtPart = match[2].trim();
        currentTitleEl.innerHTML = `
            <div class="title-cht-sub">${chtPart}</div>
            <div class="title-eng-main">${engPart}</div>
        `;
    } else {
        // Fallback for titles like "Day 01", "⭐ 加星號的單字", "請選擇或新增回數"
        currentTitleEl.innerHTML = `
            <div class="title-eng-main single-line">${titleText}</div>
        `;
    }
}

function showEmpty() {
    wordSectionEl.classList.add('hidden');
    emptyStateEl.classList.remove('hidden');
    headerActions.classList.add('hidden');
    setFormattedTitle('請選擇或新增回數');
}

function renderUnitView() {
    const folder = folders.find(f => f.id === currentView.folderId);
    const unit   = folder?.units.find(u => u.id === currentView.unitId);
    if (!unit) { showEmpty(); return; }

    setFormattedTitle(unit.name);
    wordSectionEl.classList.remove('hidden');
    emptyStateEl.classList.add('hidden');
    headerActions.classList.remove('hidden');
    addWordAreaEl.classList.remove('hidden');
    wordCountEl.textContent = unit.words.length;

    wordListEl.innerHTML = '';
    if (unit.words.length === 0) {
        wordListEl.innerHTML = '<p style="color:var(--text-secondary);grid-column:1/-1;text-align:center;padding:20px;">尚無單字，請在上方新增！</p>';
        return;
    }
    unit.words.forEach(word => wordListEl.appendChild(createWordCard(word)));
}

function renderSearchView() {
    const query = (currentView.query || '').trim().toLowerCase();
    setFormattedTitle(`🔍 搜尋：「${currentView.query || ''}」`);
    wordSectionEl.classList.remove('hidden');
    emptyStateEl.classList.add('hidden');
    
    // Search is read-only, hide "Add Word" box
    addWordAreaEl.classList.add('hidden');
    
    const results = [];
    if (query) {
        folders.forEach(folder => {
            folder.units.forEach(unit => {
                unit.words.forEach(word => {
                    const engMatch = word.eng && word.eng.toLowerCase().includes(query);
                    const chtMatch = word.cht && word.cht.toLowerCase().includes(query);
                    if (engMatch || chtMatch) {
                        results.push({ ...word, _unitName: unit.name });
                    }
                });
            });
        });
    }
    
    wordCountEl.textContent = results.length;
    wordListEl.innerHTML = '';
    
    if (results.length === 0) {
        if (!query) {
            wordListEl.innerHTML = '<p style="color:var(--text-secondary);grid-column:1/-1;text-align:center;padding:20px;">請輸入關鍵字進行搜尋</p>';
        } else {
            wordListEl.innerHTML = '<p style="color:var(--text-secondary);grid-column:1/-1;text-align:center;padding:20px;">找不到符合的單字</p>';
        }
        headerActions.classList.add('hidden'); // Hide flashcard button if no results
        return;
    }
    
    headerActions.classList.remove('hidden'); // Show flashcard button
    results.forEach(word => wordListEl.appendChild(createWordCard(word, true)));
}

function renderStarredView() {
    setFormattedTitle('⭐ 加星號的單字');
    wordSectionEl.classList.remove('hidden');
    emptyStateEl.classList.add('hidden');
    headerActions.classList.remove('hidden');
    addWordAreaEl.classList.add('hidden');

    // Collect all starred words with their unit name
    const starredWords = [];
    folders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                if (starredIds.includes(word.id)) {
                    starredWords.push({ ...word, _unitName: unit.name });
                }
            });
        });
    });

    wordCountEl.textContent = starredWords.length;
    wordListEl.innerHTML = '';

    if (starredWords.length === 0) {
        wordListEl.innerHTML = '<p style="color:var(--text-secondary);grid-column:1/-1;text-align:center;padding:20px;">還沒有加星號的單字！在單字卡上點擊 ⭐ 來加入。</p>';
        return;
    }

    starredWords.forEach(word => wordListEl.appendChild(createWordCard(word, true)));
}

// =====================================================
// TTS — 3-Accent Text to Speech (US → GB → AU)
// =====================================================
function getVoiceFor(lang) {
    // voices may not be loaded yet; trigger reload if empty
    let voices = window.speechSynthesis.getVoices();
    // Prefer local voices for quality, then any match
    return voices.find(v => v.lang === lang && v.localService)
        || voices.find(v => v.lang === lang)
        || voices.find(v => v.lang.startsWith(lang.split('-')[0]) && v.localService)
        || voices.find(v => v.lang.startsWith(lang.split('-')[0]))
        || null;
}

function speakSequential(text, accents, idx, btn) {
    if (idx >= accents.length) {
        if (btn) { btn.classList.remove('playing'); }
        return;
    }
    const { lang, label } = accents[idx];
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang  = lang;
    utter.rate  = 0.88;
    utter.pitch = 1;
    const voice = getVoiceFor(lang);
    if (voice) utter.voice = voice;
    utter.onend = () => {
        setTimeout(() => speakSequential(text, accents, idx + 1, btn), 600);
    };
    utter.onerror = () => {
        speakSequential(text, accents, idx + 1, btn);
    };
    window.speechSynthesis.speak(utter);
}

const ACCENTS = [
    { lang: 'en-US', label: '🇺🇸' },
    { lang: 'en-GB', label: '🇬🇧' },
];

function speakWord(text, event, btn) {
    if (event) event.stopPropagation();
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (btn) btn.classList.add('playing');
    // Voices might not be ready; wait a tick
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', () => {
            speakSequential(text, ACCENTS, 0, btn);
        }, { once: true });
    } else {
        speakSequential(text, ACCENTS, 0, btn);
    }
}

// =====================================================
// WORD CARD (list view)
// =====================================================
function createWordCard(word, showBadge = false) {
    const isStarred = starredIds.includes(word.id);
    const card = document.createElement('div');
    card.className = `word-card ${isStarred ? 'starred' : ''}`;
    card.dataset.wordId = word.id;

    const safeEng = word.eng.replace(/'/g, "\\'");
    card.innerHTML = `
        <div class="word-eng">${word.eng}</div>
        <div class="word-cht">${word.cht}</div>
        ${showBadge ? `<div class="word-unit-badge">${word._unitName || ''}</div>` : ''}
        <div class="card-actions">
            <button class="icon-btn speak-btn" title="播放發音（US→GB）" onclick="speakWord('${safeEng}', event, this)">
                <span class="material-symbols-outlined">volume_up</span>
            </button>
            <button class="icon-btn star-btn" title="${isStarred ? '取消星號' : '加星號'}" onclick="toggleStar('${word.id}', event)">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${isStarred ? 1 : 0}">star</span>
            </button>
            ${currentView.type !== 'starred' ? `
            <button class="icon-btn delete-btn" title="刪除單字" onclick="deleteWord('${word.id}', event)">
                <span class="material-symbols-outlined">close</span>
            </button>` : ''}
        </div>
    `;
    return card;
}

// =====================================================
// ACTIONS
// =====================================================
function toggleStar(wordId, event) {
    if (event) event.stopPropagation();
    const idx = starredIds.indexOf(wordId);
    if (idx === -1) {
        starredIds.push(wordId);
    } else {
        starredIds.splice(idx, 1);
    }
    save();
    renderSidebar();
    renderMainContent();
}

function deleteWord(wordId, event) {
    event.stopPropagation();
    const folder = folders.find(f => f.id === currentView.folderId);
    const unit = folder?.units.find(u => u.id === currentView.unitId);
    if (!unit) return;
    unit.words = unit.words.filter(w => w.id !== wordId);
    starredIds = starredIds.filter(id => id !== wordId);
    save();
    renderMainContent();
    wordCountEl.textContent = unit.words.length;
}

function deleteUnit(folderId, unitId, event) {
    event.stopPropagation();
    if (!confirm('確定要刪除這個回數嗎？裡面的單字將會一併刪除。')) return;
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;
    const unit = folder.units.find(u => u.id === unitId);
    if (unit) unit.words.forEach(w => { starredIds = starredIds.filter(id => id !== w.id); });
    folder.units = folder.units.filter(u => u.id !== unitId);
    if (currentView.unitId === unitId) {
        currentView = { type: null, folderId: null, unitId: null };
    }
    save();
    renderSidebar();
    renderMainContent();
}

function addUnit(folderId, name) {
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;
    const newUnit = { id: generateId(), name, words: [] };
    folder.units.push(newUnit);
    folder._open = true;
    save();
    selectUnit(folderId, newUnit.id);
}

function addWord(eng, cht) {
    const folder = folders.find(f => f.id === currentView.folderId);
    const unit   = folder?.units.find(u => u.id === currentView.unitId);
    if (!unit) return;
    const newWord = { id: generateId(), eng, cht };
    unit.words.push(newWord);
    save();
    renderMainContent();
}

// =====================================================
// FLASHCARD SWIPE MODE
// =====================================================
let fcWords   = [];
let fcIndex   = 0;
let fcFlipped = false;

const fcOverlay  = document.getElementById('flashcard-overlay');
const fcCard     = document.getElementById('fc-card');
const fcWrapper  = document.getElementById('fc-card-wrapper');
const fcEngEl    = document.getElementById('fc-eng');
const fcEngBack  = document.getElementById('fc-eng-back');
const fcChtEl    = document.getElementById('fc-cht');
const fcCounter  = document.getElementById('fc-counter');
const fcProgress = document.getElementById('fc-progress');
const fcIndLeft  = document.getElementById('fc-ind-left');
const fcIndRight = document.getElementById('fc-ind-right');
const fcSpeakBtn = document.getElementById('fc-speak-btn');
const fcStarBtn  = document.getElementById('fc-star-btn');
const fcSkipBtn  = document.getElementById('fc-skip-btn');
const fcExitBtn  = document.getElementById('fc-exit');

function openFlashcardMode() {
    // Collect words for current view
    if (currentView.type === 'search') {
        const query = (currentView.query || '').trim().toLowerCase();
        fcWords = [];
        if (query) {
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        const engMatch = w.eng && w.eng.toLowerCase().includes(query);
                        const chtMatch = w.cht && w.cht.toLowerCase().includes(query);
                        if (engMatch || chtMatch) fcWords.push(w);
                    });
                });
            });
        }
    } else if (currentView.type === 'starred') {
        fcWords = [];
        folders.forEach(folder => {
            folder.units.forEach(unit => {
                unit.words.forEach(w => {
                    if (starredIds.includes(w.id)) fcWords.push(w);
                });
            });
        });
    } else if (currentView.type === 'unit') {
        const folder = folders.find(f => f.id === currentView.folderId);
        const unit   = folder?.units.find(u => u.id === currentView.unitId);
        fcWords = unit ? [...unit.words] : [];
    }

    if (fcWords.length === 0) { alert('沒有單字可以進行卡片模式！'); return; }

    fcIndex   = 0;
    fcFlipped = false;
    fcOverlay.classList.remove('hidden');
    showFcCard();
}

function showFcCard() {
    if (fcIndex >= fcWords.length) {
        showFcDone();
        return;
    }
    const word = fcWords[fcIndex];
    fcEngEl.textContent   = word.eng;
    if (fcEngBack) fcEngBack.textContent = word.eng;
    fcChtEl.textContent   = word.cht;
    fcCounter.textContent = `${fcIndex + 1} / ${fcWords.length}`;
    fcProgress.style.width = `${((fcIndex + 1) / fcWords.length) * 100}%`;

    // Reset flip to front side
    fcFlipped = false;
    fcCard.classList.remove('flipped');

    // Update star button state
    const isStarred = starredIds.includes(word.id);
    fcStarBtn.classList.toggle('active', isStarred);

    // Reset indicators
    fcIndLeft.style.opacity  = '0';
    fcIndRight.style.opacity = '0';

    // Auto-play pronunciation when showing English front
    window.speechSynthesis.cancel();
    setTimeout(() => speakWord(word.eng, null, fcSpeakBtn), 300);
}

function showFcDone() {
    fcCard.parentElement.style.display = 'none';
    fcOverlay.querySelector('.fc-actions').style.display = 'none';
    fcOverlay.querySelector('.fc-hint-left').style.display  = 'none';
    fcOverlay.querySelector('.fc-hint-right') && (fcOverlay.querySelector('.fc-hint-right').style.display  = 'none');
    fcCounter.textContent = '完成！';
    fcProgress.style.width = '100%';

    // Show done screen
    const done = document.createElement('div');
    done.className = 'fc-done';
    done.innerHTML = `
        <div class="fc-done-icon">🎉</div>
        <h2>全部複習完畢！</h2>
        <p>共 ${fcWords.length} 個單字，加星號 ${starredIds.filter(id => fcWords.find(w => w.id === id)).length} 個</p>
        <button class="fc-done-btn" id="fc-restart">再練一次</button>
    `;
    fcOverlay.appendChild(done);
    document.getElementById('fc-restart').onclick = () => {
        done.remove();
        fcCard.parentElement.style.display = '';
        fcOverlay.querySelector('.fc-actions').style.display = '';
        openFlashcardMode();
    };
}

function closeFlashcardMode() {
    window.speechSynthesis.cancel();
    fcOverlay.classList.add('hidden');
    // Clean up done screen if exists
    const done = fcOverlay.querySelector('.fc-done');
    if (done) {
        done.remove();
        fcCard.parentElement.style.display = '';
        fcOverlay.querySelector('.fc-actions').style.display = '';
    }
    renderSidebar(); // refresh star count
}

function fcFlipCard() {
    fcFlipped = !fcFlipped;
    fcCard.classList.toggle('flipped', fcFlipped);
    
    // When flipping back to English front side, play pronunciation
    if (!fcFlipped) {
        const word = fcWords[fcIndex];
        if (word) {
            window.speechSynthesis.cancel();
            speakWord(word.eng, null, fcSpeakBtn);
        }
    }
}

function fcStarAndNext() {
    const word = fcWords[fcIndex];
    if (word && !starredIds.includes(word.id)) {
        starredIds.push(word.id);
        save();
    }
    fcStarBtn.classList.add('active');
    fcNext();
}

function fcNext() {
    fcIndex++;
    showFcCard();
}

// ---- Drag / Swipe ----
let dragStartX = 0;
let dragging   = false;
let currentDX  = 0;
const SWIPE_THRESHOLD = 80;

function onDragStart(x) {
    dragStartX = x;
    dragging   = true;
    fcCard.style.transition = 'none';
}

function onDragMove(x) {
    if (!dragging) return;
    currentDX = x - dragStartX;
    const rot = currentDX * 0.12;
    fcCard.style.transform = `translateX(${currentDX}px) rotate(${rot}deg)`;
    const absX = Math.abs(currentDX);
    if (currentDX < 0) {
        fcIndLeft.style.opacity  = Math.min(absX / SWIPE_THRESHOLD, 1).toString();
        fcIndRight.style.opacity = '0';
    } else {
        fcIndRight.style.opacity = Math.min(absX / SWIPE_THRESHOLD, 1).toString();
        fcIndLeft.style.opacity  = '0';
    }
}

function onDragEnd() {
    if (!dragging) return;
    dragging = false;
    fcCard.style.transition = '';
    fcCard.style.transform  = '';

    if (currentDX < -SWIPE_THRESHOLD) {
        // Swipe left → next
        fcNext();
    } else if (currentDX > SWIPE_THRESHOLD) {
        // Swipe right → star + next
        fcStarAndNext();
    }
    fcIndLeft.style.opacity  = '0';
    fcIndRight.style.opacity = '0';
    currentDX = 0;
}

// Mouse events
fcWrapper.addEventListener('mousedown', e => {
    if (e.target.closest('.fc-speak-btn')) return;
    onDragStart(e.clientX);
});
window.addEventListener('mousemove', e => onDragMove(e.clientX));
window.addEventListener('mouseup',   () => {
    if (dragging) onDragEnd();
});

// Touch events
fcWrapper.addEventListener('touchstart', e => {
    if (e.target.closest('.fc-speak-btn')) return;
    onDragStart(e.touches[0].clientX);
}, { passive: true });
fcWrapper.addEventListener('touchmove', e => {
    onDragMove(e.touches[0].clientX);
}, { passive: true });
fcWrapper.addEventListener('touchend', () => onDragEnd());

// Click to flip card (only if not a drag)
fcWrapper.addEventListener('click', e => {
    const dx = Math.abs(currentDX);
    currentDX = 0; // reset after read
    if (dx > 5) return; // was a drag, not a click
    fcFlipCard();
});

// Buttons
fcSpeakBtn.addEventListener('click', e => {
    e.stopPropagation();
    const word = fcWords[fcIndex];
    if (word) speakWord(word.eng, null, fcSpeakBtn);
});
fcStarBtn.addEventListener('click', () => fcStarAndNext());
fcSkipBtn.addEventListener('click', () => fcNext());
fcExitBtn.addEventListener('click', () => closeFlashcardMode());

// Keyboard
document.addEventListener('keydown', e => {
    if (fcOverlay.classList.contains('hidden')) return;
    if (e.key === 'Escape')     closeFlashcardMode();
    if (e.key === ' ')          { e.preventDefault(); fcFlipCard(); }
    if (e.key === 'ArrowRight') fcStarAndNext();
    if (e.key === 'ArrowLeft')  fcNext();
});

// =====================================================
// EVENT LISTENERS
// =====================================================
if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', () => {
        sidebarEl.classList.toggle('open');
        sidebarOverlayEl.classList.toggle('open');
    });
}

if (sidebarOverlayEl) {
    sidebarOverlayEl.addEventListener('click', closeMobileSidebar);
}

// Global Search Event Listeners
if (globalSearchInput) {
    globalSearchInput.addEventListener('input', e => {
        const query = e.target.value;
        if (query.trim()) {
            if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
            currentView = { type: 'search', query: query };
        } else {
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
            currentView = { ...lastActiveView };
        }
        save();
        renderMainContent();
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        clearSearchInputSilently();
        currentView = { ...lastActiveView };
        save();
        renderMainContent();
    });
}

addWordFormEl.addEventListener('submit', e => {
    e.preventDefault();
    const eng = wordEngEl.value.trim();
    const cht = wordChtEl.value.trim();
    if (eng && cht) {
        addWord(eng, cht);
        wordEngEl.value = '';
        wordChtEl.value = '';
        wordEngEl.focus();
    }
});

toggleTestModeBtn.addEventListener('click', openFlashcardMode);

// =====================================================
// OCR NOTE IMPORT METHODS
// =====================================================
const ocrOverlayEl       = document.getElementById('ocr-import-overlay');
const ocrApiUrlEl        = document.getElementById('ocr-api-url');
const geminiApiKeyEl     = document.getElementById('gemini-api-key');
const ocrFolderSelectEl  = document.getElementById('ocr-folder-select');
const ocrUnitNameEl      = document.getElementById('ocr-unit-name-input');
const ocrDropZoneEl      = document.getElementById('ocr-drop-zone');
const ocrFileInputEl     = document.getElementById('ocr-file-input');
const ocrLoadingEl       = document.getElementById('ocr-loading');
const ocrLoadingTextEl   = document.getElementById('ocr-loading-text');
const ocrPreviewEl       = document.getElementById('ocr-preview-section');
const ocrResultsBodyEl   = document.getElementById('ocr-results-body');
const ocrResultCountEl   = document.getElementById('ocr-result-count');
const selectedFileInfoEl = document.getElementById('selected-file-info');

let ocrFileToUpload = null;

function openOcrModal() {
    closeMobileSidebar();
    
    // Load saved settings
    const savedUrl = localStorage.getItem('ocrApiUrl') || '';
    if (ocrApiUrlEl) ocrApiUrlEl.value = savedUrl;
    
    const savedKey = localStorage.getItem('geminiApiKey') || '';
    if (geminiApiKeyEl) geminiApiKeyEl.value = savedKey;
    
    // Populate folders
    if (ocrFolderSelectEl) {
        ocrFolderSelectEl.innerHTML = '<option value="">選擇要匯入的資料夾</option>';
        folders.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f.id;
            opt.textContent = f.name;
            ocrFolderSelectEl.appendChild(opt);
        });
    }
    
    // Reset file uploads
    ocrFileToUpload = null;
    if (selectedFileInfoEl) {
        selectedFileInfoEl.classList.add('hidden');
        selectedFileInfoEl.textContent = '';
    }
    if (ocrUnitNameEl) ocrUnitNameEl.value = '';
    if (ocrPreviewEl) ocrPreviewEl.classList.add('hidden');
    if (ocrLoadingEl) ocrLoadingEl.classList.add('hidden');
    if (ocrResultsBodyEl) ocrResultsBodyEl.innerHTML = '';
    
    // Show modal
    if (ocrOverlayEl) ocrOverlayEl.classList.remove('hidden');
}

function closeOcrModal() {
    if (ocrOverlayEl) ocrOverlayEl.classList.add('hidden');
}

function saveOcrApiUrl() {
    if (ocrApiUrlEl) {
        const url = ocrApiUrlEl.value.trim();
        localStorage.setItem('ocrApiUrl', url);
        alert('網址儲存成功！');
    }
}

function saveGeminiApiKey() {
    if (geminiApiKeyEl) {
        const key = geminiApiKeyEl.value.trim();
        localStorage.setItem('geminiApiKey', key);
        alert('Gemini 金鑰儲存成功！');
    }
}

// ---- File Drag & Drop events ----
if (ocrDropZoneEl) {
    ocrDropZoneEl.addEventListener('dragover', e => {
        e.preventDefault();
        ocrDropZoneEl.classList.add('dragover');
    });
    
    ocrDropZoneEl.addEventListener('dragleave', () => {
        ocrDropZoneEl.classList.remove('dragover');
    });
    
    ocrDropZoneEl.addEventListener('drop', e => {
        e.preventDefault();
        ocrDropZoneEl.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleOcrFileSelection(e.dataTransfer.files[0]);
        }
    });
    
    ocrDropZoneEl.addEventListener('click', e => {
        if (e.target.tagName !== 'LABEL') {
            if (ocrFileInputEl) ocrFileInputEl.click();
        }
    });
}

if (ocrFileInputEl) {
    ocrFileInputEl.addEventListener('change', e => {
        if (e.target.files.length > 0) {
            handleOcrFileSelection(e.target.files[0]);
        }
    });
}

function handleOcrFileSelection(file) {
    ocrFileToUpload = file;
    if (selectedFileInfoEl) {
        selectedFileInfoEl.classList.remove('hidden');
        selectedFileInfoEl.textContent = `已選擇檔案：${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    }
    
    // Automatically fill a suggested unit name if empty
    if (ocrUnitNameEl && !ocrUnitNameEl.value.trim()) {
        const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        ocrUnitNameEl.value = `${baseName} OCR`;
    }
    
    // Auto trigger upload once file is selected
    triggerOcrProcessing();
}

async function triggerOcrProcessing() {
    if (!ocrFileToUpload) {
        alert('請先選擇 PDF 或圖片檔案！');
        return;
    }
    
    const apiUrl = (localStorage.getItem('ocrApiUrl') || '').trim();
    if (!apiUrl) {
        alert('請先在步驟 1 填寫並儲存你的 ngrok API 後端網址！');
        return;
    }
    
    // Clean up preview & show loading
    if (ocrPreviewEl) ocrPreviewEl.classList.add('hidden');
    if (ocrLoadingEl) ocrLoadingEl.classList.remove('hidden');
    if (ocrResultsBodyEl) ocrResultsBodyEl.innerHTML = '';
    
    const formData = new FormData();
    formData.append('file', ocrFileToUpload);
    
    try {
        const response = await fetch(`${apiUrl.replace(/\/$/, '')}/ocr`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`伺服器錯誤 (HTTP ${response.status})`);
        }
        
        const data = await response.json();
        
        if (data.success && data.words) {
            renderOcrPreview(data.words);
        } else {
            alert('辨識失敗，請檢查本地後端服務狀態！');
        }
    } catch (err) {
        console.error(err);
        alert(`無法連線到 OCR 伺服器，請確認：\n1. 本地 python server.py 是否在執行\n2. ngrok 網址是否正確且沒有過期\n\n錯誤詳情: ${err.message}`);
    } finally {
        if (ocrLoadingEl) ocrLoadingEl.classList.add('hidden');
    }
}

function renderOcrPreview(words) {
    if (!ocrResultsBodyEl) return;
    ocrResultsBodyEl.innerHTML = '';
    
    words.forEach(w => {
        addOcrRow(w.eng, w.cht);
    });
    
    updateOcrCount();
    if (ocrPreviewEl) ocrPreviewEl.classList.remove('hidden');
}

function addOcrRow(eng = '', cht = '') {
    if (!ocrResultsBodyEl) return;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="text" class="ocr-eng-input" value="${eng.replace(/"/g, '&quot;')}" placeholder="英文單字"></td>
        <td><input type="text" class="ocr-cht-input" value="${cht.replace(/"/g, '&quot;')}" placeholder="中文解釋"></td>
        <td>
            <button class="icon-btn delete-btn" title="刪除此列" onclick="this.closest('tr').remove(); updateOcrCount();">
                <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
            </button>
        </td>
    `;
    ocrResultsBodyEl.appendChild(tr);
    updateOcrCount();
}

function updateOcrCount() {
    if (ocrResultsBodyEl && ocrResultCountEl) {
        ocrResultCountEl.textContent = ocrResultsBodyEl.querySelectorAll('tr').length;
    }
}

function importOcrToFolder() {
    const folderId = ocrFolderSelectEl.value;
    const unitName = ocrUnitNameEl.value.trim();
    
    if (!folderId) {
        alert('請選擇要匯入的資料夾！');
        return;
    }
    if (!unitName) {
        alert('請填寫新回數名稱！');
        return;
    }
    
    const rows = ocrResultsBodyEl.querySelectorAll('tr');
    const words = [];
    
    rows.forEach(row => {
        const eng = row.querySelector('.ocr-eng-input').value.trim();
        const cht = row.querySelector('.ocr-cht-input').value.trim();
        if (eng) {
            words.push({
                id: generateId(),
                eng: eng,
                cht: cht
            });
        }
    });
    
    if (words.length === 0) {
        alert('表格中沒有任何單字，無法匯入！');
        return;
    }
    
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;
    
    // Add new unit to folder
    const newUnit = {
        id: generateId(),
        name: unitName,
        words: words
    };
    
    folder.units.push(newUnit);
    folder._open = true;
    
    save();
    closeOcrModal();
    selectUnit(folderId, newUnit.id);
    
    alert(`成功匯入新回數「${unitName}」，共 ${words.length} 個單字！`);
}

async function correctOcrWithGemini() {
    const apiKey = (localStorage.getItem('geminiApiKey') || '').trim();
    if (!apiKey) {
        alert('請先在步驟 1 填寫並儲存你的 Gemini API 金鑰！');
        return;
    }
    
    const rows = ocrResultsBodyEl.querySelectorAll('tr');
    const wordsToCorrect = [];
    
    rows.forEach(row => {
        const eng = row.querySelector('.ocr-eng-input').value.trim();
        const cht = row.querySelector('.ocr-cht-input').value.trim();
        if (eng || cht) {
            wordsToCorrect.push({ eng, cht });
        }
    });
    
    if (wordsToCorrect.length === 0) {
        alert('目前預覽表格中沒有任何單字可以校正！');
        return;
    }
    
    // Disable buttons and show loading spinner inside modal
    if (ocrPreviewEl) ocrPreviewEl.classList.add('hidden');
    if (ocrLoadingEl) ocrLoadingEl.classList.remove('hidden');
    if (ocrLoadingTextEl) ocrLoadingTextEl.textContent = '✨ Gemini AI 正在幫您進行拼字糾錯與翻譯優化，請稍候...';
    
    // Construct Prompt
    const promptText = `你是一位專業的英文老師，請幫我修正以下由手寫筆記 OCR 辨識出來的英文單字（可能包含拼字錯誤，如: o辨識為c，或是拼字漏字母等），並將中文翻譯補齊。
請務必遵守以下規定：
1. 修正英文單字拼法至正確的英文。
2. 補齊或優化中文翻譯。
3. 中文翻譯必須加上明確的詞性標籤（例如: n. 名詞, v. 動詞, adj. 形容詞, adv. 副詞, prep. 介係詞, pron. 代名詞 等，只要標註簡寫即可如 n. v. adj.）。
4. 請只輸出符合 JSON 格式的純文字，不要包含任何 Markdown 標記（如不要有 \`\`\`json 或是任何 code blocks，也不要有額外的解釋文字），只要給我一個包含單字物件的陣列：
[{"eng": "修正後的英文單字", "cht": "修正且加上詞性的中文意思"}, ...]

待修正的單字資料：
${JSON.stringify(wordsToCorrect, null, 2)}`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: promptText
                    }]
                }]
            })
        });
        
        if (!response.ok) {
            throw new Error(`Gemini API 請求失敗 (HTTP ${response.status})`);
        }
        
        const data = await response.json();
        const responseText = data.candidates[0].content.parts[0].text.trim();
        
        // Clean up markdown block syntax if present
        let cleanJsonStr = responseText;
        if (cleanJsonStr.includes('```')) {
            cleanJsonStr = cleanJsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
        }
        
        try {
            const correctedWords = JSON.parse(cleanJsonStr);
            if (Array.isArray(correctedWords)) {
                renderOcrPreview(correctedWords);
                alert('✨ AI 糾錯與翻譯校正完成！');
            } else {
                throw new Error('AI 回傳結果不是有效的陣列格式');
            }
        } catch (jsonErr) {
            console.error("JSON Parse Error on response:", responseText, jsonErr);
            alert('AI 回傳資料解析失敗，請再點擊一次重試。\n\n錯誤原因: 輸出非標準 JSON');
            if (ocrPreviewEl) ocrPreviewEl.classList.remove('hidden');
        }
    } catch (err) {
        console.error(err);
        alert(`Gemini AI 連線失敗，請檢查網路連線或金鑰是否正確！\n\n錯誤詳情: ${err.message}`);
        if (ocrPreviewEl) ocrPreviewEl.classList.remove('hidden');
    } finally {
        if (ocrLoadingEl) ocrLoadingEl.classList.add('hidden');
        if (ocrLoadingTextEl) ocrLoadingTextEl.textContent = '正在上傳檔案並辨識中，請稍候... (使用 PaddleOCR 模型)';
    }
}


// =====================================================
// SUPABASE CLOUD SYNC & AUTHENTICATION
// =====================================================
let supabaseClient      = null;
let syncIsLocked        = false;

const syncModalEl       = document.getElementById('sync-modal-overlay');
const sbUrlEl           = document.getElementById('sb-url');
const sbKeyEl           = document.getElementById('sb-key');
const sbEmailEl         = document.getElementById('sb-email');
const sbPasswordEl      = document.getElementById('sb-password');
const sbAuthSectionEl   = document.getElementById('sb-auth-section');
const sbProfileSectionEl= document.getElementById('sb-profile-section');
const sbUserEmailEl     = document.getElementById('sb-user-email');
const sbSyncStatusEl    = document.getElementById('sb-sync-status');
const syncIndicatorIcon = document.getElementById('sync-indicator-icon');
const syncStatusTextEl  = document.getElementById('sync-status-text');

function openSyncModal() {
    closeMobileSidebar();
    
    // Load keys
    const savedUrl = localStorage.getItem('supabaseUrl') || '';
    const savedKey = localStorage.getItem('supabaseKey') || '';
    if (sbUrlEl) sbUrlEl.value = savedUrl;
    if (sbKeyEl) sbKeyEl.value = savedKey;
    
    // Refresh auth forms
    refreshAuthUI();
    
    if (syncModalEl) syncModalEl.classList.remove('hidden');
}

function closeSyncModal() {
    if (syncModalEl) syncModalEl.classList.add('hidden');
}

function initSupabase() {
    const url = (localStorage.getItem('supabaseUrl') || '').trim();
    const key = (localStorage.getItem('supabaseKey') || '').trim();
    
    if (!url || !key) {
        updateSyncIndicator('cloud_queue', '未設定雲端', 'var(--text-secondary)');
        return;
    }
    
    try {
        if (typeof supabase !== 'undefined') {
            supabaseClient = supabase.createClient(url, key);
            
            // Listen to auth changes
            supabaseClient.auth.onAuthStateChange((event, session) => {
                refreshAuthUI();
                if (session && session.user) {
                    // Try automatic sync on login/app start
                    syncBiDirectional();
                }
            });
        } else {
            console.warn('Supabase SDK not loaded yet.');
        }
    } catch (err) {
        console.error('Failed to init Supabase:', err);
    }
}

function saveSupabaseSettings() {
    const url = sbUrlEl.value.trim();
    const key = sbKeyEl.value.trim();
    
    if (!url || !key) {
        alert('請填寫完整的連接網址與 Anon 金鑰！');
        return;
    }
    
    localStorage.setItem('supabaseUrl', url);
    localStorage.setItem('supabaseKey', key);
    
    initSupabase();
    alert('Supabase 資料庫設定已儲存！');
}

function refreshAuthUI() {
    if (!supabaseClient) {
        if (sbAuthSectionEl) sbAuthSectionEl.classList.remove('hidden');
        if (sbProfileSectionEl) sbProfileSectionEl.classList.add('hidden');
        updateSyncIndicator('cloud_queue', '未設定雲端', 'var(--text-secondary)');
        return;
    }
    
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
        if (session && session.user) {
            if (sbAuthSectionEl) sbAuthSectionEl.classList.add('hidden');
            if (sbProfileSectionEl) sbProfileSectionEl.classList.remove('hidden');
            if (sbUserEmailEl) sbUserEmailEl.textContent = session.user.email;
            
            // Update sidebar indicator
            const shortEmail = session.user.email.split('@')[0];
            updateSyncIndicator('cloud_done', `已連線: ${shortEmail}`, '#10b981');
        } else {
            if (sbAuthSectionEl) sbAuthSectionEl.classList.remove('hidden');
            if (sbProfileSectionEl) sbProfileSectionEl.classList.add('hidden');
            updateSyncIndicator('cloud_off', '未登入帳號', '#ef4444');
        }
    });
}

function updateSyncIndicator(iconName, text, color) {
    if (syncIndicatorIcon) {
        syncIndicatorIcon.textContent = iconName;
        syncIndicatorIcon.style.color = color;
        if (iconName === 'sync') {
            syncIndicatorIcon.classList.add('sync-spin');
        } else {
            syncIndicatorIcon.classList.remove('sync-spin');
        }
    }
    if (syncStatusTextEl) {
        syncStatusTextEl.textContent = text;
    }
}

// ---- Authentication Methods ----
async function loginSupabase() {
    const email = sbEmailEl.value.trim();
    const password = sbPasswordEl.value;
    
    if (!email || !password) {
        alert('請輸入帳號與密碼！');
        return;
    }
    
    try {
        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        alert('登入成功！正在進行第一次資料同步...');
    } catch (err) {
        alert(`登入失敗: ${err.message}`);
    }
}

async function registerSupabase() {
    const email = sbEmailEl.value.trim();
    const password = sbPasswordEl.value;
    
    if (!email || !password) {
        alert('請輸入欲註冊的帳號與密碼！');
        return;
    }
    if (password.length < 6) {
        alert('密碼長度必須大於 6 位數！');
        return;
    }
    
    try {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) throw error;
        
        // Supabase returns user object but if email verification is enabled, session is null initially
        if (data.session) {
            alert('註冊成功並已自動登入！');
        } else {
            alert('註冊帳號發送成功！\n請至您的電子郵件信箱收取確認信，驗證過後即可在此登入！');
        }
    } catch (err) {
        alert(`註冊失敗: ${err.message}`);
    }
}

async function logoutSupabase() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        alert('已登出帳號！');
        refreshAuthUI();
    } catch (err) {
        alert(`登出失敗: ${err.message}`);
    }
}

// ---- Push / Pull Synchronization ----
async function syncPush(isManual = false) {
    if (!supabaseClient || syncIsLocked) return;
    
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session || !session.user) {
        if (isManual) alert('請先登入帳號以進行同步！');
        return;
    }
    
    syncIsLocked = true;
    updateSyncIndicator('sync', '雲端同步中...', '#67e8f9');
    if (sbSyncStatusEl) sbSyncStatusEl.textContent = '正在上傳備份中...';
    
    const now = parseInt(localStorage.getItem('lastUpdatedTime') || Date.now().toString(), 10);
    
    try {
        // Upsert state directly into user_sync_data table
        const { error } = await supabaseClient
            .from('user_sync_data')
            .upsert({
                id: session.user.id,
                folders: folders,
                starred_ids: starredIds,
                updated_at: new Date(now).toISOString()
            });
            
        if (error) throw error;
        
        updateSyncIndicator('cloud_done', `已連線: ${session.user.email.split('@')[0]}`, '#10b981');
        if (sbSyncStatusEl) sbSyncStatusEl.textContent = `已同步備份 (${new Date().toLocaleTimeString()})`;
        if (isManual) alert('雲端備份上傳成功！');
    } catch (err) {
        console.error('Push sync failed:', err);
        updateSyncIndicator('cloud_off', '同步出錯', '#ef4444');
        if (sbSyncStatusEl) sbSyncStatusEl.textContent = `同步失敗: ${err.message}`;
        if (isManual) alert(`同步失敗: ${err.message}`);
    } finally {
        syncIsLocked = false;
    }
}

async function syncPull(isManual = false) {
    if (!supabaseClient || syncIsLocked) return;
    
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session || !session.user) {
        if (isManual) alert('請先登入帳號！');
        return;
    }
    
    syncIsLocked = true;
    updateSyncIndicator('sync', '載入雲端中...', '#67e8f9');
    if (sbSyncStatusEl) sbSyncStatusEl.textContent = '正在下載雲端備份...';
    
    try {
        const { data, error } = await supabaseClient
            .from('user_sync_data')
            .select('folders, starred_ids, updated_at')
            .eq('id', session.user.id)
            .single();
            
        if (error && error.code !== 'PGRST116') {
            // PGRST116 means row not found (fresh account)
            throw error;
        }
        
        if (data) {
            folders = data.folders || [];
            starredIds = data.starred_ids || [];
            const cloudTime = new Date(data.updated_at).getTime();
            localStorage.setItem('folders', JSON.stringify(folders));
            localStorage.setItem('starredIds', JSON.stringify(starredIds));
            localStorage.setItem('lastUpdatedTime', cloudTime.toString());
            
            // Re-render
            renderSidebar();
            renderMainContent();
            
            updateSyncIndicator('cloud_done', `已連線: ${session.user.email.split('@')[0]}`, '#10b981');
            if (sbSyncStatusEl) sbSyncStatusEl.textContent = `已載入雲端備份 (${new Date().toLocaleTimeString()})`;
            if (isManual) alert('雲端下載還原成功！');
        } else {
            if (isManual) alert('雲端目前無備份資料！');
            if (sbSyncStatusEl) sbSyncStatusEl.textContent = '雲端尚無備份資料';
            updateSyncIndicator('cloud_done', `已連線: ${session.user.email.split('@')[0]}`, '#10b981');
        }
    } catch (err) {
        console.error('Pull sync failed:', err);
        updateSyncIndicator('cloud_off', '同步出錯', '#ef4444');
        if (sbSyncStatusEl) sbSyncStatusEl.textContent = `下載失敗: ${err.message}`;
        if (isManual) alert(`下載失敗: ${err.message}`);
    } finally {
        syncIsLocked = false;
    }
}

async function syncBiDirectional() {
    if (!supabaseClient || syncIsLocked) return;
    
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session || !session.user) return;
    
    syncIsLocked = true;
    updateSyncIndicator('sync', '雲端比對中...', '#67e8f9');
    
    try {
        const { data, error } = await supabaseClient
            .from('user_sync_data')
            .select('updated_at, folders, starred_ids')
            .eq('id', session.user.id)
            .single();
            
        if (error && error.code !== 'PGRST116') throw error;
        
        const localTime = parseInt(localStorage.getItem('lastUpdatedTime') || '0', 10);
        
        if (!data) {
            // First time sync for new user: push local to cloud
            syncIsLocked = false; // unlock so syncPush can run
            await syncPush();
        } else {
            const cloudTime = new Date(data.updated_at).getTime();
            
            if (cloudTime > localTime) {
                // Cloud is newer: pull cloud to local
                folders = data.folders || [];
                starredIds = data.starred_ids || [];
                localStorage.setItem('folders', JSON.stringify(folders));
                localStorage.setItem('starredIds', JSON.stringify(starredIds));
                localStorage.setItem('lastUpdatedTime', cloudTime.toString());
                
                renderSidebar();
                renderMainContent();
                
                updateSyncIndicator('cloud_done', `已連線: ${session.user.email.split('@')[0]}`, '#10b981');
                if (sbSyncStatusEl) sbSyncStatusEl.textContent = `已自動下載雲端新資料`;
            } else if (localTime > cloudTime) {
                // Local is newer: push local to cloud
                syncIsLocked = false; // unlock so syncPush can run
                await syncPush();
            } else {
                // Identical times: nothing to do
                updateSyncIndicator('cloud_done', `已連線: ${session.user.email.split('@')[0]}`, '#10b981');
                if (sbSyncStatusEl) sbSyncStatusEl.textContent = `已是最新資料`;
            }
        }
    } catch (err) {
        console.error('Bi-directional sync error:', err);
        updateSyncIndicator('cloud_off', '同步出錯', '#ef4444');
    } finally {
        syncIsLocked = false;
    }
}

// ---- Manual Buttons ----
function triggerManualSyncPush() {
    syncPush(true);
}

function triggerManualSyncPull() {
    if (confirm('警告：這將會下載雲端的備份單字，並「直接覆蓋且刪除」您這台裝置上目前的進度。確定要下載覆蓋嗎？')) {
        syncPull(true);
    }
}

// =====================================================
// INIT
// =====================================================
// Pre-load voices
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', () => {
        window.speechSynthesis.getVoices(); // cache
    });
}

// Initialize Supabase integrations
initSupabase();

renderSidebar();
renderMainContent();



