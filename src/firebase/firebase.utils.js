import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcwWZy5ovaiCG6GO2dOWBKN8W5M_d8yZc",
    authDomain: "urban-clothing-db.firebaseapp.com",
    databaseURL: "https://urban-clothing-db.firebaseio.com",
    projectId: "urban-clothing-db",
    storageBucket: "urban-clothing-db.appspot.com",
    messagingSenderId: "1035834470038",
    appId: "1:1035834470038:web:5bba63bc2315b830aa9cb7",
    measurementId: "G-JDFEBQHSFF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;