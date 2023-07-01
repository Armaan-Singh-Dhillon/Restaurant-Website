import { w as writable } from "./index.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const showLoginModal = writable(false);
const userStore = writable(false);
const firebaseConfig = {
  apiKey: "AIzaSyD8fp543KbYSauzf8D2xxS4urgdYhMtJmM",
  authDomain: "wine-and-dine-7297b.firebaseapp.com",
  projectId: "wine-and-dine-7297b",
  storageBucket: "wine-and-dine-7297b.appspot.com",
  messagingSenderId: "831571392075",
  appId: "1:831571392075:web:2c7e299dd4f99b263abfce",
  measurementId: "G-2GLVY423KR"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
export {
  showLoginModal as s,
  userStore as u
};
