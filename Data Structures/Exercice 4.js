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
