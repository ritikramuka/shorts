// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsRdME2OX7FN1DjRNOr7WndqE7_rU0Kvo",
  authDomain: "nados-shorts.firebaseapp.com",
  projectId: "nados-shorts",
  storageBucket: "nados-shorts.appspot.com",
  messagingSenderId: "629274085828",
  appId: "1:629274085828:web:08d8a512e116ad1138bc91",
  measurementId: "G-061QY4FCN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { auth, storage, db };
export default app;
