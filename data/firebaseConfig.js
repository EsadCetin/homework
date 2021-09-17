// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5ZW2xG4b0mtrz1vCm3RMPwj9cZjaViI4",
    authDomain: "kral-1279f.firebaseapp.com",
    projectId: "kral-1279f",
    storageBucket: "kral-1279f.appspot.com",
    messagingSenderId: "207160830137",
    appId: "1:207160830137:web:41bb6dd6bbc20b85201368",
    measurementId: "G-R1HRPS3N77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase,
    db,
}