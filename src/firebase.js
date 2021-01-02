import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC6CtvwdTORcUIl0jHS9flX5TQDC487-8k",
    authDomain: "whatsapp-clone-53d8c.firebaseapp.com",
    projectId: "whatsapp-clone-53d8c",
    storageBucket: "whatsapp-clone-53d8c.appspot.com",
    messagingSenderId: "1085429717679",
    appId: "1:1085429717679:web:70e3f180cd8385cd0f525a",
    measurementId: "G-9WX8PYYN8H"
};


const firebaseApp  = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;