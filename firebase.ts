// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOmh0SWGa5Pwq_XZUTIVK5n35D4oXHa2E",
  authDomain: "netflix-in-next.firebaseapp.com",
  projectId: "netflix-in-next",
  storageBucket: "netflix-in-next.appspot.com",
  messagingSenderId: "1077880204112",
  appId: "1:1077880204112:web:8db6768dd46d7b7ba49a55",
  measurementId: "G-RJFDNT080T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore();
// const analytics = getAnalytics(app);

export default app;
export { auth, db }