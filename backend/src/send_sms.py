from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC9ef59ab76473ee2130fb6aa2af88bca3"
# Your Auth Token from twilio.com/console
auth_token  = "8cfc1f69f86980f79a50d67b34721770"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+61481317825", 
    from_="+13864015634",
    body="Hello from Python, it's Steph!")

print(message.sid)
#"Print message"