// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref, uploadString } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUIYr24qX4I8tt9nZP6quA3Diyb7mOQQ4",
  authDomain: "story-6a3de.firebaseapp.com",
  projectId: "story-6a3de",
  storageBucket: "story-6a3de.appspot.com",
  messagingSenderId: "839345803129",
  appId: "1:839345803129:web:4c23ee7645d70e7bbe69a8",
  measurementId: "G-WQ2YTBFK4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app)
export default app;