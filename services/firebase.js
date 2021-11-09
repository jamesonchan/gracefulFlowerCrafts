// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBof-f8zdI5Jic1JJy-9uNLj_8ct9x2p0",
  authDomain: "graceful-b28a2.firebaseapp.com",
  projectId: "graceful-b28a2",
  storageBucket: "graceful-b28a2.appspot.com",
  messagingSenderId: "1043444254611",
  appId: "1:1043444254611:web:305958fed9c15f32024a66"
};

// Initialize Firebase
const app = !getApps().length > 0 ? initializeApp(firebaseConfig) : getApp();

export  {app}