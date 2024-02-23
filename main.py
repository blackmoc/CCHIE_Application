import requests
from openai import OpenAI
from flask import Flask, jsonify, request

app = Flask(__name__)
OPENAI_API_KEY = "PLACE_YOUR_API_KEY_HERE"
client = OpenAI(api_key=OPENAI_API_KEY)

@app.route("/apicall", methods=["POST"])
def generate_response():
    user_question = request.json.get("user_question")

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_API_KEY}"
    }

    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "This factual chatbot provides an exact response based solely on data with sources. Make sure that all responses fit within the max tokens and end as a full sentence."
            },
            {
                "role": "user",
                "content": user_question
            }
        ],
        "temperature": 1,
        "max_tokens": 100,
        "top_p": 0.75,
        "frequency_penalty": 0.1,
        "presence_penalty": 0
    }

    try:
        response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=data)
        response.raise_for_status()  # Raise an exception for 4xx or 5xx status codes
        data = response.json()
        return jsonify(data["choices"][0]["message"]["content"])
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
