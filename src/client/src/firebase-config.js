// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl8loJUbhLENkO1U2RCOBX4wHwbjRaSRw",
    authDomain: "myhousefix-6cda1.firebaseapp.com",
    projectId: "myhousefix-6cda1",
    storageBucket: "myhousefix-6cda1.firebasestorage.app",
    messagingSenderId: "927425025303",
    appId: "1:927425025303:web:e5576b785a3a43b911d352",
    measurementId: "G-S85Q8P8FR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
