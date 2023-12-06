// ES6 Classes
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`${this.firstName}` + " birthyear is " + `${this.birthYear}`);
  }

  greet() {
    console.log("hello " + this.firstName);
  }

  get age() {
    return console.log("Age test");
  }
}

const roger = new Person("roger", 1950);
console.log(roger);

// Calling methods
roger.calcAge();

console.log(roger.__proto__ == Person.prototype);

roger.greet();

roger.age;

// Hoisted

// Getters and Setters

const account = {
  owner: "roger",
  movements: [200, 350, 620],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.test = 50;
console.log(account.movements);
