# Download the helper library from https://www.twilio.com/docs/python/install
"""Based on Twilio code for Create a Message https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource
"""
import os
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'AC9ef59ab76473ee2130fb6aa2af88bca3'
auth_token = '8cfc1f69f86980f79a50d67b34721770'
client = Client(account_sid, auth_token)



def create_message(student_id, subject, tute_datetime, phone_number):
    message = client.messages.create(
                                from_='+13864015634',
                                body='You have a tutorial booking with '+ str(student_id)+
                                'for '+ str(subject) + ' at '+ str(tute_datetime) +'.'+ ' Do you accept yes or no?' ,
                                to='+61481317825'
                            )

    print(message.sid)

create_message('s384', 'maths', '20-12-2021')