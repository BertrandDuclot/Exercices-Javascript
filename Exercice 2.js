/* Example of destructuring a tab
const [couleur1, couleur2] = ["bleue", "rouge"];

console.log(couleur1);
console.log(couleur2);*/

/* ---------- Add length exercice ---------- */
// Link https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// String array and mixed array

function addLength(str) {
  // Divisez la chaîne en mots
  const words = str.split(" ");

  // Utilisez la méthode map pour créer un nouveau tableau
  // où chaque élément est une chaîne contenant le mot et sa longueur
  const resultArray = words.map((word) => `${word} ${word.length}`);

  return resultArray;
}

// Testing
const result = addLength("merci test test2");
console.log(result);
