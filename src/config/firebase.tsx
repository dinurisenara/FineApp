
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPc8oUuT0mLVFZyyh2EMOW43jDptbnb_Y",
  authDomain: "finea-86904.firebaseapp.com",
  projectId: "finea-86904",
  storageBucket: "finea-86904.appspot.com",
  messagingSenderId: "266763880512",
  appId: "1:266763880512:web:d550b98a9b2d15de2937a5",
  measurementId: "G-R1J8RY89B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app);