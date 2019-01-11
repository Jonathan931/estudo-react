import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBPOAz1SHFp99ghGM7aJ33eEQxyAH2kUSE",
  authDomain: "marioplan-808b1.firebaseapp.com",
  databaseURL: "https://marioplan-808b1.firebaseio.com",
  projectId: "marioplan-808b1",
  storageBucket: "marioplan-808b1.appspot.com",
  messagingSenderId: "822075331431"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;