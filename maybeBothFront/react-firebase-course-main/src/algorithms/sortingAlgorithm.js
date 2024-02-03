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
