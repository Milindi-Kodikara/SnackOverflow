from flask import Flask
from flask_restful import Resource, Api
from firebase_util import firebase
from datetime import datetime, date
import json
from tutor import Tutor

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self): 

        return {'hello': 'world'}

class Twilio(Resource):
    def get(self,search_term): 
        print(search_term)
        if search_term == 'bob':
            firebase.database().child('students').child(search_term)
            return {'hello': search_term}

api.add_resource(HelloWorld, '/')
api.add_resource(Twilio, '/twilio/<search_term>')


"""Premade tutors in the 'tutor' realtime firebase database"""

tut= Tutor("Phara","Tut", 35.0,"remote", "Carlton", "misstut@hotmail.com","+61481893345",5,
"An enthustiastic and knowledgeable maths tutor. Prior expereince at Melbourne High School.", 
["Maths", "Methods", "Specialist", "Further"], [10,11,12], False)

ben= Tutor('Ben','Cash',10.0,"remote","Clayton", 'bcash88@gmail.com',"+61482293045",1,
"Highest scoring student at Jon Monash High School 2019. Currently studying Bachelor of Computer Science at Monash University.", 
["History"], [7,8], False)

candice= Tutor('Candice','Wong',25.0, "in person","Epping",'candicewong88@gmail.com',"+61432191045",4,
"Passionate about literature and story telling. Poet laureate.", 
["English"], [7,8,9,10,11,12], True)



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
    db.child("tutors").push(tut.__dict__)
    db.child("tutors").push(ben.__dict__)
    db.child("tutors").push(candice.__dict__)
    app.run(debug=True)