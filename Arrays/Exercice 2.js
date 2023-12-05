/* Example of destructuring a tab
const [couleur1, couleur2] = ["bleue", "rouge"];

console.log(couleur1);
console.log(couleur2);*/

/* ---------- Add length exercice ---------- */
// Link https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// String array and mixed array

// With map function
function addLength(str) {
  const words = str.split(" ");

  const resultArray = words.map((word) => `${word} ${word.length}`);

  return resultArray;
}

// With for loop

function addLength(str) {
  // Divisez la chaîne en mots
  const words = str.split(" ");

  // Créez un nouveau tableau pour stocker les résultats
  const resultArray = [];

  // Utilisez une boucle for pour itérer sur chaque mot
  for (let i = 0; i < words.length; i++) {
    // Ajoutez chaque mot et sa longueur au tableau de résultats
    resultArray.push(`${words[i]} ${words[i].length}`);
  }

  return resultArray;
}

// Testing
const result = addLength("merci test test2");
console.log(result);
