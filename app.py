from flask import Flask, render_template, request, jsonify
from deep_translator import GoogleTranslator
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/translate", methods=["POST"])
def translate():
    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "Invalid request."
            }), 400

        text = data.get("text", "").strip()
        source = data.get("source", "en")
        target = data.get("target", "hi")

        if not text:
            return jsonify({
                "success": False,
                "message": "Please enter some text to translate."
            }), 400

        # Same language
        if source == target:
            return jsonify({
                "success": True,
                "translation": text
            })

        # Translate using Google Translate through deep-translator
        translated_text = GoogleTranslator(
            source=source,
            target=target
        ).translate(text)

        if not translated_text:
            return jsonify({
                "success": False,
                "message": "Translation could not be completed."
            }), 500

        return jsonify({
            "success": True,
            "translation": translated_text
        })

    except Exception as e:
        print("Translation error:", str(e))

        return jsonify({
            "success": False,
            "message": "Translation service is currently unavailable."
        }), 503


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)