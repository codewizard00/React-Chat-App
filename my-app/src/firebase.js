import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAa_xc5J5GmZ7YIKDBCUnUqprqNtLYcgg4",
    authDomain: "chatapp-8ce42.firebaseapp.com",
    projectId: "chatapp-8ce42",
    storageBucket: "chatapp-8ce42.appspot.com",
    messagingSenderId: "489897099496",
    appId: "1:489897099496:web:6016feddab221184f4495d"
  }).auth();
