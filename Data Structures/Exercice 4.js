// Sets
const ordersSet = new Set(["Pasta", "Pizza", "Risotto"]);
//console.log(ordersSet);

//console.log(new Set("Test"));

//console.log(ordersSet.size);
//console.log(ordersSet.has("Pizza"));
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");

//for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]; // Making an array
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

// Maps vs Objects
const rest = new Map();
rest.set("name", "restaurantname");
rest.set(1, "Firenze, Italy");
rest.set(2, "Rome, Italy");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//console.log(rest.clear);

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

const question = new Map([
  ["question", "Q1"],
  [1, "C"],
  [2, "Java"],
  [3, "C++"],
  ["correct", 3],
  [true, "correct"],
  [false, "False"],
]);

console.log(question);
3;

// Convert object to map
//console.log(Object.entries(openingHours));

// Map Iteration
/*console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key == "number") console.log(`Answer ${key}: ${value}`);
}

const answer = prompt("Your answer");
console.log(answer);

console.log(question.get(question.get("correct") == answer));*/

// Convert Map to Array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
