import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDX4JWQcMbEA1Puy1zv70FR2WZNjV5pO28",
    authDomain: "xepelin-technical-test.firebaseapp.com",
    projectId: "xepelin-technical-test",
    storageBucket: "xepelin-technical-test.appspot.com",
    messagingSenderId: "174880855740",
    appId: "1:174880855740:web:7259c0b2b8318393bc62b9",
    measurementId: "G-TJ0X9W8BC2"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)