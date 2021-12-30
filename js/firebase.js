// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX6GSS6lKTQedWnAEfLWx78zEtL__x7Cc",
  authDomain: "swag-site-bc744.firebaseapp.com",
  projectId: "swag-site-bc744",
  storageBucket: "swag-site-bc744.appspot.com",
  messagingSenderId: "402877506423",
  appId: "1:402877506423:web:f2d4f93164d84399cbf772",
  measurementId: "G-7FK3L4TZBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);