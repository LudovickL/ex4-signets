import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBOlzfI2KFofrzdabWQGNDnnNaBd0VIE_U",
  authDomain: "pvt-h21-luberisse-ludovick.firebaseapp.com",
  databaseURL: "https://pvt-h21-luberisse-ludovick-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-luberisse-ludovick",
  storageBucket: "pvt-h21-luberisse-ludovick.appspot.com",
  messagingSenderId: "148589257484",
  appId: "1:148589257484:web:6911a255da88076cc7df29",
  measurementId: "G-7E4KNNT45H"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
