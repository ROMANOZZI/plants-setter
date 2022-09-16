// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const startFireBase=()=>{
const firebaseConfig = {
  apiKey: "AIzaSyAF6uFUMIuB1Y6DLaPEecs87tUgJsY3pro",
  authDomain: "planet-setter.firebaseapp.com",
  databaseURL: "https://planet-setter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planet-setter",
  storageBucket: "planet-setter.appspot.com",
  messagingSenderId: "982067010226",
  appId: "1:982067010226:web:cc140883500cab77aa07ab",
  measurementId: "G-6EK94RH816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app);}
export default startFireBase;