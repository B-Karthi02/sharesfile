// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmcB1zNFrQDN7eCh7z1XZ9bjXLUp2vi_w",
  authDomain: "sharefile-d4c5d.firebaseapp.com",
  projectId: "sharefile-d4c5d",
  storageBucket: "sharefile-d4c5d.appspot.com",
  messagingSenderId: "513562122043",
  appId: "1:513562122043:web:900639cfe04529be11491e",
  measurementId: "G-ZQRR7F9EBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db}