import { db } from "../config/firebase";
import { globalUserId } from "../constants/globalUser";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export const addMentor = async (mentorId) => {
  // Define the data to be added

  // Add the data to the "users" collection
  // TODO figure out to keep this global
  const userRef = doc(db, "user", "userId");

  // Atomically add a new region to the "regions" array field.
  await updateDoc(userRef, {
    mentors: arrayUnion(mentorId),
  });
};
