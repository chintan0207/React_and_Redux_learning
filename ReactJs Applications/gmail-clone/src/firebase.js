/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCndt99MruF_4QIcYGdXp21sz5kJlr1EtY",
  authDomain: "clone-5f65a.firebaseapp.com",
  projectId: "clone-5f65a",
  storageBucket: "clone-5f65a.appspot.com",
  messagingSenderId: "867457002778",
  appId: "1:867457002778:web:cbf6175e3d1e24f2bfd0a3",
  measurementId: "G-CPKG9ZQYVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
