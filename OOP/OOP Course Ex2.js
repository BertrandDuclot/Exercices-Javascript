// ES6 Classes
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(`${this.firstName}` + " birthyear is " + `${this.birthYear}`);
  }

  greet() {
    console.log("hello " + this.firstName);
  }

  get age() {
    return console.log("Age test");
  }

  set firstName(name) {
    console.log("firstName Setter executed");
    this._firstName = name;
  }

  get firstName() {
    return this._firstName;
  }

  // Static method => not on the prototype but on the class
  static hello = function () {
    console.log("hello");
  };
}

// Tests
const roger = new Person("roger", 1950);

console.log(roger.__proto__ == Person.prototype);

console.log(roger);

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

// Array.from() (namespace)

Person.hello();
