// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp3VHzljRqKPmaNRyL8Yrx9QQ3ouAG5xI",
  authDomain: "react-cursos-3755c.firebaseapp.com",
  projectId: "react-cursos-3755c",
  storageBucket: "react-cursos-3755c.firebasestorage.app",
  messagingSenderId: "149842203118",
  appId: "1:149842203118:web:8b2621c8f80453523afeff"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);