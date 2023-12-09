// Art attack

// Spread operator ...

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr, "test"];

//const mainMenuCopy = [...restaurant.mainMenu];

// Iterables ; arrays, strings, maps, sets, not objects
const str = "test";
const letters = [...str, "", "END"];

/////////////////////////////////////////////////////////
///////////////////// Rest Pattern //////////////////////
/////////////////////////////////////////////////////////

const array = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];

/*
const [pizza, , risotto, ...otherFord] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];*/

// Objects
/*const { sat, ...weekdays } = restaurant.openingHours;*/

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3, 7);

const x = [10, 3, 2];
add(...x);
