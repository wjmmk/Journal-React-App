import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyBmi4Ee_A7G1aCQlO2nMI_dc7CUfkg-LzM",
  authDomain: "react-journal-app-4ec75.firebaseapp.com",
  projectId: "react-journal-app-4ec75",
  storageBucket: "react-journal-app-4ec75.appspot.com",
  messagingSenderId: "116391845449",
  appId: "1:116391845449:web:ba9dc6e8431952787ba998"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const provider = new GoogleAuthProvider();


export {firebaseApp, db, provider}