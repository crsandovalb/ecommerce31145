
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQs5IyCRO-7qIxG5plAEN8_3es1NHfdGI",
  authDomain: "ecommerce31145-6c0b5.firebaseapp.com",
  projectId: "ecommerce31145-6c0b5",
  storageBucket: "ecommerce31145-6c0b5.appspot.com",
  messagingSenderId: "453001779884",
  appId: "1:453001779884:web:f921801c5337fee79fdd09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);