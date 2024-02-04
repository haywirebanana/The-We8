import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { globalUserId } from "../constants/globalUser";
import { addMentor } from "./addMentor";

export const addDataToFirestore = async (data) => {
  // Define the data to be added

  // Add the data to the "users" collection
  const docRef = await addDoc(collection(db, "user"), data);
  globalUserId.id = docRef.id;
  console.log("Document written with ID: ", docRef.id);
  addMentor("userId");
  window.location.replace("http://localhost:3000/addmentors");
};
