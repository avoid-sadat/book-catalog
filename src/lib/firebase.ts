// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVFiWJiw_wJy4ILLPXxJDrMUvFeqEW3kY",
  authDomain: "technet-user.firebaseapp.com",
  projectId: "technet-user",
  storageBucket: "technet-user.appspot.com",
  messagingSenderId: "393015497193",
  appId: "1:393015497193:web:50427172fe83598ae1bb78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


