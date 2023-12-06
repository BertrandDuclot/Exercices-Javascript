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
}

const roger = new Person("roger", 1950);
console.log(roger);

// Calling method
roger.calcAge();

console.log(roger.__proto__ == Person.prototype);

roger.greet();
