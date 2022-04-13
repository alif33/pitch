// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVUk3ub1Yt1pmgeUmfHkoIlkZ4GYc3cu0",
  authDomain: "pitch-1cdd2.firebaseapp.com",
  projectId: "pitch-1cdd2",
  storageBucket: "pitch-1cdd2.appspot.com",
  messagingSenderId: "478238467482",
  appId: "1:478238467482:web:90392d65e30ce7c3140623",
  measurementId: "G-R93B44SNL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;

