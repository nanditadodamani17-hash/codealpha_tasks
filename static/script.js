/* =========================================================
   LINGUAAI — SMART LANGUAGE TRANSLATOR
   Complete script.js
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const inputText =
    document.getElementById("inputText");

const outputText =
    document.getElementById("outputText");

const sourceLanguage =
    document.getElementById("sourceLanguage");

const targetLanguage =
    document.getElementById("targetLanguage");

const translateButton =
    document.getElementById("translateButton");

const copyButton =
    document.getElementById("copyButton");

const speakButton =
    document.getElementById("speakButton");

const clearButton =
    document.getElementById("clearButton");

const voiceInputButton =
    document.getElementById("voiceInputButton");

const readInputButton =
    document.getElementById("readInputButton");

const swapButton =
    document.getElementById("swapButton");

const charCount =
    document.getElementById("charCount");

const loading =
    document.getElementById("loading");

const message =
    document.getElementById("message");

const historySection =
    document.getElementById("historySection");

const historyList =
    document.getElementById("historyList");

const emptyHistory =
    document.getElementById("emptyHistory");

const historySearch =
    document.getElementById("historySearch");

const clearHistoryButton =
    document.getElementById("clearHistoryButton");

const historyBadge =
    document.getElementById("historyBadge");

const historySidebarBtn =
    document.getElementById("historySidebarBtn");

const topHistoryButton =
    document.getElementById("topHistoryButton");

const translatorSidebarBtn =
    document.getElementById("translatorSidebarBtn");

const translationStatus =
    document.getElementById("translationStatus");

const keyboardToggle =
    document.getElementById("keyboardToggle");

const virtualKeyboard =
    document.getElementById("virtualKeyboard");

const closeKeyboard =
    document.getElementById("closeKeyboard");

const keyboardKeys =
    document.getElementById("keyboardKeys");

const keyboardTitle =
    document.getElementById("keyboardTitle");

const keyboardSubtitle =
    document.getElementById("keyboardSubtitle");

const keyboardModeInfo =
    document.getElementById("keyboardModeInfo");

const inputLanguageTitle =
    document.getElementById("inputLanguageTitle");

const inputLanguageDescription =
    document.getElementById(
        "inputLanguageDescription"
    );

const keyboardClearButton =
    document.getElementById(
        "keyboardClearButton"
    );

const keyboardSpaceButton =
    document.getElementById(
        "keyboardSpaceButton"
    );

const keyboardBackspaceButton =
    document.getElementById(
        "keyboardBackspaceButton"
    );


/* =========================================================
   LANGUAGE NAMES
========================================================= */

const languageNames = {

    en: "English",

    hi: "Hindi",

    kn: "Kannada",

    te: "Telugu",

    ta: "Tamil",

    ml: "Malayalam",

    mr: "Marathi",

    fr: "French",

    de: "German",

    es: "Spanish",

    it: "Italian",

    pt: "Portuguese",

    ja: "Japanese",

    ko: "Korean",

    zh: "Chinese"

};

const inputPlaceholders = {

    en: "Type here...",

    hi: "यहाँ टाइप करें...",

    kn: "ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",

    te: "ఇక్కడ టైప్ చేయండి...",

    ta: "இங்கே தட்டச்சு செய்யவும்...",

    ml: "ഇവിടെ ടൈപ്പ് ചെയ്യുക...",

    mr: "येथे टाइप करा...",

    fr: "Tapez ici...",

    de: "Hier eingeben...",

    es: "Escribe aquí...",

    it: "Digita qui...",

    pt: "Digite aqui...",

    ja: "ここに入力してください...",

    ko: "여기에 입력하세요...",

    zh: "在这里输入..."

};


/* =========================================================
   KEYBOARD DATA
========================================================= */

/*
   type:

   vowel
   consonant
   matra
   special
   punctuation
*/


const keyboards = {


    /* =====================================================
       ENGLISH
    ====================================================== */

    en: [

        {
            type: "letters",
            chars: [..."QWERTYUIOP"]
        },

        {
            type: "letters",
            chars: [..."ASDFGHJKL"]
        },

        {
            type: "letters",
            chars: [..."ZXCVBNM"]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-",
                "(",
                ")"
            ]
        }

    ],


    /* =====================================================
       HINDI
    ====================================================== */

    hi: [

        {
            type: "vowel",
            chars: [
                "अ",
                "आ",
                "इ",
                "ई",
                "उ",
                "ऊ",
                "ऋ",
                "ए",
                "ऐ",
                "ओ",
                "औ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "क",
                "ख",
                "ग",
                "घ",
                "ङ",
                "च",
                "छ",
                "ज",
                "झ",
                "ञ",
                "ट",
                "ठ",
                "ड",
                "ढ",
                "ण"
            ]
        },

        {
            type: "consonant",
            chars: [
                "त",
                "थ",
                "द",
                "ध",
                "न",
                "प",
                "फ",
                "ब",
                "भ",
                "म",
                "य",
                "र",
                "ल",
                "व"
            ]
        },

        {
            type: "consonant",
            chars: [
                "श",
                "ष",
                "स",
                "ह",
                "क्ष",
                "त्र",
                "ज्ञ"
            ]
        },

        {
            type: "matra",
            chars: [
                "ा",
                "ि",
                "ी",
                "ु",
                "ू",
                "ृ",
                "े",
                "ै",
                "ो",
                "ौ"
            ]
        },

        {
            type: "special",
            chars: [
                "ं",
                "ँ",
                "ः",
                "्",
                "़",
                "।"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       MARATHI
    ====================================================== */

    mr: [

        {
            type: "vowel",
            chars: [
                "अ",
                "आ",
                "इ",
                "ई",
                "उ",
                "ऊ",
                "ऋ",
                "ए",
                "ऐ",
                "ओ",
                "औ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "क",
                "ख",
                "ग",
                "घ",
                "ङ",
                "च",
                "छ",
                "ज",
                "झ",
                "ञ",
                "ट",
                "ठ",
                "ड",
                "ढ",
                "ण"
            ]
        },

        {
            type: "consonant",
            chars: [
                "त",
                "थ",
                "द",
                "ध",
                "न",
                "प",
                "फ",
                "ब",
                "भ",
                "म",
                "य",
                "र",
                "ल",
                "व"
            ]
        },

        {
            type: "consonant",
            chars: [
                "श",
                "ष",
                "स",
                "ह",
                "ळ",
                "क्ष",
                "ज्ञ"
            ]
        },

        {
            type: "matra",
            chars: [
                "ा",
                "ि",
                "ी",
                "ु",
                "ू",
                "ृ",
                "े",
                "ै",
                "ो",
                "ौ"
            ]
        },

        {
            type: "special",
            chars: [
                "ं",
                "ँ",
                "ः",
                "्",
                "़",
                "।"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       KANNADA
    ====================================================== */

    kn: [

        {
            type: "vowel",
            chars: [
                "ಅ",
                "ಆ",
                "ಇ",
                "ಈ",
                "ಉ",
                "ಊ",
                "ಋ",
                "ಎ",
                "ಏ",
                "ಐ",
                "ಒ",
                "ಓ",
                "ಔ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ಕ",
                "ಖ",
                "ಗ",
                "ಘ",
                "ಙ",
                "ಚ",
                "ಛ",
                "ಜ",
                "ಝ",
                "ಞ",
                "ಟ",
                "ಠ",
                "ಡ",
                "ಢ",
                "ಣ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ತ",
                "ಥ",
                "ದ",
                "ಧ",
                "ನ",
                "ಪ",
                "ಫ",
                "ಬ",
                "ಭ",
                "ಮ",
                "ಯ",
                "ರ",
                "ಲ",
                "ವ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ಶ",
                "ಷ",
                "ಸ",
                "ಹ",
                "ಳ",
                "ಕ್ಷ",
                "ಜ್ಞ"
            ]
        },

        {
            type: "matra",
            chars: [
                "ಾ",
                "ಿ",
                "ೀ",
                "ು",
                "ೂ",
                "ೃ",
                "ೆ",
                "ೇ",
                "ೈ",
                "ೊ",
                "ೋ",
                "ೌ"
            ]
        },

        {
            type: "special",
            chars: [
                "ಂ",
                "ಃ",
                "್",
                "಼",
                "।"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       TELUGU
    ====================================================== */

    te: [

        {
            type: "vowel",
            chars: [
                "అ",
                "ఆ",
                "ఇ",
                "ఈ",
                "ఉ",
                "ఊ",
                "ఋ",
                "ఎ",
                "ఏ",
                "ఐ",
                "ఒ",
                "ఓ",
                "ఔ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "క",
                "ఖ",
                "గ",
                "ఘ",
                "ఙ",
                "చ",
                "ఛ",
                "జ",
                "ఝ",
                "ఞ",
                "ట",
                "ఠ",
                "డ",
                "ఢ",
                "ణ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "త",
                "థ",
                "ద",
                "ధ",
                "న",
                "ప",
                "ఫ",
                "బ",
                "భ",
                "మ",
                "య",
                "ర",
                "ల",
                "వ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "శ",
                "ష",
                "స",
                "హ",
                "ళ",
                "క్ష",
                "జ్ఞ"
            ]
        },

        {
            type: "matra",
            chars: [
                "ా",
                "ి",
                "ీ",
                "ు",
                "ూ",
                "ృ",
                "ె",
                "ే",
                "ై",
                "ొ",
                "ో",
                "ౌ"
            ]
        },

        {
            type: "special",
            chars: [
                "ం",
                "ః",
                "్",
                "।"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       TAMIL
    ====================================================== */

    ta: [

        {
            type: "vowel",
            chars: [
                "அ",
                "ஆ",
                "இ",
                "ஈ",
                "உ",
                "ஊ",
                "எ",
                "ஏ",
                "ஐ",
                "ஒ",
                "ஓ",
                "ஔ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "க",
                "ங",
                "ச",
                "ஞ",
                "ட",
                "ண",
                "த",
                "ந",
                "ப",
                "ம",
                "ய",
                "ர",
                "ல",
                "வ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ழ",
                "ள",
                "ற",
                "ன",
                "ஜ",
                "ஷ",
                "ஸ",
                "ஹ"
            ]
        },

        {
            type: "matra",
            chars: [
                "ா",
                "ி",
                "ீ",
                "ு",
                "ூ",
                "ெ",
                "ே",
                "ை",
                "ொ",
                "ோ",
                "ௌ"
            ]
        },

        {
            type: "special",
            chars: [
                "்",
                "ஂ",
                "ஃ",
                "।"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       MALAYALAM
    ====================================================== */

    ml: [

        {
            type: "vowel",
            chars: [
                "അ",
                "ആ",
                "ഇ",
                "ഈ",
                "ഉ",
                "ഊ",
                "ഋ",
                "എ",
                "ഏ",
                "ഐ",
                "ഒ",
                "ഓ",
                "ഔ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ക",
                "ഖ",
                "ഗ",
                "ഘ",
                "ങ",
                "ച",
                "ഛ",
                "ജ",
                "ഝ",
                "ഞ",
                "ട",
                "ഠ",
                "ഡ",
                "ഢ",
                "ണ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ത",
                "ഥ",
                "ദ",
                "ധ",
                "ന",
                "പ",
                "ഫ",
                "ബ",
                "ഭ",
                "മ",
                "യ",
                "ര",
                "ല",
                "വ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "ശ",
                "ഷ",
                "സ",
                "ഹ",
                "ള",
                "ഴ",
                "റ",
                "ക്ഷ"
            ]
        },

        {
            type: "matra",
            chars: [
                "ാ",
                "ി",
                "ീ",
                "ു",
                "ൂ",
                "ൃ",
                "െ",
                "േ",
                "ൈ",
                "ൊ",
                "ോ",
                "ൌ"
            ]
        },

        {
            type: "special",
            chars: [
                "ം",
                "ഃ",
                "്",
                "ൺ",
                "ൻ",
                "ർ",
                "ൽ",
                "ൾ",
                "ൿ",
                "।"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       FRENCH
    ====================================================== */

    fr: [

        {
            type: "letters",
            chars: [..."AZERTYUIOP"]
        },

        {
            type: "letters",
            chars: [..."QSDFGHJKLM"]
        },

        {
            type: "letters",
            chars: [..."WXCVBN"]
        },

        {
            type: "special",
            chars: [
                "é",
                "è",
                "ê",
                "ë",
                "à",
                "â",
                "ä",
                "ç",
                "ù",
                "û",
                "ü",
                "ô",
                "î",
                "ï",
                "œ"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       GERMAN
    ====================================================== */

    de: [

        {
            type: "letters",
            chars: [..."QWERTZUIOP"]
        },

        {
            type: "letters",
            chars: [..."ASDFGHJKL"]
        },

        {
            type: "letters",
            chars: [..."YXCVBNM"]
        },

        {
            type: "special",
            chars: [
                "ä",
                "ö",
                "ü",
                "Ä",
                "Ö",
                "Ü",
                "ß"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       SPANISH
    ====================================================== */

    es: [

        {
            type: "letters",
            chars: [..."QWERTYUIOP"]
        },

        {
            type: "letters",
            chars: [..."ASDFGHJKLÑ"]
        },

        {
            type: "letters",
            chars: [..."ZXCVBNM"]
        },

        {
            type: "special",
            chars: [
                "á",
                "é",
                "í",
                "ó",
                "ú",
                "ü",
                "ñ",
                "¿",
                "¡"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       ITALIAN
    ====================================================== */

    it: [

        {
            type: "letters",
            chars: [..."QWERTYUIOP"]
        },

        {
            type: "letters",
            chars: [..."ASDFGHJKL"]
        },

        {
            type: "letters",
            chars: [..."ZXCVBNM"]
        },

        {
            type: "special",
            chars: [
                "à",
                "è",
                "é",
                "ì",
                "ò",
                "ù"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       PORTUGUESE
    ====================================================== */

    pt: [

        {
            type: "letters",
            chars: [..."QWERTYUIOP"]
        },

        {
            type: "letters",
            chars: [..."ASDFGHJKL"]
        },

        {
            type: "letters",
            chars: [..."ZXCVBNM"]
        },

        {
            type: "special",
            chars: [
                "ã",
                "õ",
                "á",
                "à",
                "â",
                "ä",
                "ê",
                "é",
                "í",
                "ó",
                "ô",
                "ú",
                "ç"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                "'",
                "\"",
                ":",
                ";",
                "-"
            ]
        }

    ],


    /* =====================================================
       JAPANESE
    ====================================================== */

    ja: [

        {
            type: "vowel",
            chars: [
                "あ",
                "い",
                "う",
                "え",
                "お"
            ]
        },

        {
            type: "consonant",
            chars: [
                "か",
                "き",
                "く",
                "け",
                "こ",
                "さ",
                "し",
                "す",
                "せ",
                "そ"
            ]
        },

        {
            type: "consonant",
            chars: [
                "た",
                "ち",
                "つ",
                "て",
                "と",
                "な",
                "に",
                "ぬ",
                "ね",
                "の"
            ]
        },

        {
            type: "consonant",
            chars: [
                "は",
                "ひ",
                "ふ",
                "へ",
                "ほ",
                "ま",
                "み",
                "む",
                "め",
                "も"
            ]
        },

        {
            type: "consonant",
            chars: [
                "や",
                "ゆ",
                "よ",
                "ら",
                "り",
                "る",
                "れ",
                "ろ",
                "わ",
                "を",
                "ん"
            ]
        },

        {
            type: "special",
            chars: [
                "が",
                "ぎ",
                "ぐ",
                "げ",
                "ご",
                "ざ",
                "じ",
                "ず",
                "ぜ",
                "ぞ",
                "だ",
                "ぢ",
                "づ",
                "で",
                "ど",
                "ば",
                "び",
                "ぶ",
                "べ",
                "ぼ",
                "ぱ",
                "ぴ",
                "ぷ",
                "ぺ",
                "ぽ"
            ]
        },

        {
            type: "punctuation",
            chars: [
                "、",
                "。",
                "？",
                "！",
                "「",
                "」",
                "・"
            ]
        }

    ],


    /* =====================================================
       KOREAN
    ====================================================== */

    ko: [

        {
            type: "consonant",
            chars: [
                "ㄱ",
                "ㄴ",
                "ㄷ",
                "ㄹ",
                "ㅁ",
                "ㅂ",
                "ㅅ",
                "ㅇ",
                "ㅈ",
                "ㅊ",
                "ㅋ",
                "ㅌ",
                "ㅍ",
                "ㅎ"
            ]
        },

        {
            type: "vowel",
            chars: [
                "ㅏ",
                "ㅑ",
                "ㅓ",
                "ㅕ",
                "ㅗ",
                "ㅛ",
                "ㅜ",
                "ㅠ",
                "ㅡ",
                "ㅣ"
            ]
        },

        {
            type: "special",
            chars: [
                "ㄲ",
                "ㄸ",
                "ㅃ",
                "ㅆ",
                "ㅉ"
            ]
        },

        {
            type: "special",
            chars: [
                "ㅐ",
                "ㅔ",
                "ㅚ",
                "ㅟ",
                "ㅢ",
                "ㅘ",
                "ㅙ",
                "ㅝ",
                "ㅞ"
            ]
        },

        {
            type: "punctuation",
            chars: [
                ".",
                ",",
                "?",
                "!",
                ":",
                ";"
            ]
        }

    ],


    /* =====================================================
       CHINESE
    ====================================================== */

    zh: [

        {
            type: "special",
            chars: [
                "你",
                "好",
                "我",
                "是",
                "的",
                "人",
                "中",
                "国",
                "天",
                "地"
            ]
        },

        {
            type: "special",
            chars: [
                "学",
                "生",
                "爱",
                "家",
                "大",
                "小",
                "上",
                "下",
                "来",
                "去"
            ]
        },

        {
            type: "special",
            chars: [
                "吃",
                "喝",
                "看",
                "说",
                "谢",
                "再",
                "见",
                "好",
                "吗",
                "很"
            ]
        },

        {
            type: "special",
            chars: [
                "语",
                "言",
                "文",
                "字",
                "中",
                "文",
                "英",
                "日",
                "韩",
                "印"
            ]
        },

        {
            type: "punctuation",
            chars: [
                "，",
                "。",
                "？",
                "！",
                "：",
                "；",
                "「",
                "」"
            ]
        }

    ]

};


/* =========================================================
   KEYBOARD INFORMATION
========================================================= */

const keyboardDescriptions = {

    en:
        "English keyboard with letters and punctuation.",

    hi:
        "Hindi keyboard with vowels, consonants, matras, halant and Devanagari special characters.",

    mr:
        "Marathi keyboard with Devanagari vowels, consonants, matras, halant and special characters.",

    kn:
        "Kannada keyboard with vowels, consonants, vowel signs, virama and Kannada symbols.",

    te:
        "Telugu keyboard with vowels, consonants, vowel signs, virama and Telugu symbols.",

    ta:
        "Tamil keyboard with vowels, consonants, vowel signs and pulli.",

    ml:
        "Malayalam keyboard with vowels, consonants, vowel signs, chandrakkala and Malayalam symbols.",

    fr:
        "French keyboard with accented characters.",

    de:
        "German keyboard with Ä, Ö, Ü and ß.",

    es:
        "Spanish keyboard with Ñ, accents, ¿ and ¡.",

    it:
        "Italian keyboard with accented characters.",

    pt:
        "Portuguese keyboard with accented characters.",

    ja:
        "Japanese Hiragana keyboard with voiced characters and punctuation.",

    ko:
        "Korean Hangul jamo keyboard.",

    zh:
        "Chinese common-character keyboard with Chinese punctuation."

};


/* =========================================================
   CREATE KEYBOARD
========================================================= */

function createKeyboard(language) {

    keyboardKeys.innerHTML = "";

    const groups =
        keyboards[language];


    if (!groups) {

        keyboardModeInfo.textContent =
            "This language can be typed using your physical keyboard or pasted directly.";

        return;
    }


    keyboardModeInfo.textContent =
        keyboardDescriptions[language]
        || "Select characters to insert them.";


    groups.forEach(group => {

        group.chars.forEach(character => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                "keyboard-key";


            if (group.type === "vowel") {

                button.classList.add(
                    "keyboard-vowel"
                );

            }

            else if (group.type === "consonant") {

                button.classList.add(
                    "keyboard-consonant"
                );

            }

            else if (group.type === "matra") {

                button.classList.add(
                    "keyboard-matra"
                );

            }

            else if (group.type === "special") {

                button.classList.add(
                    "keyboard-special"
                );

            }

            else if (group.type === "punctuation") {

                button.classList.add(
                    "keyboard-punctuation"
                );

            }


            button.textContent =
                character;

            button.title =
                `Insert ${character}`;


            button.addEventListener(
                "click",
                () => {

                    insertKeyboardText(
                        character
                    );

                }
            );


            keyboardKeys.appendChild(
                button
            );

        });

    });

}


/* =========================================================
   INSERT TEXT
========================================================= */

function insertKeyboardText(text) {

    const start =
        inputText.selectionStart;

    const end =
        inputText.selectionEnd;

    const value =
        inputText.value;


    const newValue =
        value.substring(0, start)
        +
        text
        +
        value.substring(end);


    


    inputText.value =
        newValue;


    const newPosition =
        start + text.length;


    inputText.selectionStart =
        newPosition;

    inputText.selectionEnd =
        newPosition;


    updateCharacterCount();

    inputText.focus();

}


/* =========================================================
   BACKSPACE
========================================================= */

function keyboardBackspace() {

    const start =
        inputText.selectionStart;

    const end =
        inputText.selectionEnd;

    const value =
        inputText.value;


    if (start === 0 && end === 0) {
        return;
    }


    if (start !== end) {

        inputText.value =
            value.substring(0, start)
            +
            value.substring(end);

        inputText.selectionStart =
            start;

        inputText.selectionEnd =
            start;

    }

    else {

        /*
           Array.from handles Unicode
           characters better than simple
           substring for Indian scripts.
        */

        const characters =
            Array.from(value);


        const deletePosition =
            Array.from(
                value.substring(0, start)
            ).length;


        characters.splice(
            deletePosition - 1,
            1
        );


        inputText.value =
            characters.join("");


        const newPosition =
            Math.max(
                0,
                deletePosition - 1
            );


        /*
           Recalculate cursor position.
        */

        let cursor = 0;

        const before =
            characters
                .slice(0, newPosition)
                .join("");


        cursor =
            before.length;


        inputText.selectionStart =
            cursor;

        inputText.selectionEnd =
            cursor;

    }


    updateCharacterCount();

    inputText.focus();

}

// =========================================================
// VOICE INPUT
// =========================================================

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

let recognition = null;

let isRecording = false;


// ---------------------------------------------------------
// SPEECH RECOGNITION SUPPORT
// ---------------------------------------------------------

if (SpeechRecognition) {

    recognition =
        new SpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.maxAlternatives = 1;


    recognition.onstart = () => {

        isRecording = true;

        voiceInputButton.textContent =
            "🔴 Stop Voice";

        voiceInputButton.classList.add(
            "recording"
        );

        showMessage(
            `Listening in ${getLanguageName(sourceLanguage.value)}...`,
            "info"
        );

    };


    recognition.onresult = (event) => {

        let finalText = "";

        let interimText = "";


        for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ) {

            const transcript =
                event.results[i][0].transcript;


            if (
                event.results[i].isFinal
            ) {

                finalText +=
                    transcript + " ";

            }

            else {

                interimText +=
                    transcript;

            }

        }


        if (finalText) {

            insertVoiceText(
                finalText
            );

        }

    };


    recognition.onerror = (event) => {

        console.error(
            "Voice input error:",
            event.error
        );


        if (
            event.error ===
            "not-allowed"
        ) {

            showMessage(
                "Microphone permission was denied. Please allow microphone access.",
                "error"
            );

        }

        else if (
            event.error ===
            "no-speech"
        ) {

            showMessage(
                "No speech detected. Please try again.",
                "error"
            );

        }

        else {

            showMessage(
                "Voice input could not be started.",
                "error"
            );

        }

    };


    recognition.onend = () => {

        isRecording = false;


        voiceInputButton.textContent =
            "🎤 Voice Input";


        voiceInputButton.classList.remove(
            "recording"
        );

    };

}


// ---------------------------------------------------------
// VOICE INPUT BUTTON
// ---------------------------------------------------------

voiceInputButton.addEventListener(
    "click",
    () => {

        if (!recognition) {

            showMessage(
                "Voice input is not supported in this browser. Try Google Chrome or Microsoft Edge.",
                "error"
            );

            return;

        }


        if (isRecording) {

            recognition.stop();

            return;

        }


        // Set selected source language

        recognition.lang =
            getSpeechLanguage(
                sourceLanguage.value
            );


        try {

            recognition.start();

        }

        catch (error) {

            console.error(error);

        }

    }
);


// ---------------------------------------------------------
// INSERT VOICE TEXT
// ---------------------------------------------------------

function insertVoiceText(text) {

    const start =
        inputText.selectionStart;

    const end =
        inputText.selectionEnd;


    const currentText =
        inputText.value;


    const before =
        currentText.substring(
            0,
            start
        );


    const after =
        currentText.substring(
            end
        );


    inputText.value =
        before +
        text +
        after;


    const newPosition =
        start + text.length;


    inputText.selectionStart =
        newPosition;

    inputText.selectionEnd =
        newPosition;


    inputText.focus();


    updateCharacterCount();

}


// =========================================================
// READ INPUT ALOUD
// =========================================================

readInputButton.addEventListener(
    "click",
    () => {

        const text =
            inputText.value.trim();


        if (!text) {

            showMessage(
                "There is no input text to read.",
                "error"
            );

            return;

        }


        if (
            !window.speechSynthesis
        ) {

            showMessage(
                "Text-to-speech is not supported in this browser.",
                "error"
            );

            return;

        }


        // Stop currently playing speech

        window.speechSynthesis.cancel();


        const voices =
            window.speechSynthesis
                .getVoices();


        const language =
            getSpeechLanguage(
                sourceLanguage.value
            );


        const prefix =
            language
                .split("-")[0];


        let voice =
            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase()
                    ===
                    language
                        .toLowerCase()
            );


        // Try language family

        if (!voice) {

            voice =
                voices.find(
                    voice =>
                        voice.lang
                            .toLowerCase()
                            .startsWith(
                                prefix.toLowerCase()
                            )
                );

        }


        if (!voice) {

            showMessage(
                `${getLanguageName(sourceLanguage.value)} voice is not available on this device.`,
                "error"
            );

            return;

        }


        const speech =
            new SpeechSynthesisUtterance(
                text
            );


        speech.voice =
            voice;


        speech.lang =
            language;


        speech.rate =
            0.9;


        speech.pitch =
            1;


        speech.onstart = () => {

            readInputButton.textContent =
                "⏹ Stop Reading";

            readInputButton.classList.add(
                "speaking"
            );

        };


        speech.onend = () => {

            readInputButton.textContent =
                "🔊 Read Input";

            readInputButton.classList.remove(
                "speaking"
            );

        };


        speech.onerror = () => {

            readInputButton.textContent =
                "🔊 Read Input";

            readInputButton.classList.remove(
                "speaking"
            );

        };


        window.speechSynthesis.speak(
            speech
        );

    }
);


// =========================================================
// STOP READING WHEN BUTTON IS CLICKED AGAIN
// =========================================================

readInputButton.addEventListener(
    "dblclick",
    () => {

        window.speechSynthesis.cancel();

        readInputButton.textContent =
            "🔊 Read Input";

        readInputButton.classList.remove(
            "speaking"
        );

    }
);


/* =========================================================
   KEYBOARD CLEAR
========================================================= */

keyboardClearButton.addEventListener(
    "click",
    () => {

        inputText.value = "";

        updateCharacterCount();

        inputText.focus();

    }
);


/* =========================================================
   KEYBOARD SPACE
========================================================= */

keyboardSpaceButton.addEventListener(
    "click",
    () => {

        insertKeyboardText(" ");

    }
);


/* =========================================================
   KEYBOARD BACKSPACE
========================================================= */

keyboardBackspaceButton.addEventListener(
    "click",
    keyboardBackspace
);


/* =========================================================
   UPDATE INPUT LANGUAGE
========================================================= */

sourceLanguage.addEventListener(
    "change",
    updateInputLanguage
);


function updateInputLanguage() {

    const language =
        sourceLanguage.value;

    const name =
        languageNames[language];

    inputLanguageTitle.textContent =
        `${name} input`;

    inputLanguageDescription.textContent =
        `Type or paste text in ${name}`;

    keyboardTitle.textContent =
        `${name} Keyboard`;

    inputText.placeholder =
        inputPlaceholders[language] ||
        "Type here...";

    createKeyboard(language);
}

/* =========================================================
   KEYBOARD OPEN / CLOSE
========================================================= */

keyboardToggle.addEventListener(
    "click",
    () => {

        virtualKeyboard.classList.toggle(
            "hidden"
        );

        if (
            !virtualKeyboard.classList.contains(
                "hidden"
            )
        ) {

            inputText.focus();

        }

    }
);


closeKeyboard.addEventListener(
    "click",
    () => {

        virtualKeyboard.classList.add(
            "hidden"
        );

    }
);


/* =========================================================
   CHARACTER COUNT
========================================================= */

function updateCharacterCount() {

    charCount.textContent =
        `${inputText.value.length} characters`;

}


inputText.addEventListener(
    "input",
    updateCharacterCount
);


/* =========================================================
   TRANSLATE
========================================================= */

translateButton.addEventListener(
    "click",
    async () => {

        const text =
            inputText.value.trim();

        const source =
            sourceLanguage.value;

        const target =
            targetLanguage.value;


        if (!text) {

            showMessage(
                "Please enter some text first.",
                "error"
            );

            return;
        }


        if (source === target) {

            outputText.value =
                text;

            translationStatus.textContent =
                "✓ Same language";


            showMessage(
                "Source and target languages are the same.",
                "info"
            );


            saveHistory(
                text,
                text,
                source,
                target
            );


            renderHistory();

            return;
        }


        loading.classList.remove(
            "hidden"
        );


        translateButton.disabled =
            true;


        translationStatus.textContent =
            "Translating...";


        try {

            const response =
                await fetch(
                    "/translate",
                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                text:
                                    text,

                                source:
                                    source,

                                target:
                                    target

                            })

                    }
                );


            const data =
                await response.json();


            if (data.success) {

                outputText.value =
                    data.translation;


                translationStatus.textContent =
                    "✓ Translation completed";


                showMessage(
                    "Translation completed successfully!",
                    "success"
                );


                saveHistory(
                    text,
                    data.translation,
                    source,
                    target
                );


                renderHistory();

            }

            else {

                outputText.value =
                    "";

                translationStatus.textContent =
                    "Translation failed";


                showMessage(
                    data.message
                    ||
                    "Translation failed.",
                    "error"
                );

            }

        }

        catch (error) {

            console.error(error);


            showMessage(
                "Unable to connect to the translation server.",
                "error"
            );


            translationStatus.textContent =
                "Server connection failed";

        }

        finally {

            loading.classList.add(
                "hidden"
            );


            translateButton.disabled =
                false;

        }

    }
);


/* =========================================================
   COPY
========================================================= */

copyButton.addEventListener(
    "click",
    async () => {

        const text =
            outputText.value.trim();


        if (!text) {

            showMessage(
                "There is no translation to copy.",
                "error"
            );

            return;
        }


        try {

            await navigator.clipboard
                .writeText(text);


            showMessage(
                "Translation copied!",
                "success"
            );

        }

        catch {

            /*
               Fallback for browsers that
               block clipboard API.
            */

            outputText.select();

            document.execCommand(
                "copy"
            );

            showMessage(
                "Translation copied!",
                "success"
            );

        }

    }
);


/* =========================================================
   TEXT TO SPEECH
========================================================= */

speakButton.addEventListener(
    "click",
    () => {

        const text =
            outputText.value.trim();


        if (!text) {

            showMessage(
                "There is no translation to listen to.",
                "error"
            );

            return;
        }


        if (!window.speechSynthesis) {

            showMessage(
                "Text-to-speech is not supported.",
                "error"
            );

            return;
        }


        window.speechSynthesis.cancel();


        const language =
            getSpeechLanguage(
                targetLanguage.value
            );


        const voices =
            window.speechSynthesis
                .getVoices();


        speakWithBestVoice(
            text,
            language,
            voices
        );

    }
);


/* =========================================================
   SPEECH VOICES
========================================================= */

function speakWithBestVoice(
    text,
    language,
    voices
) {

    const prefix =
        language
            .split("-")[0]
            .toLowerCase();


    let voice =
        voices.find(
            voice =>
                voice.lang.toLowerCase()
                ===
                language.toLowerCase()
        );


    if (!voice) {

        voice =
            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase()
                        .startsWith(prefix)
            );

    }


    /*
       If the browser has not loaded
       voices yet, wait for them.
    */

    if (!voice && voices.length === 0) {

        window.speechSynthesis.onvoiceschanged =
            () => {

                const updatedVoices =
                    window.speechSynthesis
                        .getVoices();


                speakWithBestVoice(
                    text,
                    language,
                    updatedVoices
                );

            };


        return;
    }


    if (!voice) {

        showMessage(
            `${getLanguageName(targetLanguage.value)} voice is not available on this device.`,
            "error"
        );

        return;
    }


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.voice =
        voice;


    speech.lang =
        language;


    speech.rate =
        0.9;


    speech.pitch =
        1;


    speech.volume =
        1;


    speech.onstart =
        () => {

            showMessage(
                "Playing translation...",
                "info"
            );

        };


    speech.onend =
        () => {

            translationStatus.textContent =
                "✓ Translation completed";

        };


    speech.onerror =
        () => {

            showMessage(
                "Unable to play this language voice on your device.",
                "error"
            );

        };


    window.speechSynthesis.speak(
        speech
    );

}


/* =========================================================
   SPEECH LANGUAGE MAP
========================================================= */

function getSpeechLanguage(
    language
) {

    const map = {

        en:
            "en-IN",

        hi:
            "hi-IN",

        kn:
            "kn-IN",

        te:
            "te-IN",

        ta:
            "ta-IN",

        ml:
            "ml-IN",

        mr:
            "mr-IN",

        fr:
            "fr-FR",

        de:
            "de-DE",

        es:
            "es-ES",

        it:
            "it-IT",

        pt:
            "pt-PT",

        ja:
            "ja-JP",

        ko:
            "ko-KR",

        zh:
            "zh-CN"

    };


    return map[language]
        ||
        "en-IN";

}


/* =========================================================
   CLEAR
========================================================= */

clearButton.addEventListener(
    "click",
    clearAll
);


clearInputButton.addEventListener(
    "click",
    () => {

        inputText.value =
            "";

        updateCharacterCount();

        inputText.focus();

    }
);


function clearAll() {

    inputText.value =
        "";

    outputText.value =
        "";

    updateCharacterCount();


    translationStatus.textContent =
        "Waiting for translation";


    message.textContent =
        "";


    if (
        window.speechSynthesis
    ) {

        window.speechSynthesis.cancel();

    }

}


/* =========================================================
   SWAP
========================================================= */

swapButton.addEventListener(
    "click",
    () => {

        const oldSource =
            sourceLanguage.value;


        sourceLanguage.value =
            targetLanguage.value;


        targetLanguage.value =
            oldSource;


        const oldInput =
            inputText.value;


        inputText.value =
            outputText.value;


        outputText.value =
            oldInput;


        updateInputLanguage();


        updateCharacterCount();


        showMessage(
            `${getLanguageName(sourceLanguage.value)} → ${getLanguageName(targetLanguage.value)}`,
            "info"
        );

    }
);


/* =========================================================
   HISTORY
========================================================= */

function getHistory() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "linguaAIHistory"
            )
        )
        ||
        [];

    }

    catch {

        return [];

    }

}


function saveHistory(
    sourceText,
    translatedText,
    source,
    target
) {

    let history =
        getHistory();


    history.unshift({

        id:
            Date.now(),

        sourceText,

        translatedText,

        source,

        target,

        time:
            new Date()
                .toLocaleString()

    });


    /*
       Keep maximum 50 records.
    */

    history =
        history.slice(
            0,
            50
        );


    localStorage.setItem(
        "linguaAIHistory",
        JSON.stringify(history)
    );

}


/* =========================================================
   RENDER HISTORY
========================================================= */

function renderHistory() {

    const history =
        getHistory();


    const search =
        historySearch.value
            .toLowerCase()
            .trim();


    const filtered =
        history.filter(
            item =>

                item.sourceText
                    .toLowerCase()
                    .includes(search)

                ||

                item.translatedText
                    .toLowerCase()
                    .includes(search)
        );


    historyList.innerHTML =
        "";


    historyBadge.textContent =
        history.length;


    if (!filtered.length) {

        emptyHistory.classList.remove(
            "hidden"
        );

        return;

    }


    emptyHistory.classList.add(
        "hidden"
    );


    filtered.forEach(
        item => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "history-item";


            div.innerHTML = `

                <div class="history-top">

                    <span class="history-languages">

                        ${escapeHTML(
                            getLanguageName(item.source)
                        )}

                        →

                        ${escapeHTML(
                            getLanguageName(item.target)
                        )}

                    </span>

                    <span class="history-time">

                        ${escapeHTML(item.time)}

                    </span>

                </div>


                <div class="history-text">

                    <div class="history-source">

                        ${escapeHTML(
                            item.sourceText
                        )}

                    </div>


                    <div class="history-result">

                        ${escapeHTML(
                            item.translatedText
                        )}

                    </div>

                </div>


                <div class="history-actions">

                    <button
                        class="delete-history"
                        onclick="deleteHistory(${item.id})">

                        🗑 Delete

                    </button>

                </div>

            `;


            historyList.appendChild(
                div
            );

        }
    );

}


/* =========================================================
   DELETE HISTORY
========================================================= */

function deleteHistory(id) {

    let history =
        getHistory();


    history =
        history.filter(
            item =>
                item.id !== id
        );


    localStorage.setItem(
        "linguaAIHistory",
        JSON.stringify(history)
    );


    renderHistory();

}


/* =========================================================
   CLEAR HISTORY
========================================================= */

clearHistoryButton.addEventListener(
    "click",
    () => {

        if (!getHistory().length) {

            showMessage(
                "There is no history to clear.",
                "info"
            );

            return;
        }


        if (
            confirm(
                "Delete all translation history?"
            )
        ) {

            localStorage.removeItem(
                "linguaAIHistory"
            );


            renderHistory();

        }

    }
);


/* =========================================================
   HISTORY SEARCH
========================================================= */

historySearch.addEventListener(
    "input",
    renderHistory
);


/* =========================================================
   SHOW HISTORY
========================================================= */

function showHistory() {

    historySection.classList.remove(
        "hidden"
    );


    document
        .getElementById(
            "translatorSection"
        )
        .classList.add(
            "hidden"
        );


    historySidebarBtn.classList.add(
        "active"
    );


    translatorSidebarBtn.classList.remove(
        "active"
    );


    renderHistory();


    historySection.scrollIntoView({
        behavior:
            "smooth"
    });

}


/* =========================================================
   SHOW TRANSLATOR
========================================================= */

function showTranslator() {

    historySection.classList.add(
        "hidden"
    );


    document
        .getElementById(
            "translatorSection"
        )
        .classList.remove(
            "hidden"
        );


    translatorSidebarBtn.classList.add(
        "active"
    );


    historySidebarBtn.classList.remove(
        "active"
    );

}


/* =========================================================
   HISTORY NAVIGATION
========================================================= */

historySidebarBtn.addEventListener(
    "click",
    showHistory
);


topHistoryButton.addEventListener(
    "click",
    showHistory
);


translatorSidebarBtn.addEventListener(
    "click",
    showTranslator
);


/* =========================================================
   LANGUAGE HELPERS
========================================================= */

function getLanguageName(
    language
) {

    return languageNames[language]
        ||
        "Unknown";

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================================================
   MESSAGE
========================================================= */

function showMessage(
    text,
    type
) {

    message.textContent =
        text;


    message.className =
        `message ${type}`;

}


/* =========================================================
   ENTER KEY
========================================================= */

inputText.addEventListener(
    "keydown",
    event => {

        /*
           Ctrl + Enter translates.
        */

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            translateButton.click();

        }

    }
);


/* =========================================================
   LOAD SPEECH VOICES
========================================================= */

if (
    window.speechSynthesis
) {

    window.speechSynthesis.onvoiceschanged =
        () => {

            window.speechSynthesis
                .getVoices();

        };

}


/* =========================================================
   STARTUP
========================================================= */

updateInputLanguage();

updateCharacterCount();

renderHistory();