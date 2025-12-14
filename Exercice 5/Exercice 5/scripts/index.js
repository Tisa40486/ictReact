// Modify the code here
// ======================

const calculateAverageRating = (rateList) => {
  let sommeValues = 0;
  let nombreValues = rateList.length;
  let moyenne = 0;


  if(!Array.isArray(rateList) || rateList.length ===0)
    return 0;

  for(let i = 0; i < rateList.length; i++)
    sommeValues += rateList[i];


  moyenne = sommeValues / nombreValues;

  return moyenne;
}

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector("#tau-score").innerText =
    tauAverage.toFixed(1) + " stars";
  document.querySelector("#colin-score").innerText =
    colinAverage.toFixed(1) + " stars";
  document.querySelector("#clara-score").innerText = `${
    calculateAverageRating([]) === 0
      ? "No ratings"
      : calculateAverageRating([]) + " stars"
  }`;
}
