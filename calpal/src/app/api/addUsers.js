import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export const addDataToFirestore = async () => {
  // Define the data to be added
  const data = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  };

  // Add the data to the "users" collection
  const docRef = await addDoc(collection(db, "user"), data);
  console.log("Document written with ID: ", docRef.id);
};
