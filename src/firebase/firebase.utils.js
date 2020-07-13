import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGU1791V59kPUJWAtKH1_UdbYsn9d4250",
    authDomain: "buy-db.firebaseapp.com",
    databaseURL: "https://buy-db.firebaseio.com",
    projectId: "buy-db",
    storageBucket: "buy-db.appspot.com",
    messagingSenderId: "503491546527",
    appId: "1:503491546527:web:0ff9640df6daaf832741aa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;