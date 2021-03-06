import React, {createContext, useContext, useEffect, useState} from 'react';
import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

app.initializeApp({
    apiKey: "AIzaSyAmuMf08kNMifi0_Nm2xdqI4jgnmO6UW0U",
    authDomain: "tutebite-b1258.firebaseapp.com",
    databaseURL: "https://tutebite-b1258-default-rtdb.firebaseio.com",
    projectId: "tutebite-b1258",
    storageBucket: "tutebite-b1258.appspot.com",
    messagingSenderId: "774189158027",
    appId: "1:774189158027:web:dc82e460b48daed95c8e8e"
});

const context = createContext({user: null});
export default context;
export const useSession = () => {
    const {user} = useContext(context);
    return user
}
export const useAuth = () => {
    const [state, setState] = useState(() => {
        const user = app.auth().currentUser;
        return {initializing: !user, user,}
    })

    function onChange(user) {
        setState({initializing: false, user})
    }

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = app.auth().onAuthStateChanged(onChange)
        // unsubscribe to the listener when unmounting
        return () => unsubscribe()
    }, [])

    return state
}
const googleProvider = new app.auth.GoogleAuthProvider();

export function loginWithGoogle() {
    app.auth()
        .signInWithPopup(googleProvider)
        .then(async (result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            await app.database().ref(`students/${user.uid}`).set({googleToken: token, foo: 5});
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log({errorCode, errorMessage, email, credential, error})
    });
}
