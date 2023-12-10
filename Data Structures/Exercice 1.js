// Destructuring array
const weekdays = ["mon", "tue"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 15,
    close: 32,
  },
};

const restaurant = {
  name: "nom restaurant",
  location: "location restaurant",
  categories: ["Fastfood", "Organic", "Not Organic"],
  starterMenu: ["Menu1", "Menu2", "Menu3"],
  mainMenu: ["Pizza", "Pasta"],

  // Enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(starterIndex, mainIndex, time, address);
  },
};

// Test of printing object function
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sol",
  mainIndex: 2,
  starterIndex: 5,
});

// Destructuring array
arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// Switching two values with destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];

// Order function with destructuring, receives 2 return values from a function
console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values to the array
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/////////////////////////////////////////////////////////////////
///////////////////// Destructuring objects /////////////////////
/////////////////////////////////////////////////////////////////

/*const { name, openingHours, categories } = restaurant;*/

//console.log(name, openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 100;
let b = 500;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

/*Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);*/

// Short Circuiting

console.log(3 || "test");

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND
console.log(0 && "test");

// Logical assignments
const rest1 = {
  name: "capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "owner name",
};

/*rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;*/

// More concise way

//rest1.numGuests ||= 10;
rest2.numGuests ??= 10;
rest2.owner = rest2.owner && "<TEST>";
console.log(rest1.name);
rest1.name &&= "<TEST2>";
console.log(rest1.name);

//console.log(rest1);
//console.log(rest2);

///////////////////////////////////////////////////////////
///////////////////// Looping arrays //////////////////////
///////////////////////////////////////////////////////////

const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuu) console.log(item);

// Normal
for (const item of menuu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Destructured
for (const [i, el] of menuu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menuu.entries()]);
