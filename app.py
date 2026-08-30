from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# MyMemory Translation API
TRANSLATION_URL = "https://api.mymemory.translated.net/get"


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/test-translation")
def test_translation():
    try:
        response = requests.get(
            TRANSLATION_URL,
            params={
                "q": "Hello",
                "langpair": "en|hi"
            },
            timeout=30
        )

        return jsonify({
            "status_code": response.status_code,
            "response": response.text[:2000]
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


@app.route("/translate", methods=["POST"])
def translate():

    try:
        data = request.get_json()

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

        # MyMemory uses language pairs such as en|hi
        lang_pair = f"{source}|{target}"

        params = {
            "q": text,
            "langpair": lang_pair
        }

        response = requests.get(
            TRANSLATION_URL,
            params=params,
            timeout=30
        )

        if response.status_code != 200:
            return jsonify({
                "success": False,
                "message": "Translation service is currently unavailable."
            }), 503

        result = response.json()

        response_data = result.get("responseData", {})

        translated_text = response_data.get(
            "translatedText",
            ""
        ).strip()

        if not translated_text:

            return jsonify({
                "success": False,
                "message": "Translation could not be completed."
            }), 500

        return jsonify({
            "success": True,
            "translation": translated_text
        })

    except requests.exceptions.Timeout:

        return jsonify({
            "success": False,
            "message": "Translation request timed out. Please try again."
        }), 504

    except requests.exceptions.RequestException:

        return jsonify({
            "success": False,
            "message": "Could not connect to translation service."
        }), 503

    except Exception as e:

        return jsonify({
            "success": False,
            "message": f"Unexpected error: {str(e)}"
        }), 500

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
    app.run(debug=True)