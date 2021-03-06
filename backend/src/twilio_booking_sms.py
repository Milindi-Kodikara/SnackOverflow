# Download the helper library from https://www.twilio.com/docs/python/install
"""Based on Twilio code for Create a Message https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource
"""
import os
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['AC9ef59ab76473ee2130fb6aa2af88bca3']
auth_token = os.environ['8cfc1f69f86980f79a50d67b34721770']
client = Client(account_sid, auth_token)

message = client.messages.create(
                              from_='+1 386 401 5634',
                              body='You have a tutorial booking with',
                              to='+15558675310'
                          )

print(message.sid)