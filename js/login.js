// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq75IO3RJWeLErzkDkkKnbBue8rHNLfNQ",
  authDomain: "bankous-37a5f.firebaseapp.com",
  projectId: "bankous-37a5f",
  storageBucket: "bankous-37a5f.appspot.com",
  messagingSenderId: "457344268462",
  appId: "1:457344268462:web:e4b0242f7a68863ae5553f",
  measurementId: "G-V715DCRLC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);