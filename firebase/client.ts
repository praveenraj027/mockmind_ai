// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXkWRKCwMq6PBCut3Fg8_bZdhBhlclb2g",
  authDomain: "mockmind-98501.firebaseapp.com",
  projectId: "mockmind-98501",
  storageBucket: "mockmind-98501.firebasestorage.app",
  messagingSenderId: "724407056684",
  appId: "1:724407056684:web:8af8e36ad6eb331c2dd489",
  measurementId: "G-88RMCFGK5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 