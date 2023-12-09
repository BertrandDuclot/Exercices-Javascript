// Destructuring array
const restaurant = {
  name: "nom restaurant",
  location: "location restaurant",
  categories: ["Fastfood", "Organic", "Not Organic"],
  starterMenu: ["Menu1", "Menu2", "Menu3"],
  mainMenu: ["Pizza", "Pasta"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 12,
      close: 22,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

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

const { name, openingHours, categories } = restaurant;

//console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
