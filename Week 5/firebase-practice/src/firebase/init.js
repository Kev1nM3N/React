// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5f2TfwEyJZqRXUnRYJA4aNye3dKoZFqY",
  authDomain: "fir-practice-3269b.firebaseapp.com",
  projectId: "fir-practice-3269b",
  storageBucket: "fir-practice-3269b.appspot.com",
  messagingSenderId: "891068698205",
  appId: "1:891068698205:web:b65335ab6044ac4a2d47b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()