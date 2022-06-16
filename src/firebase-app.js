// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9xnOhXUPWgrYWmWSolam5vpm_viL9j84",
  authDomain: "when-are-we-getting-a-dog.firebaseapp.com",
  projectId: "when-are-we-getting-a-dog",
  storageBucket: "when-are-we-getting-a-dog.appspot.com",
  messagingSenderId: "268005865937",
  appId: "1:268005865937:web:600e755ec8eced015d08f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
