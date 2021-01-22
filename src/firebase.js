import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGK6mJoFiEvrCQ1MzHO9aH8Qoz-efUU7A",
  authDomain: "slack-d4b5c.firebaseapp.com",
  projectId: "slack-d4b5c",
  storageBucket: "slack-d4b5c.appspot.com",
  messagingSenderId: "443347246416",
  appId: "1:443347246416:web:358a8c78eab9d1f6ffa055",
  measurementId: "G-Q7ZV20JQ6Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore() 
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;