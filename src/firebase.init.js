// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlqFKzDL74bFDkacSaLL71Cjadw3rVzb8",
  authDomain: "wadding-photographer.firebaseapp.com",
  projectId: "wadding-photographer",
  storageBucket: "wadding-photographer.appspot.com",
  messagingSenderId: "178420827905",
  appId: "1:178420827905:web:6f50d0635c09c8617cfd00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
