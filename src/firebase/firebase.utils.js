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
var provider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });
//https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseGoogle = () =>
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });