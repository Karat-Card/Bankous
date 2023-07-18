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

function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form elements
  var emailInput = document.getElementById("wf-log-in-email");
  var passwordInput = document.getElementById("wf-log-in-password");

  // Get the input values
  var email = emailInput.value;
  var password = passwordInput.value;

  // Optional: Perform form validation before making the login request
  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  // Perform login with Firebase Authentication
  auth.signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Login successful
      var user = userCredential.user;
      console.log("Logged in user:", user);

      // Optional: Redirect to another page after successful login
      window.location.href = "/dashboard.html";
    })
    .catch(function(error) {
      // Handle any login errors
      console.error(error);
      alert("Login failed. Please try again.");
    });

  // Clear the input fields after submission
  emailInput.value = "";
  passwordInput.value = "";
}

