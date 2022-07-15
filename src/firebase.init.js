// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-GJf3rV-3qeCkmSvRJbfzG16w0-jAcFU",
  authDomain: "bpi-student-info.firebaseapp.com",
  projectId: "bpi-student-info",
  storageBucket: "bpi-student-info.appspot.com",
  messagingSenderId: "50948582386",
  appId: "1:50948582386:web:21714d8c06e16ee61f596b",
  measurementId: "G-X1RGLLPRQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;