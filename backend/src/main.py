from flask import Flask
from flask_restful import Resource, Api
from firebase_util import firebase
from datetime import datetime, date
import json

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')


if __name__ == '__main__':
    db = firebase.database()
    d = datetime.strptime("20.12.2010 09:38:42,76", "%d.%m.%Y %H:%M:%S,%f").strftime('%s.%f')
    data = {"firstName": "Mort",
        "lastName": "Smith", 
        "birthday": int(float(d)*1000),
        "email": "mortSmith@gmail.com", 
        "gender": "Male", 
        "location": "Carlton", 
        "disadvantaged": False}
    db.child("users").push(data)
    app.run(debug=True)