// =====================================================
// DEFAULT DATA — Folders & Units
// =====================================================
const defaultFolders = [
    {
        id: "folder-toeic-phrases",
        name: "TOEIC 常用片語與句型",
        icon: "school",
        cssClass: "folder-blue",
        units: [
            {
                id: "static-1",
                name: "常用片語與句型",
                words: [
                    { id: "static-2", eng: "get off", cht: "下車" },
                    { id: "static-3", eng: "take off", cht: "起飛 / 脫下" },
                    { id: "static-4", eng: "on account of", cht: "因為" },
                    { id: "static-5", eng: "in case of", cht: "以防" },
                    { id: "static-6", eng: "apart from", cht: "除了...之外" },
                    { id: "static-7", eng: "beat about/around the bush", cht: "拐彎抹角" },
                    { id: "static-8", eng: "a pile of", cht: "一堆..." },
                    { id: "static-9", eng: "take a boat ride", cht: "乘船遊玩" },
                    { id: "static-10", eng: "come in handy", cht: "派上用場" },
                    { id: "static-11", eng: "be reluctant to", cht: "勉強" },
                    { id: "static-12", eng: "the moment / as soon as (S+V)", cht: "一...就..." },
                    { id: "static-13", eng: "be busy (Ving / with N)", cht: "忙著從事..." },
                    { id: "static-14", eng: "across from", cht: "在...對面" }
                ]
            }
        ]
    },
    {
        id: "folder-toeic-business",
        name: "TOEIC 商業、辦公與職涯",
        icon: "work",
        cssClass: "folder-yellow",
        units: [
            {
                id: "static-15",
                name: "商業、辦公與職涯",
                words: [
                    { id: "static-16", eng: "reputation", cht: "名聲" },
                    { id: "static-17", eng: "discount", cht: "折扣" },
                    { id: "static-18", eng: "charge", cht: "收費/控告/批評/趕往" },
                    { id: "static-19", eng: "warranty", cht: "保固/保險" },
                    { id: "static-20", eng: "orientation", cht: "目標/培訓" },
                    { id: "static-21", eng: "launch", cht: "發射/啟動/發布會" },
                    { id: "static-22", eng: "merchandise", cht: "商品/促銷" },
                    { id: "static-23", eng: "shareholder", cht: "股東" },
                    { id: "static-24", eng: "intern", cht: "實習生" },
                    { id: "static-25", eng: "incentives", cht: "激勵" },
                    { id: "static-26", eng: "invest", cht: "投資/投入" },
                    { id: "static-27", eng: "fund-raising", cht: "籌款" },
                    { id: "static-28", eng: "shift", cht: "改變/去除/輪班" },
                    { id: "static-29", eng: "merger", cht: "合併" },
                    { id: "static-30", eng: "brochure", cht: "手冊" },
                    { id: "static-31", eng: "representative", cht: "代表的/代理人" },
                    { id: "static-32", eng: "represent", cht: "代表/意味/表現/提出" },
                    { id: "static-33", eng: "agenda", cht: "議程" },
                    { id: "static-34", eng: "direction", cht: "方向" },
                    { id: "static-35", eng: "keynote", cht: "主題" },
                    { id: "static-36", eng: "appointment", cht: "預約/約定/任命" },
                    { id: "static-37", eng: "proceeds", cht: "收益" },
                    { id: "static-38", eng: "proceed", cht: "前進/繼續" },
                    { id: "static-39", eng: "take paid/annual leave", cht: "請年假" },
                    { id: "static-40", eng: "comp time", cht: "補休" }
                ]
            }
        ]
    },
    {
        id: "folder-toeic-daily",
        name: "TOEIC 日常、生活與雜項",
        icon: "coffee",
        cssClass: "folder-green",
        units: [
            {
                id: "static-41",
                name: "日常、生活與雜項",
                words: [
                    { id: "static-42", eng: "boiled", cht: "水煮" },
                    { id: "static-43", eng: "fry", cht: "煎" },
                    { id: "static-44", eng: "barbecue", cht: "燒烤" },
                    { id: "static-45", eng: "bake", cht: "烘烤" },
                    { id: "static-46", eng: "grill", cht: "烤肉架" },
                    { id: "static-47", eng: "plate", cht: "大盤子" },
                    { id: "static-48", eng: "bowl", cht: "碗" },
                    { id: "static-49", eng: "ingredient", cht: "成分/要素" },
                    { id: "static-50", eng: "caterer", cht: "提供餐飲服務的人" },
                    { id: "static-51", eng: "Freshman year", cht: "大一" },
                    { id: "static-52", eng: "Sophomore year", cht: "大二" },
                    { id: "static-53", eng: "Junior year", cht: "大三" },
                    { id: "static-54", eng: "Senior year", cht: "大四" },
                    { id: "static-55", eng: "first/second/third/home base", cht: "一二三本壘" },
                    { id: "static-56", eng: "home plate", cht: "本壘板" },
                    { id: "static-57", eng: "hit a home run", cht: "擊出全壘打" },
                    { id: "static-58", eng: "hit a double", cht: "擊出二壘安打" },
                    { id: "static-59", eng: "shampoo", cht: "洗髮精" },
                    { id: "static-60", eng: "soap", cht: "肥皂" },
                    { id: "static-61", eng: "toothpaste", cht: "牙膏" },
                    { id: "static-62", eng: "paper clip", cht: "迴紋針" },
                    { id: "static-63", eng: "stapler", cht: "釘書機" },
                    { id: "static-64", eng: "appliance", cht: "家電" },
                    { id: "static-65", eng: "tablet", cht: "平板" },
                    { id: "static-66", eng: "laptop", cht: "筆電" },
                    { id: "static-67", eng: "thunderstorm", cht: "雷雨" },
                    { id: "static-68", eng: "lightning", cht: "閃電" },
                    { id: "static-69", eng: "scenic", cht: "風景優美的" },
                    { id: "static-70", eng: "scenery", cht: "風景" },
                    { id: "static-71", eng: "dock/pier", cht: "碼頭" },
                    { id: "static-72", eng: "vet", cht: "獸醫" },
                    { id: "static-73", eng: "highway", cht: "高速公路" },
                    { id: "static-74", eng: "currency", cht: "貨幣" },
                    { id: "static-75", eng: "evacuate", cht: "疏散" },
                    { id: "static-76", eng: "hesitate", cht: "猶豫" },
                    { id: "static-77", eng: "pharmaceutical", cht: "製藥的/藥物" },
                    { id: "static-78", eng: "niece", cht: "姪女/外甥女" },
                    { id: "static-79", eng: "auditorium", cht: "聽眾席" },
                    { id: "static-80", eng: "asthma", cht: "氣喘" }
                ]
            }
        ]
    },
    {
        id: "folder-toeic-similar",
        name: "TOEIC 易混淆與相近字群",
        icon: "compare_arrows",
        cssClass: "folder-purple",
        units: [
            {
                id: "static-81",
                name: "易混淆與相近字群",
                words: [
                    { id: "static-82", eng: "register", cht: "登記/註冊/表達" },
                    { id: "static-83", eng: "registration", cht: "登記/註冊" },
                    { id: "static-84", eng: "mimic", cht: "模仿" },
                    { id: "static-85", eng: "comic", cht: "好笑的/漫畫" },
                    { id: "static-86", eng: "panic", cht: "驚恐" },
                    { id: "static-87", eng: "penalty", cht: "處罰/罰金" },
                    { id: "static-88", eng: "penal", cht: "不利的/處罰的" },
                    { id: "static-89", eng: "drawback", cht: "弱點/缺點" },
                    { id: "static-90", eng: "draw back", cht: "退縮" },
                    { id: "static-91", eng: "latest", cht: "最新的" },
                    { id: "static-92", eng: "broad", cht: "寬廣的" },
                    { id: "static-93", eng: "board", cht: "木板/董事會" },
                    { id: "static-94", eng: "well-stocked / provisioned / furnished", cht: "物資充足的" }
                ]
            }
        ]
    },
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
// STATE (V2 Architecture)
// =====================================================
const DATA_VERSION = 8; // Bump this to force-refresh default unit content

// V2 Data Schema
let vocabApp_v2 = JSON.parse(localStorage.getItem('vocabApp_v2')) || null;
let starredIds = JSON.parse(localStorage.getItem('starredIds')) || [];
let currentView = JSON.parse(localStorage.getItem('currentView')) || { type: 'unit', folderId: null, unitId: null };
let isTestMode = false;

// We still maintain `folders` in memory as a computed view to keep UI intact during Phase 0
let folders = []; 

const CATEGORY_META = {
    "folder-toeic-career": { name: "TOEIC 商業、辦公與職涯", icon: "work", cssClass: "folder-yellow" },
    "folder-toeic-daily": { name: "TOEIC 日常、生活與雜項", icon: "coffee", cssClass: "folder-green" },
    "folder-toeic-similar": { name: "TOEIC 易混淆與相近字群", icon: "compare_arrows", cssClass: "folder-purple" },
    "folder-parker": { name: "Parker", icon: "menu_book", cssClass: "folder-parker" },
    "folder-toeic": { name: "新制多益 New TOEIC", icon: "import_contacts", cssClass: "folder-toeic" },
    "folder-handwritten": { name: "📝 手寫筆記單字", icon: "edit_note", cssClass: "folder-handwritten" }
};

// 1. MIGRATION & INITIALIZATION
if (!vocabApp_v2) {
    console.log("Initializing vocabApp_v2...");
    vocabApp_v2 = {
        schemaVersion: 2,
        words: [],
        settings: {},
        metadata: { createdAt: new Date().toISOString(), lastExportedAt: null }
    };
    
    let oldFolders = JSON.parse(localStorage.getItem('folders')) || JSON.parse(JSON.stringify(defaultFolders));
    
    // Migrate old data to V2 Flat format
    oldFolders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                let v2Word = {
                    id: word.id || 'v2-' + Math.random().toString(36).substr(2, 9),
                    word: word.eng,
                    normalizedWord: (word.eng || "").trim().toLowerCase(),
                    type: "word",
                    meaning: word.cht,
                    alternativeMeanings: [],
                    category: folder.id,
                    tags: [unit.name], // Use unit name as a tag to group them later
                    mastery: word.mastery || 0,
                    streak: word.streak || 0,
                    correctCount: word.correctCount || 0,
                    wrongCount: word.wrongCount || 0,
                    lastReviewedAt: word.lastReviewedAt || null,
                    lastWrongAt: word.lastWrongAt || null,
                    nextReviewAt: word.nextReviewAt || null,
                    priority: word.priority || "normal",
                    ignored: false,
                    confusionGroup: word.confusionGroup || null,
                    notes: word.notes || [],
                    examples: word.examples || [],
                    encounters: [],
                    sourceCount: word.sourceCount || 1,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
                vocabApp_v2.words.push(v2Word);
            });
        });
    });
    
    localStorage.setItem('dataVersion', DATA_VERSION);
    save();
}


// Migration: Group all TOEIC handwritten notes into folder-handwritten
if (typeof vocabApp_v2 !== 'undefined' && vocabApp_v2 && vocabApp_v2.words) {
    let migratedCount = 0;
    const mapping = {
        "folder-toeic-phrases": ["片語"],
        "folder-toeic-business": ["單字"],
        "folder-toeic-life": ["單字"],
        "folder-toeic-confusion": ["易混淆", "單字"],
        "folder-toeic-career": ["單字"],
        "folder-toeic-daily": ["單字"],
        "folder-toeic-similar": ["易混淆", "單字"]
    };
    vocabApp_v2.words.forEach(w => {
        if (mapping[w.category]) {
            // For migrated legacy words, if they contain a space, they are probably a phrase
            let isPhrase = (w.word || w.eng || "").includes(' ');
            let targetTags = mapping[w.category].slice(); // copy
            
            if (targetTags.includes("單字") && isPhrase) {
                targetTags[targetTags.indexOf("單字")] = "片語";
            }
            
            // Note: If user imported 1125 words into folder-toeic-phrases, they will all be "片語".
            // Let's be smart: dynamically check space instead of blindly trusting mapping for 'folder-toeic-phrases'
            if (w.category === "folder-toeic-phrases") {
                targetTags = [isPhrase ? "片語" : "單字"];
            }
            
            w.tags = targetTags;
            w.category = "folder-handwritten";
            migratedCount++;
        } else if (w.category === "folder-handwritten") {
            // Re-map already migrated tags if they are the old ones
            if (w.tags && w.tags.length === 1 && w.tags[0].startsWith("TOEIC ")) {
                let isPhrase = (w.word || w.eng || "").includes(' ');
                let newTags = [isPhrase ? "片語" : "單字"];
                if (w.tags[0].includes("易混淆")) {
                    newTags.push("易混淆");
                }
                w.tags = newTags;
                migratedCount++;
            }
        }
    });

    // Automatically inject all words provided by the user
    const groupedWords = [
        {
            tag: "TOEIC 常用片語與句型",
            words: [
                { eng: "break a contract", cht: "違約", type: "phrase" },
                { eng: "look up", cht: "查找", type: "phrase" },
                { eng: "stop by", cht: "前往", type: "phrase" },
                { eng: "drop off", cht: "入睡 / 減少 / 下降 / 下車", type: "phrase" },
                { eng: "drop 人/物 off", cht: "開車把人/物載到", type: "phrase" },
                { eng: "pick 人 up", cht: "去某地接某人", type: "phrase" },
                { eng: "make up my mind", cht: "下定決心", type: "phrase" },
                { eng: "take care of", cht: "處理", type: "phrase" },
                { eng: "in the event of", cht: "如果...發生", type: "phrase" },
                { eng: "line up", cht: "準備", type: "phrase" },
                { eng: "takeoff", cht: "起飛", type: "word" },
                { eng: "on behalf of", cht: "代表", type: "phrase" },
                { eng: "walk away with", cht: "贏得", type: "phrase" },
                { eng: "full of", cht: "充滿...的", type: "phrase" },
                { eng: "get off", cht: "下車", type: "phrase" },
                { eng: "take off", cht: "起飛 / 脫下", type: "phrase" },
                { eng: "on account of", cht: "因為", type: "phrase" },
                { eng: "in case of", cht: "以防", type: "phrase" },
                { eng: "apart from", cht: "除了....之外", type: "phrase" },
                { eng: "beat about/around the bush", cht: "拐彎抹角", type: "phrase" },
                { eng: "a pile of", cht: "一堆.....", type: "phrase" },
                { eng: "take a boat ride", cht: "乘船遊玩", type: "phrase" },
                { eng: "come in handy", cht: "派上用場", type: "phrase" },
                { eng: "be reluctant to", cht: "勉強", type: "phrase" },
                { eng: "the moment / as soon as (S+V)", cht: "一...就...", type: "phrase" },
                { eng: "be busy (Ving / with N)", cht: "忙著從事...", type: "phrase" },
                { eng: "across from", cht: "在...對面", type: "phrase" }
            ]
        },
        {
            tag: "TOEIC 商業、辦公與職涯",
            words: [
                {eng: "reputation", cht: "名聲", type: "word"},
                {eng: "discount", cht: "折扣", type: "word"},
                {eng: "charge", cht: "收費/控告/批評/趕往", type: "word"},
                {eng: "warranty", cht: "保固/保險", type: "word"},
                {eng: "orientation", cht: "目標/培訓", type: "word"},
                {eng: "launch", cht: "發射/啟動/發布會", type: "word"},
                {eng: "merchandise", cht: "商品/促銷", type: "word"},
                {eng: "shareholder", cht: "股東", type: "word"},
                {eng: "intern", cht: "實習生/扣壓", type: "word"},
                {eng: "incentives", cht: "激勵", type: "word"},
                {eng: "invest", cht: "投資/投入", type: "word"},
                {eng: "fund-raising", cht: "籌款", type: "word"},
                {eng: "shift", cht: "改變/去除/輪班", type: "word"},
                {eng: "merger", cht: "合併", type: "word"},
                {eng: "brochure", cht: "手冊", type: "word"},
                {eng: "representative", cht: "代表的/代理人", type: "word"},
                {eng: "represent", cht: "代表/意味/表現/提出", type: "word"},
                {eng: "agenda", cht: "議程", type: "word"},
                {eng: "direction", cht: "方向", type: "word"},
                {eng: "keynote", cht: "主題", type: "word"},
                {eng: "appointment", cht: "預約/約定/任命", type: "word"},
                {eng: "proceeds", cht: "收益", type: "word"},
                {eng: "proceed", cht: "前進/繼續", type: "word"},
                {eng: "take paid/annual leave", cht: "請年假", type: "phrase"},
                {eng: "comp time", cht: "補休", type: "phrase"},
                {eng: "course", cht: "課程/過程/場地/療程/流動", type: "word"},
                {eng: "interpret", cht: "翻譯/理解", type: "word"},
                {eng: "alongside", cht: "在...旁邊", type: "word"},
                {eng: "attache", cht: "固定/連接", type: "word"},
                {eng: "shelf", cht: "架子", type: "word"},
                {eng: "repair", cht: "修理/補救", type: "word"},
                {eng: "gallery", cht: "美術館", type: "word"},
                {eng: "stuff", cht: "東西", type: "word"},
                {eng: "pace", cht: "步調/速度/來回踱步", type: "word"},
                {eng: "retirement", cht: "退休", type: "word"},
                {eng: "fair", cht: "集市/展覽會", type: "word"},
                {eng: "fax", cht: "傳真", type: "word"},
                {eng: "radio", cht: "收音機", type: "word"},
                {eng: "fit", cht: "適合", type: "word"},
                {eng: "reach", cht: "到達/伸手/交流", type: "word"},
                {eng: "stack", cht: "堆疊/車禍/許多", type: "word"},
                {eng: "accompany", cht: "陪伴/伴奏", type: "word"},
                {eng: "ceremony", cht: "典禮/禮儀", type: "word"},
                {eng: "initial", cht: "最初的/首字母", type: "word"},
                {eng: "commensurate", cht: "相等的", type: "word"},
                {eng: "cable", cht: "電纜/電線", type: "word"},
                {eng: "parade", cht: "遊行/炫耀", type: "word"},
                {eng: "campaign", cht: "活動(政.商.軍)", type: "word"},
                {eng: "reply", cht: "回應/回復", type: "word"},
                {eng: "undergo", cht: "經歷", type: "word"},
                {eng: "renovate", cht: "整修/翻新", type: "word"},
                {eng: "interior", cht: "內部的/內地", type: "word"},
                {eng: "apron", cht: "圍裙/停機坪/舞台", type: "word"},
                {eng: "park", cht: "停放/擱置/體育場", type: "word"},
                {eng: "expire", cht: "到期/逝世", type: "word"},
                {eng: "fixture", cht: "固定裝置/體育賽事", type: "word"}
            ]
        },
        {
            tag: "TOEIC 日常、生活與雜項",
            words: [
                {eng: "boiled", cht: "水煮", type: "word"},
                {eng: "fry", cht: "煎", type: "word"},
                {eng: "barbecue", cht: "燒烤", type: "word"},
                {eng: "bake", cht: "烘烤", type: "word"},
                {eng: "grill", cht: "烤肉架", type: "word"},
                {eng: "plate", cht: "大盤子", type: "word"},
                {eng: "bowl", cht: "碗", type: "word"},
                {eng: "ingredient", cht: "成分/要素", type: "word"},
                {eng: "caterer", cht: "提供餐飲服務的人", type: "word"},
                {eng: "Freshman year", cht: "大一", type: "phrase"},
                {eng: "Sophomore year", cht: "大二", type: "phrase"},
                {eng: "Junior year", cht: "大三", type: "phrase"},
                {eng: "Senior year", cht: "大四", type: "phrase"},
                {eng: "first/second/third/home base", cht: "一二三本壘", type: "phrase"},
                {eng: "home plate", cht: "本壘板", type: "phrase"},
                {eng: "hit a home run", cht: "擊出全壘打", type: "phrase"},
                {eng: "hit a double", cht: "擊出二壘安打", type: "phrase"},
                {eng: "shampoo", cht: "洗髮精", type: "word"},
                {eng: "soap", cht: "肥皂", type: "word"},
                {eng: "toothpaste", cht: "牙膏", type: "word"},
                {eng: "paper clip", cht: "迴紋針", type: "phrase"},
                {eng: "stapler", cht: "釘書機", type: "word"},
                {eng: "appliance", cht: "家電", type: "word"},
                {eng: "tablet", cht: "平板", type: "word"},
                {eng: "laptop", cht: "筆電", type: "word"},
                {eng: "thunderstorm", cht: "雷雨", type: "word"},
                {eng: "lightning", cht: "閃電", type: "word"},
                {eng: "scenic", cht: "風景優美的", type: "word"},
                {eng: "scenery", cht: "風景", type: "word"},
                {eng: "dock/pier", cht: "碼頭", type: "word"},
                {eng: "vet", cht: "獸醫", type: "word"},
                {eng: "highway", cht: "高速公路", type: "word"},
                {eng: "currency", cht: "貨幣", type: "word"},
                {eng: "evacuate", cht: "疏散", type: "word"},
                {eng: "hesitate", cht: "猶豫", type: "word"},
                {eng: "pharmaceutical", cht: "製藥的/藥物", type: "word"},
                {eng: "niece", cht: "姪女/外甥女", type: "word"},
                {eng: "auditorium", cht: "聽眾席", type: "word"},
                {eng: "asthma", cht: "氣喘", type: "word"},
                {eng: "lounge", cht: "客廳", type: "word"},
                {eng: "sculpture", cht: "雕塑", type: "word"},
                {eng: "feather", cht: "羽毛", type: "word"},
                {eng: "further", cht: "更遠的/改進", type: "word"},
                {eng: "elevator", cht: "電梯", type: "word"},
                {eng: "escalator", cht: "手扶梯", type: "word"},
                {eng: "take/on paid leave", cht: "請假", type: "phrase"},
                {eng: "annual leave", cht: "年假", type: "phrase"},
                {eng: "long week", cht: "連假", type: "phrase"},
                {eng: "four-day bridge week", cht: "四天連假", type: "phrase"},
                {eng: "ceiling", cht: "天花板/上限", type: "word"},
                {eng: "floor", cht: "地板/樓層/底部/場所/打倒", type: "word"},
                {eng: "session", cht: "會議/開庭/學年/一段時間/一場", type: "word"},
                {eng: "jam session", cht: "演奏會", type: "phrase"},
                {eng: "bull session", cht: "聊天", type: "phrase"},
                {eng: "photo session", cht: "宣傳時間", type: "phrase"}
            ]
        },
        {
            tag: "TOEIC 易混淆與相近字群",
            words: [
                {eng: "register", cht: "登記/註冊/表達", type: "word"},
                {eng: "registration", cht: "登記/註冊", type: "word"},
                {eng: "mimic", cht: "模仿", type: "word"},
                {eng: "comic", cht: "好笑的/漫畫", type: "word"},
                {eng: "panic", cht: "驚恐", type: "word"},
                {eng: "penalty", cht: "處罰/罰金", type: "word"},
                {eng: "penal", cht: "不利的/處罰的", type: "word"},
                {eng: "drawback", cht: "弱點/缺點", type: "word"},
                {eng: "draw back", cht: "退縮", type: "phrase"},
                {eng: "latest", cht: "最新的", type: "word"},
                {eng: "broad", cht: "寬廣的", type: "word"},
                {eng: "board", cht: "木板/董事會", type: "word"},
                {eng: "well-stocked / provisioned / furnished", cht: "物資充足的", type: "phrase"}
            ]
        }
,
        {
            tag: "TOEIC 單字大彙總",
            words: [
                { eng: "ancient", cht: "古老的", type: "word" },
                { eng: "effort", cht: "努力", type: "word" },
                { eng: "properly", cht: "正常", type: "word" },
                { eng: "brakes", cht: "煞車", type: "word" },
                { eng: "dressing", cht: "醬", type: "word" },
                { eng: "address", cht: "住址", type: "word" },
                { eng: "rooftop", cht: "屋頂", type: "word" },
                { eng: "solar panel", cht: "太陽能電池板", type: "phrase" },
                { eng: "unsuitable", cht: "不適合的", type: "word" },
                { eng: "existing", cht: "目前的", type: "word" },
                { eng: "equipment", cht: "設備", type: "word" },
                { eng: "unit", cht: "裝置/配件/單位", type: "word" },
                { eng: "fan", cht: "電風扇/煽動", type: "word" },
                { eng: "termination", cht: "終止/結束", type: "word" },
                { eng: "ownership", cht: "所有權", type: "word" },
                { eng: "penalty", cht: "處罰", type: "word" },
                { eng: "roommate", cht: "室友", type: "word" },
                { eng: "coordinate", cht: "協調/搭配", type: "word" },
                { eng: "caterer", cht: "餐飲服務商", type: "word" },
                { eng: "dietary", cht: "飲食的", type: "word" },
                { eng: "restriction", cht: "限制", type: "word" },
                { eng: "utilize", cht: "利用", type: "word" },
                { eng: "hand in", cht: "提交", type: "phrase" },
                { eng: "campaign", cht: "行銷活動", type: "word" },
                { eng: "questionnaire", cht: "問卷", type: "word" },
                
                { eng: "branch", cht: "分公司", type: "word" },
                { eng: "demand", cht: "要求", type: "word" },
                { eng: "potential", cht: "潛在的", type: "word" },
                { eng: "relocate", cht: "搬遷", type: "word" },
                { eng: "downtown", cht: "市中心", type: "word" },
                { eng: "current", cht: "當前的", type: "word" },
                { eng: "executive", cht: "行政長官", type: "word" },
                { eng: "merchandise", cht: "商品", type: "word" },
                { eng: "remote", cht: "遠距的", type: "word" },
                { eng: "appropriately", cht: "適當地", type: "word" },
                { eng: "reasonable", cht: "合理的", type: "word" },
                { eng: "misplace", cht: "遺失", type: "word" },
                { eng: "security office", cht: "警衛室", type: "phrase" },
                { eng: "safe", cht: "保險箱", type: "word" },
                { eng: "hardware", cht: "五金行", type: "word" },
                { eng: "locksmith", cht: "鎖匠", type: "word" },
                { eng: "manage", cht: "設法應付", type: "word" },
                { eng: "distributor", cht: "經銷商", type: "word" },
                { eng: "shipment", cht: "運輸", type: "word" },
                { eng: "courier", cht: "快遞員", type: "word" },
                { eng: "distribute", cht: "分發", type: "word" },
                { eng: "handout", cht: "印刷品", type: "word" },
                { eng: "last-minute", cht: "最後的", type: "word" },
                { eng: "printout", cht: "印出的資料", type: "word" },
                { eng: "outfit", cht: "服裝", type: "word" },
                
                { eng: "banquet", cht: "宴會", type: "word" },
                { eng: "bouquet", cht: "花束", type: "word" },
                { eng: "venue", cht: "發生地點", type: "word" },
                { eng: "tax filing", cht: "報稅", type: "phrase" },
                { eng: "worth", cht: "值得", type: "word" },
                { eng: "investment", cht: "投資", type: "word" },
                { eng: "specialist", cht: "專家", type: "word" },
                { eng: "inaccurate", cht: "不準確的", type: "word" },
                { eng: "return", cht: "收益/利潤", type: "word" },
                { eng: "quote", cht: "報價", type: "word" },
                { eng: "recommend", cht: "建議", type: "word" },
                { eng: "dental", cht: "牙齒的", type: "word" },
                { eng: "comfortably", cht: "舒適地", type: "word" },
                { eng: "complimentary", cht: "免費的", type: "word" },
                { eng: "shipping", cht: "運輸", type: "word" },
                { eng: "trial", cht: "試用", type: "word" },
                { eng: "catalogue", cht: "目錄/紀錄/一連串的", type: "word" },
                { eng: "matter", cht: "事情", type: "word" },
                { eng: "aisle", cht: "走道", type: "word" },
                { eng: "suitcase", cht: "行李箱", type: "word" },
                { eng: "plane", cht: "飛機", type: "word" },
                { eng: "step down", cht: "辭職", type: "phrase" },
                { eng: "promotion", cht: "晉升", type: "word" },
                { eng: "adequate", cht: "足夠的", type: "word" },
                { eng: "retailer", cht: "零售商", type: "word" },
                
                { eng: "virtual", cht: "虛擬的", type: "word" },
                { eng: "architect", cht: "建築師", type: "word" },
                { eng: "basement", cht: "地下室", type: "word" },
                { eng: "partially", cht: "部分地", type: "word" },
                { eng: "navigate", cht: "導航/瀏覽", type: "word" },
                { eng: "attempt", cht: "企圖/嘗試", type: "word" },
                { eng: "plan", cht: "圖紙/計畫", type: "word" },
                { eng: "natural disaster", cht: "自然災害", type: "phrase" },
                { eng: "resume", cht: "重新開始/履歷", type: "word" },
                { eng: "certificate", cht: "結業證書", type: "word" },
                { eng: "prescription", cht: "處方箋", type: "word" },
                { eng: "packet", cht: "行程表", type: "word" },
                { eng: "injure", cht: "受傷", type: "word" },
                { eng: "ill", cht: "生病", type: "word" },
                { eng: "volunteer", cht: "自願者", type: "word" },
                { eng: "job fair", cht: "就業博覽會", type: "phrase" },
                { eng: "severe", cht: "嚴重的", type: "word" },
                { eng: "approximate", cht: "大約的", type: "word" },
                { eng: "voucher", cht: "票券", type: "word" },
                { eng: "establishment", cht: "企業/機構", type: "word" },
                { eng: "postponement", cht: "延遲", type: "word" },
                { eng: "modification", cht: "修改", type: "word" },
                { eng: "fasten", cht: "繫緊", type: "word" },
                { eng: "aircraft", cht: "飛機", type: "word" },
                { eng: "malfunction", cht: "故障", type: "word" },
                
                { eng: "disrupt", cht: "干擾", type: "word" },
                { eng: "redeem", cht: "補救", type: "word" },
                { eng: "glimpse", cht: "一瞥", type: "word" },
                { eng: "attendee", cht: "出席者", type: "word" },
                { eng: "appear", cht: "出現", type: "word" },
                { eng: "transfer", cht: "調任", type: "word" },
                { eng: "lounge", cht: "休息室", type: "word" },
                { eng: "raffle", cht: "抽獎/獎品", type: "word" },
                { eng: "guide", cht: "引導", type: "word" },
                { eng: "mission", cht: "任務", type: "word" },
                { eng: "emission", cht: "排放", type: "word" },
                { eng: "chemical-free", cht: "無化學成分的", type: "word" },
                { eng: "commitment", cht: "承諾", type: "word" },
                { eng: "biodegradable", cht: "可生物分解的", type: "word" },
                { eng: "emphasize", cht: "強調", type: "word" },
                { eng: "distribute", cht: "分配", type: "word" },
                { eng: "commence", cht: "開始", type: "word" },
                { eng: "reveal", cht: "公開", type: "word" },
                { eng: "agricultural supplies", cht: "農業用品", type: "phrase" },
                { eng: "admission", cht: "入場券", type: "word" },
                { eng: "workout", cht: "運動", type: "word" },
                { eng: "improve", cht: "提升", type: "word" },
                { eng: "fitness", cht: "健康", type: "word" },
                { eng: "concert", cht: "演唱會", type: "word" },
                { eng: "obligation", cht: "義務/責任", type: "word" },
                { eng: "fulfill", cht: "履行", type: "word" },
                
                { eng: "layer", cht: "層", type: "word" },
                { eng: "multiple layer", cht: "千層", type: "phrase" },
                { eng: "lettering", cht: "寫字", type: "word" },
                { eng: "fundraising", cht: "募款", type: "word" },
                { eng: "gala", cht: "盛會", type: "word" },
                { eng: "personalization", cht: "個人化", type: "word" },
                { eng: "generally", cht: "通常", type: "word" },
                { eng: "complimentary", cht: "免費的", type: "word" },
                { eng: "bathing suit", cht: "泳裝", type: "phrase" },
                { eng: "non-slip", cht: "防滑的", type: "word" },
                { eng: "appropriate", cht: "合適的", type: "word" },
                { eng: "inquiry", cht: "詢問", type: "word" },
                { eng: "crew", cht: "一組工作人員", type: "word" },
                { eng: "dispatch", cht: "派遣/發送", type: "word" },
                { eng: "official", cht: "官員", type: "word" },
                { eng: "electrician", cht: "電工", type: "word" },
                { eng: "overdue", cht: "過期的", type: "word" },
                { eng: "utility fee", cht: "水電費", type: "phrase" }
            ]
        }    ];

    let newMigrated = 0;
    groupedWords.forEach(group => {
        group.words.forEach(nw => {
            const normalized = nw.eng.toLowerCase().trim();
            const exists = vocabApp_v2.words.find(w => w.normalizedWord === normalized);
            let expectedTags = group.tag.includes("易混淆") ? ["易混淆", (nw.type || (nw.eng.includes(' ') ? "phrase" : "word")) === "phrase" ? "片語" : "單字"] : [(nw.type || (nw.eng.includes(' ') ? "phrase" : "word")) === "phrase" ? "片語" : "單字"];
            
            if (!exists) {
                vocabApp_v2.words.push({
                    id: 'v2-img-' + Math.random().toString(36).substr(2, 9),
                    word: nw.eng,
                    normalizedWord: normalized,
                    type: nw.type || (nw.eng.includes(' ') ? "phrase" : "word"),
                    meaning: nw.cht,
                    alternativeMeanings: [],
                    category: "folder-handwritten",
                    tags: expectedTags,
                    mastery: 0,
                    streak: 0,
                    correctCount: 0,
                    wrongCount: 0,
                    lastReviewedAt: null,
                    lastWrongAt: null,
                    priority: "normal",
                    ignored: false,
                    notes: [],
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                });
                newMigrated++;
            } else {
                // If it already exists, ensure it has the expected tags (especially "易混淆")
                if (!exists.tags) exists.tags = [];
                let tagsChanged = false;
                expectedTags.forEach(t => {
                    if (!exists.tags.includes(t)) {
                        exists.tags.push(t);
                        tagsChanged = true;
                    }
                });
                
                // Also remove any legacy "TOEIC " tags just in case
                let oldLen = exists.tags.length;
                exists.tags = exists.tags.filter(t => !t.startsWith("TOEIC "));
                if (exists.tags.length !== oldLen) tagsChanged = true;

                if (tagsChanged) {
                    newMigrated++;
                }
            }
        });
    });

    if (newMigrated > 0) {
        migratedCount += newMigrated;
    }

    if (migratedCount > 0) {
        localStorage.setItem('vocabApp_v2', JSON.stringify(vocabApp_v2));
        console.log("Migrated " + migratedCount + " handwritten words.");
    }
}



// 2. BUILD COMPUTED VIEW `folders` FOR BACKWARD COMPATIBLE UI
function rebuildFoldersView() {
    let folderMap = {};
    vocabApp_v2.words.forEach(w => {
        if (!folderMap[w.category]) {
            let meta = CATEGORY_META[w.category] || { name: w.category, icon: "folder", cssClass: "" };
            folderMap[w.category] = {
                id: w.category,
                name: meta.name,
                icon: meta.icon,
                cssClass: meta.cssClass,
                units: []
            };
        }
        let folder = folderMap[w.category];
        
        let unitName = (w.tags && w.tags.length > 0) ? w.tags[0] : "Default Unit";
        // Create unit id based on unitName for consistency
        let unitId = "unit-" + unitName.replace(/\s+/g, '-');
        
        let unit = folder.units.find(u => u.name === unitName);
        if (!unit) {
            unit = { id: unitId, name: unitName, words: [] };
            folder.units.push(unit);
        }
        
        // Push a proxy-like object or mapped object so UI bindings work?
        // Wait, UI uses `word.eng` and `word.cht`! We must map v2 keys back to v1 keys for the UI to read them, 
        // OR we just use getters/setters so updates write back to v2.
        // Easiest is to add properties to the v2 object directly so UI can read `.eng` and it returns `.word`.
        Object.defineProperty(w, 'eng', { get: function() { return this.word; }, set: function(val) { this.word = val; }});
        Object.defineProperty(w, 'cht', { get: function() { return this.meaning; }, set: function(val) { this.meaning = val; }});
        
        unit.words.push(w);
    });
    
    // Convert map to sorted array (try to preserve original order if possible, here just values)
    folders = Object.values(folderMap);
}

rebuildFoldersView();

// =====================================================
// PERSISTENCE
// =====================================================
function save() {
    localStorage.setItem('vocabApp_v2', JSON.stringify(vocabApp_v2));
    localStorage.setItem('starredIds',  JSON.stringify(starredIds));
    localStorage.setItem('currentView', JSON.stringify(currentView));
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
const dashboardSectionEl = document.getElementById('dashboard-section');
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

const importSectionEl         = document.getElementById('import-section');
const importFolderSelect      = document.getElementById('import-folder-select');
const importTextarea          = document.getElementById('import-textarea');
const analyzeImportBtn        = document.getElementById('analyze-import-btn');
const importPreviewContainer  = document.getElementById('import-preview-container');
const importPreviewList       = document.getElementById('import-preview-list');
const importPreviewCount      = document.getElementById('import-preview-count');
const importUnrecognizedContainer = document.getElementById('import-unrecognized-container');
const importUnrecognizedText  = document.getElementById('import-unrecognized-text');
const confirmImportBtn        = document.getElementById('confirm-import-btn');
const importSelectAllBtn      = document.getElementById('import-select-all-btn');
const importDeselectAllBtn    = document.getElementById('import-deselect-all-btn');

const confusionSectionEl = document.getElementById('confusion-section');
const startConfusionBtn = document.getElementById('start-confusion-btn');
const cqOverlay = document.getElementById('confusion-quiz-overlay');
const cqProgress = document.getElementById('cq-progress');
const cqExitBtn = document.getElementById('cq-exit');
const cqCounter = document.getElementById('cq-counter');
const cqQuestion = document.getElementById('cq-question');
const cqOptions = document.getElementById('cq-options');

const dashDueEl = document.getElementById('dash-due');
const dashWrongEl = document.getElementById('dash-wrong');
const dashNewEl = document.getElementById('dash-new');
const dashMasteredEl = document.getElementById('dash-mastered');
const startTodayBtn = document.getElementById('start-today-btn');

const statsSectionEl = document.getElementById('stats-section');
const statTotalEl = document.getElementById('stat-total');
const statM0El = document.getElementById('stat-m0');
const statM12El = document.getElementById('stat-m12');
const statM34El = document.getElementById('stat-m34');
const statM5El = document.getElementById('stat-m5');

// Keep track of the last viewed unit/starred tab before a search query was typed
let lastActiveView = currentView.type !== 'search' ? { ...currentView } : { type: 'starred', folderId: null, unitId: null };

// =====================================================
// RENDER SIDEBAR
// =====================================================
function renderSidebar() {
    // Starred badge
    starredCountEl.textContent = starredIds.length;
    starredNavEl.classList.toggle('active', currentView.type === 'starred');

    const wrongNavEl = document.getElementById('wrong-nav');
    if (wrongNavEl) wrongNavEl.classList.toggle('active', currentView.type === 'wrong');

    const importNavEl = document.getElementById('import-nav');
    if (importNavEl) importNavEl.classList.toggle('active', currentView.type === 'import');

    const confusionNavEl = document.getElementById('confusion-nav');
    if (confusionNavEl) confusionNavEl.classList.toggle('active', currentView.type === 'confusion');

    const statsNavEl = document.getElementById('stats-nav');
    if (statsNavEl) statsNavEl.classList.toggle('active', currentView.type === 'stats');

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

function selectWrongWords() {
    clearSearchInputSilently();
    currentView = { type: 'wrong', folderId: null, unitId: null };
    lastActiveView = { ...currentView };
    isTestMode = false;
    save();
    renderSidebar();
    renderMainContent();
    closeMobileSidebar();
}

function selectImport() {
    clearSearchInputSilently();
    currentView = { type: 'import', folderId: null, unitId: null };
    lastActiveView = { ...currentView };
    isTestMode = false;
    save();
    renderSidebar();
    renderMainContent();
    closeMobileSidebar();
}

function selectConfusion() {
    clearSearchInputSilently();
    currentView = { type: 'confusion', folderId: null, unitId: null };
    lastActiveView = { ...currentView };
    isTestMode = false;
    save();
    renderSidebar();
    renderMainContent();
    closeMobileSidebar();
}

function selectStats() {
    clearSearchInputSilently();
    currentView = { type: 'stats', folderId: null, unitId: null };
    lastActiveView = { ...currentView };
    isTestMode = false;
    save();
    renderSidebar();
    renderMainContent();
    closeMobileSidebar();
}

function renderMainContent() {
    wordSectionEl.classList.add('hidden');
    if (dashboardSectionEl) dashboardSectionEl.classList.add('hidden');
    if (importSectionEl) importSectionEl.classList.add('hidden');
    if (confusionSectionEl) confusionSectionEl.classList.add('hidden');
    if (statsSectionEl) statsSectionEl.classList.add('hidden');

    if (currentView.type === 'search') {
        renderSearchView();
    } else if (currentView.type === 'starred') {
        renderStarredView();
    } else if (currentView.type === 'wrong') {
        renderWrongWordsView();
    } else if (currentView.type === 'import') {
        renderImportView();
    } else if (currentView.type === 'confusion') {
        renderConfusionView();
    } else if (currentView.type === 'stats') {
        renderStatsView();
    } else if (currentView.type === 'unit' && currentView.unitId) {
        wordSectionEl.classList.remove('hidden');
        renderUnitView();
    } else {
        if (dashboardSectionEl) dashboardSectionEl.classList.remove('hidden');
        showDashboard();
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

function showDashboard() {
    headerActions.classList.add('hidden');
    setFormattedTitle('🌅 今日學習總覽');
    
    let dueCount = 0;
    let wrongCount = 0;
    let newCount = 0;
    let masteredCount = 0;
    
    const today = new Date();
    today.setHours(0,0,0,0);
    
    folders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                // Due
                if (word.nextReviewAt) {
                    const reviewDate = new Date(word.nextReviewAt);
                    if (reviewDate <= today) dueCount++;
                } else if (word.mastery > 0 && word.mastery < 5) {
                    // Fallback if no nextReviewAt but not mastered and not new
                    dueCount++;
                }
                
                // Wrong
                if (word.wrongCount > 0) wrongCount++;
                
                // New
                if ((!word.mastery || word.mastery === 0) && !word.lastReviewedAt) newCount++;
                
                // Mastered
                if (word.mastery >= 5) masteredCount++;
            });
        });
    });
    
    if (dashDueEl) dashDueEl.textContent = dueCount;
    if (dashWrongEl) dashWrongEl.textContent = wrongCount;
    if (dashNewEl) dashNewEl.textContent = newCount;
    if (dashMasteredEl) dashMasteredEl.textContent = masteredCount;
}

function renderUnitView() {
    const folder = folders.find(f => f.id === currentView.folderId);
    const unit   = folder?.units.find(u => u.id === currentView.unitId);
    if (!unit) { showDashboard(); return; }

    setFormattedTitle(unit.name);
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

function renderWrongWordsView() {
    setFormattedTitle('❌ 錯題複習');
    wordSectionEl.classList.remove('hidden');
    headerActions.classList.remove('hidden');
    addWordAreaEl.classList.add('hidden');

    const wrongWords = [];
    folders.forEach(folder => {
        folder.units.forEach(unit => {
            unit.words.forEach(word => {
                if (word.wrongCount && word.wrongCount > 0) {
                    wrongWords.push({ ...word, _unitName: unit.name });
                }
            });
        });
    });

    wrongWords.sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0));

    wordCountEl.textContent = wrongWords.length;
    wordListEl.innerHTML = '';

    if (wrongWords.length === 0) {
        wordListEl.innerHTML = '<p style="color:var(--text-secondary);grid-column:1/-1;text-align:center;padding:20px;">太棒了！目前沒有任何錯題紀錄。</p>';
        headerActions.classList.add('hidden');
        return;
    }

    wrongWords.forEach(word => wordListEl.appendChild(createWordCard(word, true)));
}

function renderImportView() {
    setFormattedTitle('📥 批次筆記匯入');
    wordSectionEl.classList.add('hidden');
    emptyStateEl.classList.add('hidden');
    headerActions.classList.add('hidden');
    importSectionEl.classList.remove('hidden');

    // Populate folder dropdown
    importFolderSelect.innerHTML = '<option value="">選擇要匯入的資料夾與回數...</option>';
    folders.forEach(folder => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = folder.name;
        folder.units.forEach(unit => {
            const opt = document.createElement('option');
            opt.value = `${folder.id}|${unit.id}`;
            opt.textContent = unit.name;
            optgroup.appendChild(opt);
        });
        importFolderSelect.appendChild(optgroup);
    });
    
    // Reset preview state
    importPreviewContainer.classList.add('hidden');
    importTextarea.value = '';
}

function renderConfusionView() {
    setFormattedTitle('🔀 易混淆挑戰');
    headerActions.classList.add('hidden');
    confusionSectionEl.classList.remove('hidden');
}

function renderStatsView() {
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
    });
    
    if (statTotalEl) statTotalEl.textContent = total;
    if (statM0El) statM0El.textContent = m0;
    if (statM12El) statM12El.textContent = m12;
    if (statM34El) statM34El.textContent = m34;
    if (statM5El) statM5El.textContent = m5;
}

window.startStatsReview = function(level) {
    currentView = { type: 'stats_review', level };
    openFlashcardMode();
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
    const mastery = word.mastery || 0;
    const isMastered = mastery >= 4;
    
    // Generate stars
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        starsHtml += (i <= mastery) ? '★' : '☆';
    }
    const card = document.createElement('div');
    card.className = `word-card ${isStarred ? 'starred' : ''}`;
    if (isMastered) card.classList.add('mastered');
    card.dataset.wordId = word.id;

    const safeEng = word.eng.replace(/'/g, "\\'");
    card.innerHTML = `
        <div class="word-eng">${word.eng} ${isMastered ? '<span title="已熟練" style="font-size: 0.85em;">🔥</span>' : ''}</div>
        <div class="word-cht">${word.cht}</div>
        <div class="word-mastery-stars" title="熟練度: ${mastery}/5">${starsHtml} <span style="font-size: 0.7em; opacity: 0.7; margin-left: 4px;">(${mastery}/5)</span></div>
        ${showBadge ? `<div class="word-unit-badge">${word._unitName || ''}</div>` : ''}
        <div class="card-actions">
            <button class="icon-btn speak-btn" title="播放發音（US→GB）" onclick="speakWord('${safeEng}', event, this)">
                <span class="material-symbols-outlined">volume_up</span>
            </button>
            <button class="icon-btn star-btn" title="${isStarred ? '取消星號' : '加星號'}" onclick="toggleStar('${word.id}', event)">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${isStarred ? 1 : 0}">star</span>
            </button>
            
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
        if (!confirm('確定要移除此單字的星號嗎？')) return;
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
    const newUnit = { id: "static-95", name, words: [] };
    folder.units.push(newUnit);
    folder._open = true;
    save();
    selectUnit(folderId, newUnit.id);
}

function addWord(eng, cht) {
    const folder = folders.find(f => f.id === currentView.folderId);
    const unit   = folder?.units.find(u => u.id === currentView.unitId);
    if (!unit) return;
    const newWord = { id: "static-96", eng, cht };
    unit.words.push(newWord);
    save();
    renderMainContent();
}

// =====================================================
// FLASHCARD SWIPE MODE
// =====================================================

// =====================================================
// UNDO STATE
// =====================================================
let previousWordState = null;
let undoTimeout = null;

function showUndoToast(actionName) {
    const toast = document.getElementById('undo-toast');
    if (!toast) return;
    document.getElementById('undo-action-name').textContent = actionName;
    toast.classList.add('show');
    if (undoTimeout) clearTimeout(undoTimeout);
    undoTimeout = setTimeout(() => {
        toast.classList.remove('show');
        previousWordState = null;
    }, 4000);
}

function undoLastAction() {
    if (!previousWordState) return;
    
    // Find the word in vocabApp_v2
    let word = vocabApp_v2.words.find(w => w.id === previousWordState.id);
    if (word) {
        // Restore state
        word.mastery = previousWordState.mastery;
        word.streak = previousWordState.streak;
        word.correctCount = previousWordState.correctCount;
        word.wrongCount = previousWordState.wrongCount;
        word.lastWrongAt = previousWordState.lastWrongAt;
        word.lastReviewedAt = previousWordState.lastReviewedAt;
        word.nextReviewAt = previousWordState.nextReviewAt;
        
        save();
        
        // Hide toast
        const toast = document.getElementById('undo-toast');
        if (toast) toast.classList.remove('show');
        
        alert('已成功復原上一題的進度！');
        
        // Revert session stats
        if (fcSession) {
            fcSession.correctWordIds.delete(previousWordState.id);
            fcSession.wrongWordIds.delete(previousWordState.id);
            if (previousWordState.mastery === 3) {
                fcSession.newlyMasteredIds.delete(previousWordState.id);
            }
            // we don't revert answeredWordIds or masteryIncreasedWordIds to prevent abuse
        }
        
        // Refresh UI
        rebuildFoldersView();
        renderMainContent();
    }
}

let fcWords   = [];
let fcIndex   = 0;
let fcFlipped = false;
let fcSession = {
    id: null,
    startedAt: null,
    wordIds: [],
    answeredWordIds: new Set(),
    masteryIncreasedWordIds: new Set(),
    correctWordIds: new Set(),
    wrongWordIds: new Set(),
    newlyMasteredIds: new Set()
};

function getNextReviewDate(mastery) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    const daysToAdd = { 0: 0, 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }[Math.min(mastery || 0, 5)];
    d.setDate(d.getDate() + daysToAdd);
    return d.toISOString();
}

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
const fcSpeakBtn    = document.getElementById('fc-speak-btn');
const fcRememberBtn = document.getElementById('fc-remember-btn');
const fcForgetBtn   = document.getElementById('fc-forget-btn');
const fcExitBtn     = document.getElementById('fc-exit');

function openFlashcardMode(isReviewWrong = false) {
    if (!isReviewWrong) {
        // Collect words for current view
        if (currentView.type === 'today') {
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
            fcWords = candidates.slice(0, 20).map(c => c.word); // Max 20
        } else if (currentView.type === 'search') {
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
        } else if (currentView.type === 'wrong') {
            fcWords = [];
            folders.forEach(folder => {
                folder.units.forEach(unit => {
                    unit.words.forEach(w => {
                        if (w.wrongCount && w.wrongCount > 0) fcWords.push(w);
                    });
                });
            });
            fcWords.sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0));
        } else if (currentView.type === 'stats_review') {
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
            fcWords = candidates.slice(0, 40);
        } else if (currentView.type === 'unit') {
            const folder = folders.find(f => f.id === currentView.folderId);
            const unit   = folder?.units.find(u => u.id === currentView.unitId);
            fcWords = unit ? [...unit.words] : [];
        }
    } else {
        // If isReviewWrong is true, fcWords is already populated with the wrong words
    }

    if (fcWords.length === 0) { alert('沒有單字可以進行測驗！'); return; }

    fcSession = {
        id: 'session-' + Math.random().toString(36).substr(2, 9),
        startedAt: new Date().toISOString(),
        wordIds: fcWords.map(w => w.id),
        answeredWordIds: new Set(),
        masteryIncreasedWordIds: new Set(),
        correctWordIds: new Set(),
        wrongWordIds: new Set(),
        newlyMasteredIds: new Set()
    };
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
    const directionEl = document.getElementById('fc-direction-select');
    let direction = directionEl ? directionEl.value : 'random';
    if (direction === 'random') {
        direction = Math.random() > 0.5 ? 'en2ch' : 'ch2en';
    }
    word._currentDirection = direction;

    if (direction === 'en2ch') {
        fcEngEl.textContent   = word.eng;
        if (fcEngBack) fcEngBack.textContent = word.eng;
        fcChtEl.textContent   = word.cht;
    } else {
        fcEngEl.textContent   = word.cht;
        if (fcEngBack) fcEngBack.textContent = word.cht;
        fcChtEl.textContent   = word.eng;
    }
    
    fcCounter.textContent = `${fcIndex + 1} / ${fcWords.length}`;
    fcProgress.style.width = `${((fcIndex + 1) / fcWords.length) * 100}%`;

    // Reset flip to front side
    fcFlipped = false;
    fcCard.classList.remove('flipped');

    // Reset indicators
    fcIndLeft.style.opacity  = '0';
    fcIndRight.style.opacity = '0';

    // Auto-play pronunciation when showing English
    window.speechSynthesis.cancel();
    if (direction === 'en2ch') {
        setTimeout(() => speakWord(word.eng, null, fcSpeakBtn), 300);
    }
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
        <h2>本次完成 ${fcSession.answeredWordIds.size} 個</h2>
        <div class="session-stats">
           <div class="stat-item correct">✅ 記得 <span>${fcSession.correctWordIds.size}</span></div>
           <div class="stat-item wrong">❌ 忘記 <span>${fcSession.wrongWordIds.size}</span></div>
           <div class="stat-item mastered">🔥 新熟練 <span>${fcSession.newlyMasteredIds.size}</span></div>
        </div>
        <div class="session-actions">
           ${fcSession.wrongWordIds.size > 0 ? `<button class="fc-done-btn primary" id="fc-review-wrong">再練剛才答錯的 ${fcSession.wrongWordIds.size} 個</button>` : ''}
           <button class="fc-done-btn secondary" id="fc-go-home">返回首頁</button>
        </div>
    `;
    fcOverlay.appendChild(done);
    
    const reviewWrongBtn = document.getElementById('fc-review-wrong');
    if (reviewWrongBtn) {
        reviewWrongBtn.onclick = () => {
            done.remove();
            fcCard.parentElement.style.display = '';
            fcOverlay.querySelector('.fc-actions').style.display = '';
            // Filter fcWords to only those that were wrong
            fcWords = fcWords.filter(w => fcSession.wrongWordIds.has(w.id));
            openFlashcardMode(true); // true = isReviewWrong
        };
    }
    document.getElementById('fc-go-home').onclick = () => {
        closeFlashcardMode();
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
    
    // When flipping to the side that has English, play pronunciation
    const word = fcWords[fcIndex];
    if (word) {
        window.speechSynthesis.cancel();
        if ((word._currentDirection === 'en2ch' && !fcFlipped) || 
            (word._currentDirection === 'ch2en' && fcFlipped)) {
            speakWord(word.eng, null, fcSpeakBtn);
        }
    }
}

function fcRemember() {
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
        if (!fcSession.masteryIncreasedWordIds.has(word.id)) {
            word.mastery = Math.min(prevMastery + 1, 5);
            fcSession.masteryIncreasedWordIds.add(word.id);
            if (prevMastery === 3 && word.mastery === 4) {
                fcSession.newlyMasteredIds.add(word.id);
            }
        }
        fcSession.answeredWordIds.add(word.id);
        fcSession.correctWordIds.add(word.id);

        word.correctCount = (word.correctCount || 0) + 1;
        word.streak = (word.streak || 0) + 1;
        word.lastReviewedAt = new Date().toISOString();
        word.nextReviewAt = getNextReviewDate(word.mastery);
        save();
    }
    if (fcRememberBtn) fcRememberBtn.classList.add('active');
    setTimeout(() => {
        if (fcRememberBtn) fcRememberBtn.classList.remove('active');
        fcIndex++;
        showFcCard();
    }, 150);
}

function fcForget() {
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
        showUndoToast('忘記');

        word.mastery = Math.max((word.mastery || 0) - 1, 0);
        word.wrongCount = (word.wrongCount || 0) + 1;
        word.streak = 0;
        word.lastReviewedAt = new Date().toISOString();
        word.lastWrongAt = new Date().toISOString();
        
        let tomorrow = new Date();
        tomorrow.setHours(0, 0, 0, 0);
        tomorrow.setDate(tomorrow.getDate() + 1);
        word.nextReviewAt = tomorrow.toISOString();
        
        save();
    }
    if (fcForgetBtn) fcForgetBtn.classList.add('active');
    setTimeout(() => {
        if (fcForgetBtn) fcForgetBtn.classList.remove('active');
        fcIndex++;
        showFcCard();
    }, 150);
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
        // Swipe left → forget
        fcForget();
    } else if (currentDX > SWIPE_THRESHOLD) {
        // Swipe right → remember
        fcRemember();
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
if (fcRememberBtn) fcRememberBtn.addEventListener('click', () => fcRemember());
if (fcForgetBtn) fcForgetBtn.addEventListener('click', () => fcForget());
fcExitBtn.addEventListener('click', () => closeFlashcardMode());

// Keyboard
document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    // Flashcard Mode
    if (!fcOverlay.classList.contains('hidden')) {
        const isDoneScreen = fcOverlay.querySelector('.fc-done');
        if (isDoneScreen) {
            if (e.key === 'Escape') closeFlashcardMode();
            return;
        }
        
        if (e.key === 'Escape')     closeFlashcardMode();
        if (e.key === ' ')          { e.preventDefault(); fcFlipCard(); }
        if (e.key === 'ArrowRight') fcRemember();
        if (e.key === 'ArrowLeft')  fcForget();
        return;
    }

    // Confusion Quiz Mode
    if (typeof cqOverlay !== 'undefined' && !cqOverlay.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            cqOverlay.classList.add('hidden');
            if (typeof rebuildFoldersView === 'function') rebuildFoldersView();
            if (typeof renderMainContent === 'function') renderMainContent();
            return;
        }
        if (['1', '2', '3', '4'].includes(e.key)) {
            e.preventDefault();
            const index = parseInt(e.key) - 1;
            const buttons = cqOptions.querySelectorAll('button');
            if (buttons && buttons[index] && buttons[index].style.pointerEvents !== 'none') {
                buttons[index].click();
            }
        }
        return;
    }
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
// IMPORT METHODS
// =====================================================
let currentImportCandidates = [];

if (analyzeImportBtn) {
    analyzeImportBtn.addEventListener('click', () => {
        const text = importTextarea.value.trim();
        if (!text) return alert('請貼上筆記內容！');
        
        currentImportCandidates = [];
        let unrecognizedLines = [];
        
        const lines = text.split('\n');
        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            
            let isImportant = false;
            let isNotFamiliar = false;
            let isPhrase = false;
            let isConfusion = false;
            
            let content = line;
            if (content.startsWith('★')) { isImportant = true; content = content.substring(1).trim(); }
            else if (content.startsWith('?')) { isNotFamiliar = true; content = content.substring(1).trim(); }
            else if (content.startsWith('↔')) { isConfusion = true; content = content.substring(1).trim(); }
            else if (content.startsWith('P ')) { isPhrase = true; content = content.substring(2).trim(); }
            
            let match = content.match(/^([a-zA-Z0-9\s\-\']+)(?:\s*=\s*|\s+)([\u4e00-\u9fff].*)$/);
            
            if (match) {
                currentImportCandidates.push({
                    eng: match[1].trim(),
                    cht: match[2].trim(),
                    isImportant,
                    isNotFamiliar,
                    isPhrase,
                    isConfusion: false
                });
            } else if (isConfusion && content.includes('/')) {
                const parts = content.split('/').map(s => s.trim());
                const confusionGroup = parts.join('-');
                parts.forEach(part => {
                    currentImportCandidates.push({
                        eng: part,
                        cht: '易混淆字 (請補中文)',
                        isImportant,
                        isNotFamiliar,
                        isPhrase,
                        isConfusion: true,
                        confusionGroup
                    });
                });
            } else {
                unrecognizedLines.push(line);
            }
        }
        
        importPreviewList.innerHTML = '';
        importPreviewCount.textContent = currentImportCandidates.length;
        importPreviewContainer.classList.remove('hidden');
        
        if (currentImportCandidates.length === 0) {
            importPreviewList.innerHTML = '<div style="color:var(--text-secondary); text-align:center;">找不到可匯入的單字。</div>';
            confirmImportBtn.disabled = true;
        } else {
            confirmImportBtn.disabled = false;
            currentImportCandidates.forEach((cand, idx) => {
                const row = document.createElement('div');
                row.style.cssText = 'display: flex; align-items: center; gap: 12px; background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);';
                row.innerHTML = `
                    <input type="checkbox" id="import-cb-${idx}" checked style="width: 20px; height: 20px; cursor: pointer;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-size: 1.1rem; color: var(--accent-color);">${cand.eng} ${cand.isImportant ? '<span style="font-size:0.8rem; color:var(--star-color);">★</span>' : ''} ${cand.isNotFamiliar ? '<span style="font-size:0.8rem; color:var(--danger-color);">?</span>' : ''}</div>
                        <div style="font-size: 0.9rem; color: var(--text-secondary);">${cand.cht}</div>
                    </div>
                `;
                importPreviewList.appendChild(row);
            });
        }
        
        if (unrecognizedLines.length > 0) {
            importUnrecognizedContainer.classList.remove('hidden');
            importUnrecognizedText.textContent = unrecognizedLines.join('\n');
        } else {
            importUnrecognizedContainer.classList.add('hidden');
        }
    });
}

if (confirmImportBtn) {
    confirmImportBtn.addEventListener('click', () => {
        const val = importFolderSelect.value;
        if (!val) return alert('請先選擇要匯入的目標資料夾與回數！');
        
        const [targetFolderId, targetUnitId] = val.split('|');
        const folder = folders.find(f => f.id === targetFolderId);
        const unit = folder?.units.find(u => u.id === targetUnitId);
        if (!unit) return alert('找不到目標回數');
        
        const unitName = unit.name;
        
        let addedCount = 0;
        let mergedCount = 0;
        
        currentImportCandidates.forEach((cand, idx) => {
            const cb = document.getElementById(`import-cb-${idx}`);
            if (cb && cb.checked) {
                // Find existing word globally in vocabApp_v2.words
                let existingWord = vocabApp_v2.words.find(w => w.normalizedWord === cand.eng.toLowerCase().trim());
                
                if (existingWord) {
                    if (cand.cht && existingWord.meaning !== cand.cht && !existingWord.meaning.includes(cand.cht)) {
                        if (!existingWord.notes) existingWord.notes = [];
                        if (!existingWord.notes.includes(`新解釋: ${cand.cht}`)) {
                            existingWord.notes.push(`新解釋: ${cand.cht}`);
                        }
                    }
                    if (cand.isImportant) {
                        existingWord.priority = 'high';
                        if (!starredIds.includes(existingWord.id)) starredIds.push(existingWord.id);
                    }
                    if (cand.isNotFamiliar) {
                        existingWord.mastery = 0;
                        existingWord.streak = 0;
                        existingWord.lastReviewedAt = new Date().toISOString();
                        existingWord.lastWrongAt = new Date().toISOString();
                        
                        let tomorrow = new Date();
                        tomorrow.setHours(0, 0, 0, 0);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        existingWord.nextReviewAt = tomorrow.toISOString();
                    }
                    if (cand.confusionGroup) {
                        existingWord.confusionGroup = cand.confusionGroup;
                    }
                    // Tag it to the new unit if not already there
                    if (existingWord.category !== targetFolderId) {
                        // Word already exists in another category. Just append tag.
                        if (!existingWord.tags) existingWord.tags = [];
                        if (!existingWord.tags.includes(unitName)) {
                            existingWord.tags.push(unitName);
                        }
                    } else {
                        if (!existingWord.tags) existingWord.tags = [];
                        if (!existingWord.tags.includes(unitName)) {
                            existingWord.tags.push(unitName);
                        }
                    }
                    
                    existingWord.sourceCount = (existingWord.sourceCount || 1) + 1;
                    mergedCount++;
                } else {
                    const newId = 'v2-' + Math.random().toString(36).substr(2, 9);
                    const newWord = {
                        id: newId,
                        word: cand.eng,
                        normalizedWord: cand.eng.toLowerCase().trim(),
                        type: cand.isPhrase ? "phrase" : "word",
                        meaning: cand.cht,
                        alternativeMeanings: [],
                        category: targetFolderId,
                        tags: [unitName],
                        mastery: 0,
                        correctCount: 0,
                        wrongCount: cand.isNotFamiliar ? 1 : 0,
                        streak: 0,
                        lastReviewedAt: null,
                        lastWrongAt: null,
                        nextReviewAt: null,
                        priority: cand.isImportant ? 'high' : 'normal',
                        ignored: false,
                        confusionGroup: cand.confusionGroup || null,
                        notes: [],
                        examples: [],
                        encounters: [],
                        sourceCount: 1,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    };
                    vocabApp_v2.words.push(newWord);
                    if (cand.isImportant) {
                        starredIds.push(newId);
                    }
                    addedCount++;
                }
            }
        });
        
        save();
        rebuildFoldersView();
        renderSidebar();
        renderMainContent();
        
        alert(`匯入完成！新增 ${addedCount} 個單字，合併 ${mergedCount} 個既有單字。`);
        // Navigate to the unit where words were imported
        currentView = { type: 'unit', folderId: targetFolderId, unitId: targetUnitId };
        
        // Hide import UI
        importPreviewContainer.classList.add('hidden');
        importTextarea.value = '';
        renderMainContent();
    });
}

if (importSelectAllBtn) {
    importSelectAllBtn.addEventListener('click', () => {
        importPreviewList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
    });
}
if (importDeselectAllBtn) {
    importDeselectAllBtn.addEventListener('click', () => {
        importPreviewList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    });
}

// =====================================================
// CONFUSION QUIZ METHODS
// =====================================================
let cqQuestions = [];
let cqIndex = 0;

if (startConfusionBtn) {
    startConfusionBtn.addEventListener('click', () => {
        let cGroups = {};
        folders.forEach(folder => {
            folder.units.forEach(unit => {
                unit.words.forEach(w => {
                    if (w.confusionGroup) {
                        if (!cGroups[w.confusionGroup]) cGroups[w.confusionGroup] = [];
                        if (!cGroups[w.confusionGroup].find(e => e.eng === w.eng)) {
                            cGroups[w.confusionGroup].push(w);
                        }
                    }
                });
            });
        });
        
        cqQuestions = [];
        let allWords = [];
        folders.forEach(folder => {
            folder.units.forEach(unit => {
                allWords.push(...unit.words);
            });
        });

        Object.keys(cGroups).forEach(gKey => {
            const groupWords = cGroups[gKey];
            if (groupWords.length < 2) return;
            groupWords.forEach(correctWord => {
                const options = [...groupWords];
                // Pad to exactly 4 options
                let attempts = 0;
                while (options.length < 4 && attempts < 100) {
                    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
                    if (!options.find(o => o.id === randomWord.id)) {
                        options.push(randomWord);
                    }
                    attempts++;
                }
                // If there are somehow more than 4 (e.g. group has 5), slice it (keep correct one)
                if (options.length > 4) {
                    const others = options.filter(o => o.id !== correctWord.id).sort(() => Math.random() - 0.5);
                    const selected = others.slice(0, 3);
                    selected.push(correctWord);
                    options.splice(0, options.length, ...selected);
                }
                
                options.sort(() => Math.random() - 0.5);
                cqQuestions.push({ correctWord, options });
            });
        });
        
        cqQuestions.sort(() => Math.random() - 0.5);
        
        if (cqQuestions.length === 0) {
            return alert('找不到足夠的易混淆群組。請先新增至少兩筆帶有相同易混淆群組標籤(↔)的單字。');
        }
        
        cqIndex = 0;
        cqOverlay.classList.remove('hidden');
        renderCqQuestion();
    });
}

function renderCqQuestion() {
    if (cqIndex >= cqQuestions.length) {
        cqOverlay.classList.add('hidden');
        alert('🎉 挑戰完成！');
        return;
    }
    const q = cqQuestions[cqIndex];
    cqCounter.textContent = `${cqIndex + 1} / ${cqQuestions.length}`;
    cqProgress.style.width = `${((cqIndex + 1) / cqQuestions.length) * 100}%`;
    
    cqQuestion.textContent = q.correctWord.cht;
    
    cqOptions.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.cssText = 'width: 100%; text-align: left; padding: 16px; font-size: 1.2rem; display: flex; justify-content: space-between; align-items: center; border-radius: 8px; border: 1px solid var(--border-color); cursor: pointer;';
        btn.innerHTML = `<span>${opt.eng}</span> <span class="material-symbols-outlined" style="opacity:0;">check_circle</span>`;
        
        btn.onclick = () => {
            const isCorrect = opt.eng === q.correctWord.eng;
            const icon = btn.querySelector('.material-symbols-outlined');
            icon.style.opacity = '1';
            
            // disable all options
            Array.from(cqOptions.children).forEach(c => c.style.pointerEvents = 'none');
            
            if (isCorrect) {
                btn.style.background = 'rgba(16, 185, 129, 0.2)';
                btn.style.borderColor = 'var(--success-color)';
                icon.textContent = 'check_circle';
                icon.style.color = 'var(--success-color)';
                
                q.correctWord.mastery = Math.min((q.correctWord.mastery || 0) + 1, 5);
                q.correctWord.correctCount = (q.correctWord.correctCount || 0) + 1;
                save();
                
                setTimeout(() => {
                    cqIndex++;
                    renderCqQuestion();
                }, 800);
            } else {
                btn.style.background = 'rgba(239, 68, 68, 0.2)';
                btn.style.borderColor = 'var(--danger-color)';
                icon.textContent = 'cancel';
                icon.style.color = 'var(--danger-color)';
                
                q.correctWord.mastery = Math.max((q.correctWord.mastery || 0) - 1, 0);
                q.correctWord.wrongCount = (q.correctWord.wrongCount || 0) + 1;
                save();
                
                Array.from(cqOptions.children).forEach(child => {
                    if (child.textContent.includes(q.correctWord.eng)) {
                        child.style.borderColor = 'var(--success-color)';
                        child.style.background = 'rgba(16, 185, 129, 0.1)';
                        child.querySelector('.material-symbols-outlined').textContent = 'check_circle';
                        child.querySelector('.material-symbols-outlined').style.opacity = '1';
                        child.querySelector('.material-symbols-outlined').style.color = 'var(--success-color)';
                    }
                });
                
                setTimeout(() => {
                    cqIndex++;
                    renderCqQuestion();
                }, 2000);
            }
        };
        cqOptions.appendChild(btn);
    });
}

if (cqExitBtn) {
    cqExitBtn.addEventListener('click', () => {
        cqOverlay.classList.add('hidden');
    });
}

if (startTodayBtn) {
    startTodayBtn.addEventListener('click', () => {
        currentView = { type: 'today', folderId: null, unitId: null };
        openFlashcardMode();
    });
}

// =====================================================
// DATA BACKUP & RESTORE METHODS
// =====================================================
const backupModalEl      = document.getElementById('backup-modal-overlay');
const importJsonFileEl   = document.getElementById('import-json-file');
const exportSuccessMsgEl = document.getElementById('export-success-msg');

function openBackupModal() {
    closeMobileSidebar();
    if (importJsonFileEl) importJsonFileEl.value = '';
    if (exportSuccessMsgEl) exportSuccessMsgEl.style.display = 'none';
    if (backupModalEl) backupModalEl.classList.remove('hidden');
}

function closeBackupModal() {
    if (backupModalEl) backupModalEl.classList.add('hidden');
}

function exportJSONBackup() {
    try {
        const backupObj = {
            schemaVersion: vocabApp_v2.schemaVersion,
            words: vocabApp_v2.words,
            settings: vocabApp_v2.settings,
            metadata: {
                ...vocabApp_v2.metadata,
                lastExportedAt: new Date().toISOString()
            }
        };
        
        const jsonString = JSON.stringify(backupObj, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `vocab_backup_v2_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        if (exportSuccessMsgEl) {
            exportSuccessMsgEl.style.display = 'block';
            setTimeout(() => exportSuccessMsgEl.style.display = 'none', 3000);
        }
        
        vocabApp_v2.metadata.lastExportedAt = new Date().toISOString();
        save();
    } catch (e) {
        alert('匯出失敗：' + e.message);
    }
}

function importJSONBackup(mode) {
    const fileInput = document.getElementById('import-json-file');
    const file = fileInput.files[0];
    if (!file) {
        alert('請先選擇要匯入的 JSON 檔案！');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Allow importing V2 schema format
            if (importedData.schemaVersion === 2 && importedData.words) {
                if (mode === 'overwrite') {
                    if (!confirm('您選擇了「完全覆蓋」，這將會清除您目前所有的單字與進度，並替換為備份檔的內容。確定要繼續嗎？')) return;
                    vocabApp_v2.words = importedData.words;
                    vocabApp_v2.settings = importedData.settings || {};
                } else if (mode === 'merge') {
                    // Merge logic: find by id or normalizedWord
                    let currentWords = vocabApp_v2.words;
                    importedData.words.forEach(importedWord => {
                        let existingWord = currentWords.find(w => w.id === importedWord.id || w.normalizedWord === importedWord.normalizedWord);
                        if (!existingWord) {
                            currentWords.push(importedWord);
                        } else {
                            // Merge progress (keep highest mastery)
                            existingWord.mastery = Math.max(existingWord.mastery || 0, importedWord.mastery || 0);
                            existingWord.correctCount = (existingWord.correctCount || 0) + (importedWord.correctCount || 0);
                            existingWord.wrongCount = (existingWord.wrongCount || 0) + (importedWord.wrongCount || 0);
                        }
                    });
                }
            } else if (importedData.folders && importedData.version === 'V2') {
                // Backward compatibility for old V1/V2 folders format
                if (mode === 'overwrite') {
                    if (!confirm('您選擇了「完全覆蓋」，這將會清除目前所有的單字與進度！確定要繼續嗎？')) return;
                    // Reset words
                    vocabApp_v2.words = [];
                    importedData.folders.forEach(folder => {
                        folder.units.forEach(unit => {
                            unit.words.forEach(word => {
                                let v2Word = {
                                    id: word.id || 'v2-' + Math.random().toString(36).substr(2, 9),
                                    word: word.eng,
                                    normalizedWord: (word.eng || "").trim().toLowerCase(),
                                    type: "word",
                                    meaning: word.cht,
                                    alternativeMeanings: [],
                                    category: folder.id,
                                    tags: [unit.name],
                                    mastery: word.mastery || 0,
                                    streak: word.streak || 0,
                                    correctCount: word.correctCount || 0,
                                    wrongCount: word.wrongCount || 0,
                                    lastReviewedAt: word.lastReviewedAt || null,
                                    lastWrongAt: word.lastWrongAt || null,
                                    nextReviewAt: word.nextReviewAt || null,
                                    priority: word.priority || "normal",
                                    ignored: false,
                                    confusionGroup: word.confusionGroup || null,
                                    notes: word.notes || [],
                                    examples: word.examples || [],
                                    encounters: [],
                                    sourceCount: word.sourceCount || 1,
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                };
                                vocabApp_v2.words.push(v2Word);
                            });
                        });
                    });
                } else if (mode === 'merge') {
                    alert('舊版備份檔的合併功能已停用，請使用「完全覆蓋」或升級備份檔格式。');
                    return;
                }
            } else {
                alert('備份檔案格式不正確或已損毀。');
                return;
            }
            
            save();
            rebuildFoldersView();
            renderSidebar();
            renderMainContent();
            closeBackupModal();
            alert('資料匯入成功！');
            
        } catch (err) {
            alert('解析 JSON 檔案失敗，檔案可能損毀：' + err.message);
        }
    };
    reader.readAsText(file);
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

renderSidebar();
renderMainContent();


