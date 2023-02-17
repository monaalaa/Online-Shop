import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDJOtAiSRXoG2yBYyH8rxAeKHRJB99ay4",
  authDomain: "online-shop-db-b2c2f.firebaseapp.com",
  projectId: "online-shop-db-b2c2f",
  storageBucket: "online-shop-db-b2c2f.appspot.com",
  messagingSenderId: "946644183316",
  appId: "1:946644183316:web:2c2eb76e88157f3f68fa01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
