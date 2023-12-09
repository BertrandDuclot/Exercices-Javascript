// Art attack

// Spread operator ...

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr, "test"];
console.log(newArr);

//const mainMenuCopy = [...restaurant.mainMenu];

// Iterables ; arrays, strings, maps, sets, not objects
const str = "test";
const letters = [...str, "", "END"];
console.log(letters);
console.log(...str);
