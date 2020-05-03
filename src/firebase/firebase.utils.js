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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) 
        return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error in Creating User', error.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async(collectionKey, ObjectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    ObjectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
}

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections
        .docs
        .map(doc => {
            const {title, items} = doc.data();

            return {
                routeNam: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            }
        })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[
            collection
                .title
                .toLowerCase()
        ] = collection;
        return accumulator;
    }, {})

}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase
    .auth
    .GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
