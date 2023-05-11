// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcG9JHFJsO4b8uXSAtIBTC0BX5S5VMZX4",
  authDomain: "chatterapk-5c722.firebaseapp.com",
  projectId: "chatterapk-5c722",
  storageBucket: "chatterapk-5c722.appspot.com",
  messagingSenderId: "450776057281",
  appId: "1:450776057281:web:d42b994b23dd97955d1b40",
  measurementId: "G-WQNPKMEJQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);