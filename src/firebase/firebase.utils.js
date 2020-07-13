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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const documentReference = firestore.doc(`users/${userAuth.uid}`);

    const documentSnapshot = await documentReference.get();

    if(!documentSnapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await documentReference.set({displayName, email, createdAt, ...additionalData})
        } catch(err) {
            console.err(err);
        }
    }

    return documentReference;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;