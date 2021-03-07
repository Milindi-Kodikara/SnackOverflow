from flask import Flask
from flask_restful import Resource, Api
#from flask.ext.restful import (reqparse, abort, fields, marshal_with,marshal)
from firebase_util import firebase as app
from firebase_admin import db
from datetime import datetime, date
import json
from tutor import Tutor

from student import Student

import twilio_booking_sms as sms
from twilio_booking_sms import create_message
#import twilioServices as tws

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self): 

        return {'hello': 'world'}

class Twilio(Resource):
    
    def get(self,search_term,student_id,subject,tutor_id,tute_datetime): 
        
        print(search_term)
        print(tutor_id)
        print(tute_datetime)
        if search_term == 'remind-session':
            student = db.reference('students/'+student_id).get()
            tutor = db.reference('tutors/'+tutor_id).get()
            
            
            create_message(student['student_id'], subject, tutor.get(tutor_id), tute_datetime, tutor['phoneNum'])
            
        return {'student': student_id,'tutor': tutor_id, 'date': tute_datetime}
            
    

api.add_resource(HelloWorld, '/')
api.add_resource(Twilio, '/<search_term>/<student_id>/<subject>/<tutor_id>/<tute_datetime>')





"""Premade tutors in the 'tutors' table realtime firebase database and the """

tut= Tutor("t567","Phara","Tut", 35.0,"remote", "Carlton", "misstut@hotmail.com","+61481317825",5,
"An enthustiastic and knowledgeable maths tutor. Prior expereince at Melbourne High School.", 
["Maths", "Methods", "Specialist", "Further"], [10,11,12], False)

ben= Tutor("t443", 'Ben','Cash',10.0,"remote","Clayton", 'bcash88@gmail.com',"+61466628452",1,
"Highest scoring student at Jon Monash High School 2019. Currently studying Bachelor of Computer Science at Monash University.", 
["History"], [7,8], False)

candice= Tutor("t221",'Candice','Wong',25.0, "in person","Epping",'candicewong88@gmail.com',"+61423040502",4,
"Passionate about literature and story telling. Poet laureate.", 
["English"], [7,8,9,10,11,12], True)

d = datetime.strptime("20.12.2010 09:38:42,76", "%d.%m.%Y %H:%M:%S,%f").strftime('%s.%f')
stud= Student("s888","Stud", "Sims", d,"Hawthorn", "stud@gmail.com", "+61481317825",False)



if __name__ == '__main__':
    d = datetime.strptime("20.12.2010 09:38:42,76", "%d.%m.%Y %H:%M:%S,%f").strftime('%s.%f')
    
    # db.reference("students").push(stud.__dict__)
    # db.reference("tutors").push(tut.__dict__)
    # db.reference("tutors").push(ben.__dict__)
    # db.reference("tutors").push(candice.__dict__)
    

    
   
    app.run(debug=True)