// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "signup-6b16b.firebaseapp.com",
  databaseURL: "https://signup-6b16b-default-rtdb.firebaseio.com",
  projectId: "signup-6b16b",
  storageBucket: "signup-6b16b.appspot.com",
  messagingSenderId: "980295878149",
  appId: "1:980295878149:web:e5231bec8ab6986e6d3e6c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
