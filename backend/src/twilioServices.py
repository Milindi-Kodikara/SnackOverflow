from marketing_notifications_python.twilio import account_sid,auth_token,phone_number
from twilio.twiml.messaging_response import MessagingResponse
from twilio

    """Code based from twilio programmable SMS 
    https://www.twilio.com/docs/sms/tutorials/marketing-notifications-python-flask?code-sample=code-create-a-twiml-response-containing-our-message&code-language=Python&code-sdk-version=default

    Returns:
        [type]: [description]
    """
class TwilioServices: 

    def __init__(self):
        if TwiliowServices.twilio_client is None: 
            self.TwiliowServices = Client()
    
    def send_message(self, to, message):
        self.twilio_client.messages.create(
            to=to,
            from_=phone_number(),
            body=message
        )
    def respond_message(self, message):
        response = MessagingResponse()
        response.message(message)
        return response