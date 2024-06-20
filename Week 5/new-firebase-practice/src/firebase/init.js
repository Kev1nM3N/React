// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-SR9MUqzJpgPnyDL_rJX_Ik3Xt7z1SCI",
  authDomain: "new-firebase-practice-6078f.firebaseapp.com",
  projectId: "new-firebase-practice-6078f",
  storageBucket: "new-firebase-practice-6078f.appspot.com",
  messagingSenderId: "686375031706",
  appId: "1:686375031706:web:8f215382e4d2ce8dcc2023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();