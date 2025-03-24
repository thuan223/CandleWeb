// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFYNAU88CXmL0tIfu6gAli62uJGHL5T8Y",
    authDomain: "candleapp-69573.firebaseapp.com",
    projectId: "candleapp-69573",
    storageBucket: "candleapp-69573.appspot.com",
    messagingSenderId: "787715775473",
    appId: "1:787715775473:web:c19fd616fc21db573cc250",
    measurementId: "G-WBB5Y93FKN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);