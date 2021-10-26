import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGxI0ybtamhHfXktObvJ95pBaXoLAogss",
  authDomain: "contact-3980d.firebaseapp.com",
  projectId: "contact-3980d",
  storageBucket: "contact-3980d.appspot.com",
  messagingSenderId: "524713322077",
  appId: "1:524713322077:web:5162003a4c2e72e1d14fb4"
});

var db = firebaseApp.firestore();

export { db };
