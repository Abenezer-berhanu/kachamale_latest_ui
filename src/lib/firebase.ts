import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCaWOcqrifcjNsAPCIqYpdk-AOlRz8ZPSo",
  authDomain: "etcarwow.firebaseapp.com",
  projectId: "etcarwow",
  storageBucket: "etcarwow.firebasestorage.app",
  messagingSenderId: "724667441451",
  appId: "1:724667441451:web:4be44bcda8da962574656e",
  measurementId: "G-C7V13N5WPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore instance

