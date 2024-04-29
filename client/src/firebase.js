// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  authDomain: "mindstars-6333c.firebaseapp.com",
  projectId: "mindstars-6333c",
  storageBucket: "mindstars-6333c.appspot.com",
  messagingSenderId: "554695749213",
  appId: "1:554695749213:web:ecb8d89e0afcf65804a7b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);