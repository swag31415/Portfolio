// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, deleteDoc, updateDoc, query, where, orderBy, limit, startAt, endAt } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
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

// Export the good stuff
window.Firebase = {
  auth: {
    login: function (email, password) {
      return signInWithEmailAndPassword(auth, email, password)
    },
    logout: function () {
      return auth.signOut()
    },
    set_on_auth_change: function (func) {
      return onAuthStateChanged(auth, func)
    }
  },
  firestore: {
    add: function (collection_name, data, doc_id) {
      if (doc_id) return setDoc(doc(db, collection, doc_id), data)
      else return addDoc(collection(db, collection_name), data)
    },
    update: function (collection_name, doc_id, data) {
      return updateDoc(doc(db, collection_name, doc_id), data)
    },
    drop: function (collection_name, doc_id) {
      return deleteDoc(doc(db, collection_name, doc_id))
    },
    get: function (collection_name, doc_id, conditions, orders, count, start, end) {
      if (doc_id) return getDoc(doc(db, collection_name, doc_id)).then(function (snap) {
        if (snap.exists()) return snap
        else throw Error('No such document')
      })
      else {
        if (conditions || orders || count || start || end) {
          let params = [...conditions.map(cond => where(...cond)), ...orders.map(ord => orderBy(...ord))]
          if (count) params.push(limit(count))
          if (start) params.push(startAt(start))
          if (end) params.push(endAt(end))
          return getDocs(query(collection(db, collection_name), ...params)).then(q => q.docs)
        }
        else return getDocs(collection(db, collection_name)).then(q => q.docs)
      }
    }
  },
  analytics: {
    log: function (event, params) {
      return logEvent(analytics, event, params)
    }
  }
}