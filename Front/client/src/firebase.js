// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgXFADv-5Tul4Ve5ElPqPG7mZr9zIoW-Q",
  authDomain: "databasewebeo.firebaseapp.com",
  projectId: "databasewebeo",
  storageBucket: "databasewebeo.appspot.com",
  messagingSenderId: "330027314795", 
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ¡Esta línea es crucial!