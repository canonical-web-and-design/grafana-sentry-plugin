from flask import Flask
import requests
app = Flask(__name__)

@app.route("/")
def hello():
    return requests.get('https://sentry.io/api/0/projects/').content