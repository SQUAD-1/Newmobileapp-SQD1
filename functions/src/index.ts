import * as functions from "firebase-functions";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCqxUA1e5PkreGVyVmBIAwPLtedvpcNyKE",
    authDomain: "fc-services-ba67f.firebaseapp.com",
    projectId: "fc-services-ba67f",
    storageBucket: "fc-services-ba67f.appspot.com",
    messagingSenderId: "832715583514",
    appId: "1:832715583514:web:b11852a49f50f5a6f521a3",
    measurementId: "G-TC74613GEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
