// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let getUsers = async (db) => {
  const user = collection(db, "user");
  const userSnapShot = await getDocs(user);
  console.log("called");
  const userList = userSnapShot.docs.map((doc) => doc.data());
  console.log(userList);
  return userList;
};

document.getElementById("getUserButton").addEventListener("click", getUsers);

function work() {
  console.log("workin ");
}
