

from datetime import date,datetime

class Student:
    def __init__ (self, student_id:str,firstName:str,lastName: str,birthday: datetime,location:str, email:str,phone_number: str,disadvantaged:bool):
        self.student_id = student_id
        self.firstName = firstName
        self.lastName = lastName
        self.birthday = birthday
        self.location = location
        self.email = email
        self.phone_number = phone_number
        self.disadvantaged = disadvantaged



   
