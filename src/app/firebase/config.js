// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl_tAEWY0fEwWGGFlzAf6AMRof7vk4MQg",
  authDomain: "minext.firebaseapp.com",
  projectId: "minext",
  storageBucket: "minext.appspot.com",
  messagingSenderId: "35311994770",
  appId: "1:35311994770:web:1cb9c8dc3d092e1ac9234b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()