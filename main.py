#Hi from Habiba
#Hi from Essence
from flask import Flask, jsonify, request
import openai
from flask_cors import CORS, cross_origin

openai.api_key = ""

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type: "application/json" '

@app.route('/gpt3', methods=["POST"])
@cross_origin()
def genGPT3():
    try:
        question = request.json.get('question')
        completion = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
            {
            "role": "system",
            "content": "You are a helpful, respectful and honest assistant for Carnegie Classifications. Always answer as helpfully as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature."
            },
            {
            "role": "user",
            "content": question
            }
        ],
            temperature=1.25,
            top_p=0.5,
            frequency_penalty=0.75,
            presence_penalty=0.25
        )
        response = completion.choices[0].message.content
        return response, 200

    except Exception as e:
        print("Error:", e)
        return jsonify(error=str(e)), 500

@app.route('/ft', methods=["POST"])   
def genFTGPT():
    try: 
        question = request.json.get('question')
        completion = openai.chat.completions.create(
        model="ft:gpt-3.5-turbo-0613:personal::89GHqJgX",
        messages=[
            {
            "role": "system",
            "content": "You are a helpful, respectful and honest assistant for Carnegie Classifications. Always answer as helpfully as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature."
            },
            {
            "role": "user",
            "content": question
            }
        ],
        temperature=1.25,
        top_p=0.5,
        frequency_penalty=0.75,
        presence_penalty=0.25
    )
        response = completion.choices[0].message.content
        return response, 200

    except Exception as e:
        print("Error:", e)
        return jsonify(error=str(e)), 500

if __name__== '__main__':
	app.run(debug=True)
