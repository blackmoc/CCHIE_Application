#Hi from Habiba
from openai import OpenAI
import os
from flask import Flask, request, json;
from flask_cors import CORS

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
prompt = "Why is the sky blue?"
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello from Index!!"

@app.route("/api", methods = ["GET","POST"])
def call():
	url = 'https://api.openai.com/v1/chat/completions'
	headers = {
		'content-type': 'application/json; charset=utf-8',
		'Authorization': f"Bearer {OPENAI_API_KEY}"            
	}
	data = {
		'model': 'gpt-3.5-turbo',
		'messages': [
			{'role': 'system', 'content': 'You are an AI assistant that answers questions about anything.'},
			{'role': 'user', 'content': prompt}
		],
		'temperature': 1, 
		'max_tokens': 1000,
		'stream': False,            
	}
	response = request.post(url, headers=headers, data=json.dumps(data), stream=False)
	return response.choices[0].message.content

if __name__ == "__main__":
    app.run(debug=True);