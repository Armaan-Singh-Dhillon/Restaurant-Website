
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8fp543KbYSauzf8D2xxS4urgdYhMtJmM",
  authDomain: "wine-and-dine-7297b.firebaseapp.com",
  projectId: "wine-and-dine-7297b",
  storageBucket: "wine-and-dine-7297b.appspot.com",
  messagingSenderId: "831571392075",
  appId: "1:831571392075:web:2c7e299dd4f99b263abfce",
  measurementId: "G-2GLVY423KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db


