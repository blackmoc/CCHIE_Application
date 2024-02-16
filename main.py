#Hi from Habiba
from openai import OpenAI

from flask import Flask, jsonify;
client = OpenAI()

app = Flask(__name__);

@app.route("/apicall", methods = ["POST", "GET"])
def call():
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
            "role": "system",
            "content": "You are a helpful assistant."
            },
            {
            "role": "user",
            "content": "Why is the sky blue?"
            }
        ],
        temperature=0.75,
        max_tokens=256,
        top_p=0.5,
        frequency_penalty=0,
        presence_penalty=0.25
    )
    content = response.choices[0].message.content
    return jsonify(content)

if __name__ == "__main__":
    app.run(debug=True);