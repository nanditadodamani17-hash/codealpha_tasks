from flask import Flask, render_template, request, jsonify
import requests
import os
from urllib.parse import quote

app = Flask(__name__)

# ---------------------------------------------------------
# LANGUAGE CODE NORMALIZATION
# ---------------------------------------------------------

SUPPORTED_LANGUAGES = {
    "en": "en",
    "hi": "hi",
    "kn": "kn",
    "te": "te",
    "ta": "ta",
    "ml": "ml",
    "mr": "mr",
    "fr": "fr",
    "de": "de",
    "es": "es",
    "it": "it",
    "pt": "pt",
    "ja": "ja",
    "ko": "ko",
    "zh": "zh-CN"
}


# ---------------------------------------------------------
# HOME
# ---------------------------------------------------------

@app.route("/")
def home():
    return render_template("index.html")


# ---------------------------------------------------------
# GOOGLE TRANSLATE FALLBACK
# ---------------------------------------------------------

def google_translate(text, source, target):
    """
    Uses Google's public translation endpoint.
    No API key or billing is required.
    """

    url = "https://translate.googleapis.com/translate_a/single"

    params = {
        "client": "gtx",
        "sl": source,
        "tl": target,
        "dt": "t",
        "q": text
    }

    response = requests.get(
        url,
        params=params,
        timeout=20,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )

    response.raise_for_status()

    data = response.json()

    if not data or not data[0]:
        raise Exception("Google translation returned no result.")

    translated_parts = []

    for item in data[0]:
        if item and item[0]:
            translated_parts.append(item[0])

    result = "".join(translated_parts).strip()

    if not result:
        raise Exception("Empty translation received.")

    return result


# ---------------------------------------------------------
# MYMEMORY TRANSLATE FALLBACK
# ---------------------------------------------------------

def mymemory_translate(text, source, target):
    """
    MyMemory is used as a second translation provider.
    """

    url = "https://api.mymemory.translated.net/get"

    params = {
        "q": text,
        "langpair": f"{source}|{target}"
    }

    response = requests.get(
        url,
        params=params,
        timeout=20,
        headers={
            "User-Agent": "LangAI Translator/1.0"
        }
    )

    response.raise_for_status()

    data = response.json()

    if data.get("responseStatus") != 200:
        raise Exception(
            data.get("responseDetails", "MyMemory translation failed.")
        )

    translated = (
        data.get("responseData", {})
        .get("translatedText", "")
        .strip()
    )

    if not translated:
        raise Exception("MyMemory returned an empty translation.")

    return translated


# ---------------------------------------------------------
# TRANSLATE ROUTE
# ---------------------------------------------------------

@app.route("/translate", methods=["POST"])
def translate():

    try:

        data = request.get_json(silent=True)

        if not data:
            return jsonify({
                "success": False,
                "message": "Invalid request."
            }), 400

        text = str(data.get("text", "")).strip()
        source = str(data.get("source", "en")).strip()
        target = str(data.get("target", "hi")).strip()

        # ---------------------------------------------
        # VALIDATION
        # ---------------------------------------------

        if not text:
            return jsonify({
                "success": False,
                "message": "Please enter some text to translate."
            }), 400

        if source not in SUPPORTED_LANGUAGES:
            return jsonify({
                "success": False,
                "message": f"Unsupported source language: {source}"
            }), 400

        if target not in SUPPORTED_LANGUAGES:
            return jsonify({
                "success": False,
                "message": f"Unsupported target language: {target}"
            }), 400

        # ---------------------------------------------
        # SAME LANGUAGE
        # ---------------------------------------------

        if source == target:
            return jsonify({
                "success": True,
                "translation": text,
                "provider": "same-language"
            })

        source_code = SUPPORTED_LANGUAGES[source]
        target_code = SUPPORTED_LANGUAGES[target]

        # ---------------------------------------------
        # LIMIT EXTREMELY LARGE INPUT
        # ---------------------------------------------

        if len(text) > 5000:
            return jsonify({
                "success": False,
                "message": "Please keep the text below 5000 characters."
            }), 400

        # ---------------------------------------------
        # PROVIDER 1 - GOOGLE
        # ---------------------------------------------

        try:

            translated_text = google_translate(
                text,
                source_code,
                target_code
            )

            return jsonify({
                "success": True,
                "translation": translated_text,
                "provider": "Google Translate"
            })

        except Exception as google_error:

            print(
                "Google translation failed:",
                str(google_error)
            )

        # ---------------------------------------------
        # PROVIDER 2 - MYMEMORY
        # ---------------------------------------------

        try:

            translated_text = mymemory_translate(
                text,
                source_code,
                target_code
            )

            return jsonify({
                "success": True,
                "translation": translated_text,
                "provider": "MyMemory"
            })

        except Exception as memory_error:

            print(
                "MyMemory translation failed:",
                str(memory_error)
            )

        # ---------------------------------------------
        # BOTH SERVICES FAILED
        # ---------------------------------------------

        return jsonify({
            "success": False,
            "message": (
                "Both translation services are temporarily "
                "unavailable. Please check your internet "
                "connection and try again."
            )
        }), 503

    except Exception as error:

        print("Unexpected translation error:", str(error))

        return jsonify({
            "success": False,
            "message": "Translation server error. Please try again."
        }), 500


# ---------------------------------------------------------
# HEALTH CHECK
# ---------------------------------------------------------

@app.route("/health")
def health():

    return jsonify({
        "success": True,
        "service": "LangAI Translator",
        "status": "online"
    })


# ---------------------------------------------------------
# RUN
# ---------------------------------------------------------

if __name__ == "__main__":

    port = int(
        os.environ.get(
            "PORT",
            5000
        )
    )

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )