from flask import Flask
from flask_restful import Resource, Api
#from flask.ext.restful import (reqparse, abort, fields, marshal_with,marshal)
from firebase_util import firebase
from datetime import datetime, date
import json
from tutor import Tutor

import twiliow_booking_sms as sms
import twilioServices as tws

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self): 

        return {'hello': 'world'}

class Twilio(Resource):
    def get(self,search_term,student_id,tutor_id,tute_datetime): 
        print(search_term)
        print(tutor_id)
        print(tute_datetime)
        if search_term == 'remind-session':
            student = db.child('students').child(student_id)
            tutor = db.child('tutors').child(tutor_id)
            # Read user with id
            # tutor = db. # Read tutor with id
            #firebase.database().child('students').child(search_term)
            return {'student': student_id,'tutor': tutor_id, 'date': tute_datetime}
        else: 
            return "Invalid booking!"

api.add_resource(HelloWorld, '/')
api.add_resource(Twilio, '/<search_term>/<student_id>/<tutor_id>/<tute_datetime>')
tws.send_message(tws, Twilio.get('student'),Twilio.get()




"""Premade tutors in the 'tutor' realtime firebase database"""

tut= Tutor("t567","Phara","Tut", 35.0,"remote", "Carlton", "misstut@hotmail.com","+61481317825",5,
"An enthustiastic and knowledgeable maths tutor. Prior expereince at Melbourne High School.", 
["Maths", "Methods", "Specialist", "Further"], [10,11,12], False)

ben= Tutor("t443", 'Ben','Cash',10.0,"remote","Clayton", 'bcash88@gmail.com',"+61482293045",1,
"Highest scoring student at Jon Monash High School 2019. Currently studying Bachelor of Computer Science at Monash University.", 
["History"], [7,8], False)

candice= Tutor("t221",'Candice','Wong',25.0, "in person","Epping",'candicewong88@gmail.com',"+61432191045",4,
"Passionate about literature and story telling. Poet laureate.", 
["English"], [7,8,9,10,11,12], True)



if __name__ == '__main__':
    db = firebase.database()
    d = datetime.strptime("20.12.2010 09:38:42,76", "%d.%m.%Y %H:%M:%S,%f").strftime('%s.%f')
    # data = {"firstName": "Mort",
    #     "lastName": "Smith", 
    #     "birthday": int(float(d)*1000),
    #     "email": "mortSmith@gmail.com", 
    #     "gender": "Male", 
    #     "location": "Carlton", 
    #     "disadvantaged": False}
    # db.child("tutors").push(tut.__dict__)
    # db.child("tutors").push(ben.__dict__)
    # db.child("tutors").push(candice.__dict__)

    
   
    app.run(debug=True)