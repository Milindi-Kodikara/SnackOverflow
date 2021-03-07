import firebase_admin
from firebase_admin import credentials
import os 
dirname = os.path.dirname(__file__)


cred = credentials.Certificate(os.path.join(dirname,'cred.json'))


config = {
    "apiKey": "AIzaSyAmuMf08kNMifi0_Nm2xdqI4jgnmO6UW0U",
    "authDomain": "tutebite-b1258.firebaseapp.com",
    "projectId": "tutebite-b1258",
    "storageBucket": "tutebite-b1258.appspot.com",
    "messagingSenderId": "774189158027",
    "appId": "1:774189158027:web:dc82e460b48daed95c8e8e",
    "databaseURL": "https://tutebite-b1258-default-rtdb.firebaseio.com/"
}

firebase = firebase_admin.initialize_app(cred,config)


