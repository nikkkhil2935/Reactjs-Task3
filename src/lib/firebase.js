// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXy3wiev_a1krPQLuzJ8A2zg4RwFWAv-M",
    authDomain: "blog-677dd.firebaseapp.com",
    projectId: "blog-677dd",
    storageBucket: "blog-677dd.appspot.com",
    messagingSenderId: "917026219500",
    appId: "1:917026219500:web:0400ccd9030efd9e48ccc9",
    measurementId: "G-Q9PBDXCQCN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)