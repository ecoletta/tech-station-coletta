// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmmLpNx35RmSDvUrCwMtkPs1Z6n0A3eUs",
  authDomain: "coderhouse-tech-station-app.firebaseapp.com",
  projectId: "coderhouse-tech-station-app",
  storageBucket: "coderhouse-tech-station-app.appspot.com",
  messagingSenderId: "59598607884",
  appId: "1:59598607884:web:a415148223df680a630029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app);
