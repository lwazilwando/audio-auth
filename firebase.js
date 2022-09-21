// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpcW5VDULn1BlBv6aZ3-jPagghXItIjAQ",
  authDomain: "audio-auth.firebaseapp.com",
  projectId: "audio-auth",
  storageBucket: "audio-auth.appspot.com",
  messagingSenderId: "428618008976",
  appId: "1:428618008976:web:4dc985585952da723a8b15"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export { auth } ;
