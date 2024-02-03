import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

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
    if (testObject.englishProfecinecy) score += 1;
    if (testObject.employmentStatus === "Working") score += 1;
    if (testObject.ethnicity === object.ethnicity) score += 1;

    similarityScores.push({ object, score });
  }

  // Step 2: Sort objects by similarity score
  console.log(similarityScores);
  similarityScores.sort((a, b) => b.score - a.score); // Sort in descending order

  // Step 3: Splice the top 10
  const top10MatchingEntries = similarityScores.slice(0, 10);

  return top10MatchingEntries;
}
