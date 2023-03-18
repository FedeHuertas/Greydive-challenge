// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6kRTK5K_b0jnCHpAtRmDkHJAi2TsEM5Q",
  authDomain: "greydive-forms.firebaseapp.com",
  projectId: "greydive-forms",
  storageBucket: "greydive-forms.appspot.com",
  messagingSenderId: "398784268376",
  appId: "1:398784268376:web:41c36ce1bb245b5d5ca22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);