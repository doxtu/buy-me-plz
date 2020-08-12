import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
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

export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    Object.keys(documentsToAdd).map((documentId) => ({
        title: documentsToAdd[documentId].title,
        items: documentsToAdd[documentId].items
    })).forEach(document => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, document);
    });

    return batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(document => {
        const { title, items } = document.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: document.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;