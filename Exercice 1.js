// Exercice "Total Amount of Points"
// Link : https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let score = 0;

  // Split
  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":").map(Number);

    console.log([x, y]);

    // Calculation of scores
    if (x > y) {
      score += 3;
    } else if (x < y) {
      score += 0;
    } else {
      score += 1;
    }
  }
  console.log("Score : ", score);
  return score;
}

// Example of usage
const matchResults = ["1:2", "2:2", "3:3"];
const teamPoints = points(matchResults);
