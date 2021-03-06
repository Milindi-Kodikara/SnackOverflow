from marketing_notifications_python.models import app_db

db = app_db()

class Student (db.Model):
    def __init__ (self, student_id:str,firstName:str,lastName: str,birthday: datetime,location:str, email:str,disadvantaged:bool):
        self.student_id = student_id
        self.firstName = firstName
        self.lastName = lastName
        self.birthday = birthday
        self.location = location
        self.email = email
        self.phone_number = phoneNum
        self.disadvantaged = disadvantaged



    __tablename__ = "subscribers"

    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.String, nullable=False)
    subscribed = db.Column(db.Boolean, nullable=False, default=True)

    def __repr__(self):
        return '<Subscriber %r %r>' % self.phone_number, self.subscribed
