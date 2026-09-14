/* =========================================================
   LANGAI — SMART LANGUAGE TRANSLATOR
   Corrected Complete JavaScript
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const sourceLanguage = document.getElementById("sourceLanguage");
const targetLanguage = document.getElementById("targetLanguage");

const translateButton = document.getElementById("translateButton");
const copyButton = document.getElementById("copyButton");
const speakButton = document.getElementById("speakButton");

const clearButton = document.getElementById("clearButton");
const clearInputButton = document.getElementById("clearInputButton");

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

const messageBox =
    document.getElementById("message");

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

const keyboardClearButton =
    document.getElementById("keyboardClearButton");

const keyboardSpaceButton =
    document.getElementById("keyboardSpaceButton");

const keyboardBackspaceButton =
    document.getElementById("keyboardBackspaceButton");

const inputLanguageTitle =
    document.getElementById("inputLanguageTitle");

const inputLanguageDescription =
    document.getElementById("inputLanguageDescription");

const historySidebarBtn =
    document.getElementById("historySidebarBtn");

const translatorSidebarBtn =
    document.getElementById("translatorSidebarBtn");

const historySection =
    document.getElementById("historySection");

const translatorSection =
    document.getElementById("translatorSection");

const historyList =
    document.getElementById("historyList");

const emptyHistory =
    document.getElementById("emptyHistory");

const historyBadge =
    document.getElementById("historyBadge");

const historySearch =
    document.getElementById("historySearch");

const clearHistoryButton =
    document.getElementById("clearHistoryButton");

const topHistoryButton =
    document.getElementById("topHistoryButton");


/* =========================================================
   LANGUAGE INFORMATION
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
   SPEECH LANGUAGE MAP
========================================================= */

function getSpeechLanguage(language) {

    const map = {

        en: "en-IN",
        hi: "hi-IN",
        kn: "kn-IN",
        te: "te-IN",
        ta: "ta-IN",
        ml: "ml-IN",
        mr: "mr-IN",

        fr: "fr-FR",
        de: "de-DE",
        es: "es-ES",
        it: "it-IT",
        pt: "pt-PT",
        ja: "ja-JP",
        ko: "ko-KR",
        zh: "zh-CN"

    };

    return map[language] || "en-IN";
}


/* =========================================================
   MESSAGE SYSTEM
========================================================= */

function showMessage(text, type = "info") {

    if (!messageBox) {
        return;
    }

    messageBox.textContent = text;

    messageBox.className = "message";

    messageBox.classList.add(type);

    messageBox.classList.remove("hidden");

    clearTimeout(window.langAiMessageTimer);

    window.langAiMessageTimer =
        setTimeout(() => {

            messageBox.classList.add("hidden");

        }, 4000);
}


/* =========================================================
   LANGUAGE NAME
========================================================= */

function getLanguageName(code) {

    return languageNames[code] || "Selected language";
}


/* =========================================================
   CHARACTER COUNT
========================================================= */

function updateCharacterCount() {

    if (!charCount) {
        return;
    }

    charCount.textContent =
        `${inputText.value.length} characters`;
}


inputText.addEventListener(
    "input",
    updateCharacterCount
);


/* =========================================================
   INPUT LANGUAGE INFORMATION
========================================================= */

function updateInputLanguageInfo() {

    const lang =
        sourceLanguage.value;

    const name =
        getLanguageName(lang);

    if (inputLanguageTitle) {

        inputLanguageTitle.textContent =
            `${name} input`;

    }

    if (inputLanguageDescription) {

        inputLanguageDescription.textContent =
            `Type, paste, or speak in ${name}`;

    }

    inputText.placeholder =
        inputPlaceholders[lang]
        ||
        "Type or paste your text here...";

}


/* =========================================================
   VIRTUAL KEYBOARD DATA
========================================================= */

const keyboards = {

    en: [
        [..."QWERTYUIOP"],
        [..."ASDFGHJKL"],
        [..."ZXCVBNM"],
        [".", ",", "?", "!", "'", "\"", ":", ";", "-", "(", ")"]
    ],

    hi: [
        [
            "अ","आ","इ","ई","उ","ऊ","ऋ",
            "ए","ऐ","ओ","औ"
        ],

        [
            "क","ख","ग","घ","ङ",
            "च","छ","ज","झ","ञ",
            "ट","ठ","ड","ढ","ण"
        ],

        [
            "त","थ","द","ध","न",
            "प","फ","ब","भ","म",
            "य","र","ल","व"
        ],

        [
            "श","ष","स","ह","क्ष","त्र","ज्ञ"
        ],

        [
            "ा","ि","ी","ु","ू","ृ","े","ै","ो","ौ"
        ],

        [
            "ं","ँ","ः","्","़","।"
        ]
    ],

    mr: [
        [
            "अ","आ","इ","ई","उ","ऊ","ऋ",
            "ए","ऐ","ओ","औ"
        ],

        [
            "क","ख","ग","घ","ङ",
            "च","छ","ज","झ","ञ",
            "ट","ठ","ड","ढ","ण"
        ],

        [
            "त","थ","द","ध","न",
            "प","फ","ब","भ","म",
            "य","र","ल","व"
        ],

        [
            "श","ष","स","ह","ळ","क्ष","ज्ञ"
        ],

        [
            "ा","ि","ी","ु","ू","ृ","े","ै","ो","ौ"
        ],

        [
            "ं","ँ","ः","्","़","।"
        ]
    ],

    kn: [
        [
            "ಅ","ಆ","ಇ","ಈ","ಉ","ಊ","ಋ",
            "ಎ","ಏ","ಐ","ಒ","ಓ","ಔ"
        ],

        [
            "ಕ","ಖ","ಗ","ಘ","ಙ",
            "ಚ","ಛ","ಜ","ಝ","ಞ",
            "ಟ","ಠ","ಡ","ಢ","ಣ"
        ],

        [
            "ತ","ಥ","ದ","ಧ","ನ",
            "ಪ","ಫ","ಬ","ಭ","ಮ",
            "ಯ","ರ","ಲ","ವ"
        ],

        [
            "ಶ","ಷ","ಸ","ಹ","ಳ","ಕ್ಷ","ಜ್ಞ"
        ],

        [
            "ಾ","ಿ","ೀ","ು","ೂ","ೃ",
            "ೆ","ೇ","ೈ","ೊ","ೋ","ೌ"
        ],

        [
            "ಂ","ಃ","್","಼","।"
        ]
    ],

    te: [
        [
            "అ","ఆ","ఇ","ఈ","ఉ","ఊ",
            "ఋ","ఎ","ఏ","ఐ","ఒ","ఓ","ఔ"
        ],

        [
            "క","ఖ","గ","ఘ","ఙ",
            "చ","ఛ","జ","ఝ","ఞ",
            "ట","ఠ","డ","ఢ","ణ"
        ],

        [
            "త","థ","ద","ధ","న",
            "ప","ఫ","బ","భ","మ",
            "య","ర","ల","వ"
        ],

        [
            "శ","ష","స","హ","ళ","క్ష","జ్ఞ"
        ],

        [
            "ా","ి","ీ","ు","ూ",
            "ృ","ె","ే","ై","ొ","ో","ౌ"
        ],

        [
            "ం","ః","్","।"
        ]
    ],

    ta: [
        [
            "அ","ஆ","இ","ஈ","உ","ஊ",
            "எ","ஏ","ஐ","ஒ","ஓ","ஔ"
        ],

        [
            "க","ங","ச","ஞ","ட",
            "ண","த","ந","ப","ம"
        ],

        [
            "ய","ர","ல","வ","ழ","ள",
            "ற","ன","ஜ","ஷ","ஸ","ஹ"
        ],

        [
            "ா","ி","ீ","ு","ூ",
            "ெ","ே","ை","ொ","ோ","ௌ"
        ],

        [
            "்","ம்","।"
        ]
    ],

    ml: [
        [
            "അ","ആ","ഇ","ഈ","ഉ","ഊ",
            "ഋ","എ","ഏ","ഐ","ഒ","ഓ","ഔ"
        ],

        [
            "ക","ഖ","ഗ","ഘ","ങ",
            "ച","ഛ","ജ","ഝ","ഞ",
            "ട","ഠ","ഡ","ഢ","ണ"
        ],

        [
            "ത","ഥ","ദ","ധ","ന",
            "പ","ഫ","ബ","ഭ","മ",
            "യ","ര","ല","വ"
        ],

        [
            "ശ","ഷ","സ","ഹ","ള","ഴ","റ"
        ],

        [
            "ാ","ി","ീ","ു","ൂ",
            "ൃ","െ","േ","ൈ","ൊ","ോ","ൗ"
        ],

        [
            "ം","ഃ","്","।"
        ]
    ]

};


/* =========================================================
   KEYBOARD RENDER
========================================================= */

function renderKeyboard() {

    if (!keyboardKeys) {
        return;
    }

    const lang =
        sourceLanguage.value;

    keyboardKeys.innerHTML = "";

    const rows =
        keyboards[lang]
        ||
        keyboards.en;

    rows.forEach(row => {

        const rowElement =
            document.createElement("div");

        rowElement.className =
            "keyboard-row";

        row.forEach(character => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                "keyboard-key";

            button.textContent =
                character;

            button.addEventListener(
                "click",
                () => {

                    insertTextAtCursor(
                        character
                    );

                }
            );

            rowElement.appendChild(
                button
            );

        });

        keyboardKeys.appendChild(
            rowElement
        );

    });

    if (keyboardTitle) {

        keyboardTitle.textContent =
            `${getLanguageName(lang)} Keyboard`;

    }

    if (keyboardSubtitle) {

        keyboardSubtitle.textContent =
            "Click characters to insert them";

    }

    if (keyboardModeInfo) {

        keyboardModeInfo.textContent =
            `Type directly in ${getLanguageName(lang)} using the virtual keyboard.`;

    }
}


/* =========================================================
   INSERT TEXT AT CURSOR
========================================================= */

function insertTextAtCursor(text) {

    const start =
        inputText.selectionStart;

    const end =
        inputText.selectionEnd;

    const current =
        inputText.value;

    inputText.value =
        current.substring(0, start)
        +
        text
        +
        current.substring(end);

    const position =
        start + text.length;

    inputText.selectionStart =
        position;

    inputText.selectionEnd =
        position;

    inputText.focus();

    updateCharacterCount();
}


/* =========================================================
   KEYBOARD BUTTON
========================================================= */

keyboardToggle.addEventListener(
    "click",
    () => {

        virtualKeyboard.classList.toggle(
            "hidden"
        );

        if (!virtualKeyboard.classList.contains("hidden")) {

            renderKeyboard();

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
   KEYBOARD ACTIONS
========================================================= */

keyboardClearButton.addEventListener(
    "click",
    () => {

        inputText.value = "";

        updateCharacterCount();

        inputText.focus();

    }
);


keyboardSpaceButton.addEventListener(
    "click",
    () => {

        insertTextAtCursor(" ");

    }
);


keyboardBackspaceButton.addEventListener(
    "click",
    () => {

        const start =
            inputText.selectionStart;

        const end =
            inputText.selectionEnd;

        if (start !== end) {

            inputText.value =
                inputText.value.substring(0, start)
                +
                inputText.value.substring(end);

            inputText.selectionStart =
                start;

            inputText.selectionEnd =
                start;

        }

        else if (start > 0) {

            inputText.value =
                inputText.value.substring(0, start - 1)
                +
                inputText.value.substring(start);

            inputText.selectionStart =
                start - 1;

            inputText.selectionEnd =
                start - 1;

        }

        updateCharacterCount();

        inputText.focus();

    }
);


/* =========================================================
   LANGUAGE CHANGE
========================================================= */

sourceLanguage.addEventListener(
    "change",
    () => {

        updateInputLanguageInfo();

        renderKeyboard();

        stopVoiceInput();

    }
);


targetLanguage.addEventListener(
    "change",
    () => {

        stopSpeaking();

    }
);


/* =========================================================
   SWAP LANGUAGES
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

        updateInputLanguageInfo();

        renderKeyboard();

        updateCharacterCount();

        stopVoiceInput();

    }
);


/* =========================================================
   TRANSLATION
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

            inputText.focus();

            return;
        }

        if (source === target) {

            outputText.value =
                text;

            translationStatus.textContent =
                "✓ Same language";

            saveHistory(
                text,
                text,
                source,
                target
            );

            renderHistory();

            showMessage(
                "Source and target languages are the same.",
                "info"
            );

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
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            text: text,
                            source: source,
                            target: target
                        })
                    }
                );

            let data;

            try {

                data =
                    await response.json();

            }

            catch (jsonError) {

                throw new Error(
                    "Invalid response from translation server."
                );

            }

            if (!response.ok || !data.success) {

                throw new Error(
                    data.message
                    ||
                    "Translation failed."
                );

            }

            outputText.value =
                data.translation;

            translationStatus.textContent =
                `✓ Translation completed`;

            saveHistory(
                text,
                data.translation,
                source,
                target
            );

            renderHistory();

            showMessage(
                `Translation completed using ${data.provider || "translation service"}.`,
                "success"
            );

        }

        catch (error) {

            console.error(
                "Translation error:",
                error
            );

            outputText.value = "";

            translationStatus.textContent =
                "Translation failed";

            showMessage(
                error.message
                ||
                "Unable to connect to the translation service.",
                "error"
            );

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
   COPY TRANSLATION
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

            await navigator.clipboard.writeText(
                text
            );

            showMessage(
                "Translation copied!",
                "success"
            );

        }

        catch (error) {

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
   CLEAR INPUT
========================================================= */

clearButton.addEventListener(
    "click",
    clearAll
);


clearInputButton.addEventListener(
    "click",
    clearAll
);


function clearAll() {

    inputText.value = "";

    outputText.value = "";

    updateCharacterCount();

    translationStatus.textContent =
        "Waiting for translation";

    inputText.focus();

}


/* =========================================================
   SPEECH RECOGNITION
   FIXED VERSION
========================================================= */

const SpeechRecognition =
    window.SpeechRecognition
    ||
    window.webkitSpeechRecognition;

let recognition = null;

let isRecording = false;

let recognitionStarting = false;


/* ---------------------------------------------------------
   CHECK SUPPORT
--------------------------------------------------------- */

function speechRecognitionSupported() {

    return !!SpeechRecognition;
}


/* ---------------------------------------------------------
   CREATE RECOGNITION
--------------------------------------------------------- */

function createRecognition() {

    if (!speechRecognitionSupported()) {

        return null;

    }

    const recognizer =
        new SpeechRecognition();

    /*
       IMPORTANT:
       continuous=false is more reliable in
       Chrome/Edge than continuous=true.
    */

    recognizer.continuous =
        false;

    recognizer.interimResults =
        false;

    recognizer.maxAlternatives =
        1;

    recognizer.lang =
        getSpeechLanguage(
            sourceLanguage.value
        );

    recognizer.onstart =
        () => {

            isRecording =
                true;

            recognitionStarting =
                false;

            voiceInputButton.textContent =
                "🔴 Stop Voice";

            voiceInputButton.classList.add(
                "recording"
            );

            showMessage(
                `Listening in ${getLanguageName(sourceLanguage.value)}... Speak now.`,
                "info"
            );

        };


    recognizer.onresult =
        (event) => {

            if (
                !event.results ||
                !event.results.length
            ) {

                return;

            }

            const result =
                event.results[
                    event.results.length - 1
                ];

            if (!result || !result[0]) {

                return;

            }

            const transcript =
                result[0].transcript.trim();

            if (transcript) {

                insertVoiceText(
                    transcript + " "
                );

                showMessage(
                    "Voice input received.",
                    "success"
                );

            }

        };


    recognizer.onerror =
        (event) => {

            console.error(
                "Speech recognition error:",
                event.error
            );

            recognitionStarting =
                false;

            isRecording =
                false;

            resetVoiceButton();

            let message =
                "Voice input could not be started.";

            switch (event.error) {

                case "not-allowed":

                case "service-not-allowed":

                    message =
                        "Microphone permission was denied. Click the 🔒 icon near the website address and allow Microphone access.";

                    break;


                case "no-speech":

                    message =
                        "No speech detected. Please speak clearly and try again.";

                    break;


                case "audio-capture":

                    message =
                        "No microphone was detected. Check your microphone connection and Windows microphone permissions.";

                    break;


                case "network":

                    message =
                        "Speech recognition needs an internet connection. Check your connection and try again.";

                    break;


                case "aborted":

                    message =
                        "Voice input stopped.";

                    break;

            }

            showMessage(
                message,
                "error"
            );

        };


    recognizer.onend =
        () => {

            isRecording =
                false;

            recognitionStarting =
                false;

            resetVoiceButton();

        };

    return recognizer;
}


/* ---------------------------------------------------------
   RESET VOICE BUTTON
--------------------------------------------------------- */

function resetVoiceButton() {

    voiceInputButton.textContent =
        "🎤 Voice Input";

    voiceInputButton.classList.remove(
        "recording"
    );

}


/* ---------------------------------------------------------
   START VOICE INPUT
--------------------------------------------------------- */

function startVoiceInput() {

    if (!speechRecognitionSupported()) {

        showMessage(
            "Voice input is not supported by this browser. Use the latest Google Chrome or Microsoft Edge.",
            "error"
        );

        return;

    }

    if (isRecording || recognitionStarting) {

        return;

    }

    recognition =
        createRecognition();

    if (!recognition) {

        showMessage(
            "Unable to initialize voice input.",
            "error"
        );

        return;

    }

    recognition.lang =
        getSpeechLanguage(
            sourceLanguage.value
        );

    recognitionStarting =
        true;

    try {

        recognition.start();

    }

    catch (error) {

        console.error(
            "Recognition start error:",
            error
        );

        recognitionStarting =
            false;

        isRecording =
            false;

        resetVoiceButton();

        showMessage(
            "Voice input is already starting or the browser blocked it. Please try again.",
            "error"
        );

    }

}


/* ---------------------------------------------------------
   STOP VOICE INPUT
--------------------------------------------------------- */

function stopVoiceInput() {

    if (recognition) {

        try {

            recognition.stop();

        }

        catch (error) {

            console.log(
                "Recognition already stopped."
            );

        }

    }

    isRecording =
        false;

    recognitionStarting =
        false;

    resetVoiceButton();

}


/* ---------------------------------------------------------
   VOICE BUTTON
--------------------------------------------------------- */

voiceInputButton.addEventListener(
    "click",
    () => {

        if (isRecording) {

            stopVoiceInput();

        }

        else {

            startVoiceInput();

        }

    }
);


/* ---------------------------------------------------------
   INSERT VOICE TEXT
--------------------------------------------------------- */

function insertVoiceText(text) {

    const start =
        inputText.selectionStart;

    const end =
        inputText.selectionEnd;

    const currentText =
        inputText.value;

    inputText.value =
        currentText.substring(0, start)
        +
        text
        +
        currentText.substring(end);

    const newPosition =
        start + text.length;

    inputText.selectionStart =
        newPosition;

    inputText.selectionEnd =
        newPosition;

    inputText.focus();

    updateCharacterCount();

}


/* =========================================================
   TEXT TO SPEECH
========================================================= */

function getVoices() {

    if (
        !window.speechSynthesis
    ) {

        return [];

    }

    return window.speechSynthesis.getVoices();
}


/* ---------------------------------------------------------
   FIND BEST VOICE
--------------------------------------------------------- */

function findBestVoice(
    voices,
    language
) {

    const wanted =
        language.toLowerCase();

    const prefix =
        wanted.split("-")[0];

    let voice =
        voices.find(
            v =>
                v.lang
                &&
                v.lang.toLowerCase()
                === wanted
        );

    if (voice) {
        return voice;
    }

    voice =
        voices.find(
            v =>
                v.lang
                &&
                v.lang.toLowerCase()
                .startsWith(prefix)
        );

    return voice || null;
}


/* ---------------------------------------------------------
   SPEAK TEXT
--------------------------------------------------------- */

function speakText(
    text,
    language,
    button
) {

    if (
        !window.speechSynthesis
    ) {

        showMessage(
            "Text-to-speech is not supported in this browser.",
            "error"
        );

        return;

    }

    window.speechSynthesis.cancel();

    let voices =
        getVoices();

    const voice =
        findBestVoice(
            voices,
            language
        );

    /*
       Some browsers load voices asynchronously.
    */

    if (!voice && voices.length === 0) {

        window.speechSynthesis.onvoiceschanged =
            () => {

                const newVoices =
                    getVoices();

                const newVoice =
                    findBestVoice(
                        newVoices,
                        language
                    );

                if (newVoice) {

                    speakTextWithVoice(
                        text,
                        language,
                        newVoice,
                        button
                    );

                }

                else {

                    showMessage(
                        "A voice for this language is not installed on this device.",
                        "error"
                    );

                }

            };

        return;

    }

    if (!voice) {

        showMessage(
            `${getLanguageName(
                sourceLanguage.value
            )} voice is not available on this device.`,
            "error"
        );

        return;

    }

    speakTextWithVoice(
        text,
        language,
        voice,
        button
    );

}


/* ---------------------------------------------------------
   SPEAK WITH VOICE
--------------------------------------------------------- */

function speakTextWithVoice(
    text,
    language,
    voice,
    button
) {

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

            if (button) {

                button.classList.add(
                    "speaking"
                );

            }

        };


    speech.onend =
        () => {

            if (button) {

                button.classList.remove(
                    "speaking"
                );

            }

        };


    speech.onerror =
        (event) => {

            console.error(
                "Speech synthesis error:",
                event
            );

            if (button) {

                button.classList.remove(
                    "speaking"
                );

            }

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
   READ INPUT
========================================================= */

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

        speakText(
            text,
            getSpeechLanguage(
                sourceLanguage.value
            ),
            readInputButton
        );

    }
);


/* =========================================================
   SPEAK TRANSLATION
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

        speakText(
            text,
            getSpeechLanguage(
                targetLanguage.value
            ),
            speakButton
        );

    }
);


/* =========================================================
   STOP SPEAKING
========================================================= */

function stopSpeaking() {

    if (
        window.speechSynthesis
    ) {

        window.speechSynthesis.cancel();

    }

}


/* =========================================================
   HISTORY
========================================================= */

const HISTORY_KEY =
    "langai_translation_history";


function getHistory() {

    try {

        return JSON.parse(
            localStorage.getItem(
                HISTORY_KEY
            )
        )
        || [];

    }

    catch (error) {

        return [];

    }

}


function saveHistory(
    original,
    translated,
    source,
    target
) {

    const history =
        getHistory();

    history.unshift({

        original:
            original,

        translated:
            translated,

        source:
            source,

        target:
            target,

        date:
            new Date().toLocaleString()

    });

    /*
       Keep only the latest 50 translations.
    */

    const limited =
        history.slice(0, 50);

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(limited)
    );

}


function renderHistory() {

    if (!historyList) {
        return;
    }

    const history =
        getHistory();

    historyList.innerHTML = "";

    if (historyBadge) {

        historyBadge.textContent =
            history.length;

    }

    if (!history.length) {

        if (emptyHistory) {

            emptyHistory.classList.remove(
                "hidden"
            );

        }

        return;

    }

    if (emptyHistory) {

        emptyHistory.classList.add(
            "hidden"
        );

    }

    history.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "history-item";

            card.innerHTML = `

                <div class="history-item-header">

                    <span>
                        ${escapeHtml(
                            getLanguageName(
                                item.source
                            )
                        )}
                        →
                        ${escapeHtml(
                            getLanguageName(
                                item.target
                            )
                        )}
                    </span>

                    <small>
                        ${escapeHtml(
                            item.date || ""
                        )}
                    </small>

                </div>

                <div class="history-original">
                    ${escapeHtml(
                        item.original
                    )}
                </div>

                <div class="history-translated">
                    ${escapeHtml(
                        item.translated
                    )}
                </div>

                <button
                    type="button"
                    class="history-use"
                    data-index="${index}">
                    Use Translation
                </button>

            `;

            historyList.appendChild(
                card
            );

        }
    );

    document
        .querySelectorAll(
            ".history-use"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        const item =
                            getHistory()[index];

                        if (!item) {
                            return;
                        }

                        inputText.value =
                            item.original;

                        outputText.value =
                            item.translated;

                        sourceLanguage.value =
                            item.source;

                        targetLanguage.value =
                            item.target;

                        updateInputLanguageInfo();

                        renderKeyboard();

                        updateCharacterCount();

                        showTranslator();

                    }
                );

            }
        );

}


function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   CLEAR HISTORY
========================================================= */

if (clearHistoryButton) {

    clearHistoryButton.addEventListener(
        "click",
        () => {

            if (!getHistory().length) {

                showMessage(
                    "History is already empty.",
                    "info"
                );

                return;

            }

            const confirmed =
                confirm(
                    "Delete all translation history?"
                );

            if (!confirmed) {
                return;
            }

            localStorage.removeItem(
                HISTORY_KEY
            );

            renderHistory();

            showMessage(
                "Translation history cleared.",
                "success"
            );

        }
    );

}


/* =========================================================
   HISTORY SEARCH
========================================================= */

if (historySearch) {

    historySearch.addEventListener(
        "input",
        () => {

            const query =
                historySearch.value
                    .trim()
                    .toLowerCase();

            const items =
                document.querySelectorAll(
                    ".history-item"
                );

            items.forEach(
                item => {

                    const visible =
                        item.textContent
                            .toLowerCase()
                            .includes(query);

                    item.style.display =
                        visible
                        ? ""
                        : "none";

                }
            );

        }
    );

}


/* =========================================================
   SHOW TRANSLATOR
========================================================= */

function showTranslator() {

    if (translatorSection) {

        translatorSection.classList.remove(
            "hidden"
        );

    }

    if (historySection) {

        historySection.classList.add(
            "hidden"
        );

    }

    if (translatorSidebarBtn) {

        translatorSidebarBtn.classList.add(
            "active"
        );

    }

    if (historySidebarBtn) {

        historySidebarBtn.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   SHOW HISTORY
========================================================= */

function showHistory() {

    renderHistory();

    if (translatorSection) {

        translatorSection.classList.add(
            "hidden"
        );

    }

    if (historySection) {

        historySection.classList.remove(
            "hidden"
        );

    }

    if (translatorSidebarBtn) {

        translatorSidebarBtn.classList.remove(
            "active"
        );

    }

    if (historySidebarBtn) {

        historySidebarBtn.classList.add(
            "active"
        );

    }

}


/* =========================================================
   SIDEBAR BUTTONS
========================================================= */

if (translatorSidebarBtn) {

    translatorSidebarBtn.addEventListener(
        "click",
        showTranslator
    );

}


if (historySidebarBtn) {

    historySidebarBtn.addEventListener(
        "click",
        showHistory
    );

}


if (topHistoryButton) {

    topHistoryButton.addEventListener(
        "click",
        showHistory
    );

}


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

inputText.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey
            &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            translateButton.click();

        }

    }
);


/* =========================================================
   BROWSER VOICES
========================================================= */

if (
    window.speechSynthesis
) {

    /*
       Force browser to initialize its
       voice list.
    */

    window.speechSynthesis.getVoices();

    window.speechSynthesis.onvoiceschanged =
        () => {

            window.speechSynthesis.getVoices();

        };

}


/* =========================================================
   INITIALIZATION
========================================================= */

updateInputLanguageInfo();

updateCharacterCount();

renderKeyboard();

renderHistory();

showTranslator();


/* =========================================================
   DEBUG INFORMATION
========================================================= */

console.log(
    "LangAI loaded successfully."
);

console.log(
    "Speech Recognition supported:",
    speechRecognitionSupported()
);

console.log(
    "Speech Synthesis supported:",
    !!window.speechSynthesis
);