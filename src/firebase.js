import firebase from "firebase";
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyA8sZrP0n23kvysTM9aHux1vtwL4UN_LW8",
  authDomain: "i-got-the-answer.firebaseapp.com",
  databaseURL: "https://i-got-the-answer-default-rtdb.firebaseio.com",
  projectId: "i-got-the-answer",
  storageBucket: "i-got-the-answer.appspot.com",
  messagingSenderId: "485172474700",
  appId: "1:485172474700:web:ae053d0e470239bc0e15e9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();


export { auth, provider };
export default db;


