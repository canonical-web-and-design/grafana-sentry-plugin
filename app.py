import flask
from flask_cors import CORS
import requests

app = flask.Flask(__name__)
CORS(app)

@app.route("/")
def hello():

    token = flask.request.args.get('token', default='', type=str)
    header = {
        "Authorization": "Bearer " + token
    }

    response = requests.get(
        url="https://sentry.io/api/0/projects/canonical-bm/snapcraftio/issues/",
        headers=header)
    print(response.json())
    return flask.jsonify(response.json())
