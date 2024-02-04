import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { globalUserId } from "../constants/globalUser";
import { doc } from "firebase/firestore";

export const GetUsers = async () => {
  try {
    const usersCollected = collection(db, "user");
    const data = await getDocs(usersCollected);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    //let ranked = rankMostMatchingEntries(filteredData[0], filteredData);
    console.log(filteredData);

    //setUserList(rankMostMatchingEntries(filteredData, filteredData[1]));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export const CheckLogin = async (email, password) => {
  try {
    const users = await GetUsers();

    for (let user in users) {
      console.log(user);
      if (users[user].password == password && users[user].email == email) {
        console.log("Logged In");
        globalUserId.id = users[user].id;
        console.log(globalUserId.id);
        window.location.replace("http://localhost:3000/");

        return true;
      }
    }
    console.log("No User Found");
    return false;
  } catch (err) {
    console.error(err);
  }
};

export function rankMostMatchingEntries(objectsList, testObject) {
  // Step 1: Calculate similarity scores
  const similarityScores = [];
  for (const object of objectsList) {
    let score = 0;
    if (testObject.birthCountry === object.birthCountry) score += 2;
    if (testObject.englishProfecinecy === true) score += 3;
    if (testObject.employmentStatus === "Working") score += 1;
    if (testObject.ethnicity === object.ethnicity) score += 1;

    similarityScores.push({ object, score });
  }

  // Step 2: Sort objects by similarity score
  console.log(similarityScores);
  similarityScores.sort((a, b) => b.score - a.score); // Sort in descending order

  // Step 3: Splice the top 10
  const top10MatchingEntries = similarityScores.slice(0, 3);

  return top10MatchingEntries;
}

export const getCurrentUserData = async () => {
  // Define the data to be added

  // Add the data to the "users" collection
  let allUsers = await GetUsers();
  console.log(globalUserId.id);
  for (let user in allUsers) {
    console.log(allUsers[user]);
    if (allUsers[user].id === "userId") {
      console.log("worker");
      return allUsers[user];
    }
  }
  return null;
};
