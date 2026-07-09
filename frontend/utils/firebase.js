// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiex-20bb2.firebaseapp.com",
  projectId: "aiex-20bb2",
  storageBucket: "aiex-20bb2.firebasestorage.app",
  messagingSenderId: "668436179452",
  appId: "1:668436179452:web:3bcb1dc41533d288eaaa79",
  measurementId: "G-KP0XDDZS1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider()