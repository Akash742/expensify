// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmBntMVBqInxbnLi--Ll-WLlBPcn2IlY",
  authDomain: "expensify-fae4a.firebaseapp.com",
  projectId: "expensify-fae4a",
  storageBucket: "expensify-fae4a.appspot.com",
  messagingSenderId: "1072624363314",
  appId: "1:1072624363314:web:0bb9dafbeae4fa2711592b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;