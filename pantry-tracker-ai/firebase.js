// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOgYvqbn0Ae7UybvwYxR-oU6uEM_I5IkM",
  authDomain: "hspantryapp-27436.firebaseapp.com",
  projectId: "hspantryapp-27436",
  storageBucket: "hspantryapp-27436.appspot.com",
  messagingSenderId: "1018412805942",
  appId: "1:1018412805942:web:be1fab834f5c5858728d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}