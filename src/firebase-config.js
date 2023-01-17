// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjexcSuKEUcZpg_5YNLNzJ2o4tqiUbHiY",
  authDomain: "connect-64710.firebaseapp.com",
  projectId: "connect-64710",
  storageBucket: "connect-64710.appspot.com",
  messagingSenderId: "321886129959",
  appId: "1:321886129959:web:9f38111e46c5ea8910e302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db ;