import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBHGE9nyq3AMfZq-GvaZDisdMihs9pWUg4",
  authDomain: "gerfin-c1d1b.firebaseapp.com",
  databaseURL: "https://gerfin-c1d1b.firebaseio.com",
  projectId: "gerfin-c1d1b",
  storageBucket: "gerfin-c1d1b.appspot.com",
  messagingSenderId: "121768906369",
  appId: "1:121768906369:web:ab91f4c86b1a5ecc"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
