// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDsR4MrGD_giXrAAbeoeHS56Z7IrBhzELc",
  authDomain: "e-commerce-demo-5015c.firebaseapp.com",
  databaseURL: "https://e-commerce-demo-5015c.firebaseio.com",
  projectId: "e-commerce-demo-5015c",
  storageBucket: "e-commerce-demo-5015c.appspot.com",
  messagingSenderId: "919514342651",
  appId: "1:919514342651:web:6bd679a4ff0cff9e82bc5e",
  measurementId: "G-GWHZLPP0VJ",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//https://firebase.google.com/docs/auth/web/google-signin?authuser=0
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });
//https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const today = new Date();
    try {
      await userRef.set({
        username: userAuth.displayName,
        email: userAuth.email,
        creatdate: today,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//the below code is to add the SHOP_DATA (processed by selector 'selectShoplist',hence a list)
//to firestore in batch
//it is used once only to upload the data programmatically
export const addCollectionsObjects = async (collectionID, objsListToAdd) => {
  const collectionRef = firestore.collection(collectionID);
  const batch = firestore.batch();
  objsListToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
  console.log("batch uploaded!");
};

export const convertCollectionSnapshotToObject = (collectionSnapshot) => {
  return collectionSnapshot.docs.reduce((acc, doc) => {
    acc[doc.data().title.toLowerCase()] = doc.data();
    return acc;
  }, {});
};

//the below lines are hard to understand. By simply attaching a listener (i.e. onAuthStateChanged) to auth to variable this.unsubscribe
//the listener is in effect and will run whenever there is a change in Auth state
//Also,  auth.onAuthStateChanged() return a function which when run, will stop (i.e. unsubscribe) the listener
//Hence the unsubscribe() to prevent listening since we only want one time check
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      resolve(userAuth);
      unsubscribe();
    }, reject);
  });
};
