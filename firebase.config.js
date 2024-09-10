// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqS4LMmDH7my_nOFtEYP9rBsjh3L9MIEA",
  authDomain: "excursiontrek.firebaseapp.com",
  projectId: "excursiontrek",
  storageBucket: "excursiontrek.appspot.com",
  messagingSenderId: "979285223036",
  appId: "1:979285223036:web:bf42303ce396cecae5cbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;