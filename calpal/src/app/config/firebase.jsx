import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWps88OUt3ePwW5qp8Scsqcsw_BeW9kJk",
  authDomain: "thewe8-a1368.firebaseapp.com",
  databaseURL: "https://thewe8-a1368-default-rtdb.firebaseio.com",
  projectId: "thewe8-a1368",
  storageBucket: "thewe8-a1368.appspot.com",
  messagingSenderId: "814671281963",
  appId: "1:814671281963:web:7fc48f2437e77b977e0f6e",
  measurementId: "G-76KK554MQX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
