// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app";
//import firebase from 'firebase';
//import 'firebase/firestore'
//import 'firebase/firebase-auth'
  import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
require('firebase/compat/firestore');
require ('firebase/compat/storage');
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from "./store";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc6k9wfoXgC4gaYvFaRcPzCBlntL0H7EU",
  authDomain: "eli-shop.firebaseapp.com",
  projectId: "eli-shop",
  storageBucket: "eli-shop.appspot.com",
  messagingSenderId: "532766581217",
  appId: "1:532766581217:web:2ed2f79ba64ff34ba4f2a0"
};

// Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();

export { fb, db }

//  onAuthStateChanged(getAuth(), async (user) => {
//   const tokenResult = user
//     ? await getAuth().currentUser.getIdTokenResult()
//     : { claims: null };

//   store.dispatch("fetchUser", { user, claims: tokenResult.claims });
// });
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

