/* Example of destructuring a tab
const [couleur1, couleur2] = ["bleue", "rouge"];

console.log(couleur1);
console.log(couleur2);*/

/* ---------- Add length exercice ---------- */
// Link https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {

  for (i = 0; i < str.lenght ; i++) {

  const [words[i]] = str.split(" ");

  console.log(words);
}
}

// Testing
addLength("merci test test2");

// 1 Détacher les mots 

// 2 Compter le nombre de caractères par mots

// 3 Ajouter les mots + nombre de caractères à un array