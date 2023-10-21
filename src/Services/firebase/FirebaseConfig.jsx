// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWMqcvTwZAjdx2fMEY5lohHCgUOR-M_PE",
  authDomain: "proyectofinalrosa.firebaseapp.com",
  projectId: "proyectofinalrosa",
  storageBucket: "proyectofinalrosa.appspot.com",
  messagingSenderId: "85969463319",
  appId: "1:85969463319:web:9c800c34cdacd73c25d452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore (app)