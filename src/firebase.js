// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADDjmqwcaI8bV4r-poQCwuW8xH4U7WmhM",
  authDomain: "greydive-forms2.firebaseapp.com",
  projectId: "greydive-forms2",
  storageBucket: "greydive-forms2.appspot.com",
  messagingSenderId: "1098753050300",
  appId: "1:1098753050300:web:214a2a4be42679334bb2b9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);