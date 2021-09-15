import firebase from "firebase";
import "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALYu0C1xq_76n8Yh57gko1IaG62o_0Cs4",
    authDomain: "homework-7e737.firebaseapp.com",
    projectId: "homework-7e737",
    storageBucket: "homework-7e737.appspot.com",
    messagingSenderId: "546298178031",
    appId: "1:546298178031:web:cf953ebb612dafc06c2e1a",
    measurementId: "G-SB7XRBSBFK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase,
    db,
}