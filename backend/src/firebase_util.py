import pyrebase

config = {
    "apiKey": "AIzaSyAmuMf08kNMifi0_Nm2xdqI4jgnmO6UW0U",
    "authDomain": "tutebite-b1258.firebaseapp.com",
    "projectId": "tutebite-b1258",
    "storageBucket": "tutebite-b1258.appspot.com",
    "messagingSenderId": "774189158027",
    "appId": "1:774189158027:web:dc82e460b48daed95c8e8e",
    "databaseURL": "https://tutebite-b1258-default-rtdb.firebaseio.com/"
}

firebase = pyrebase.initialize_app(config)
