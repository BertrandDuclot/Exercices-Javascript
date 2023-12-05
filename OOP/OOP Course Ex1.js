// Abstraction, Encapsulation, Inheritance, Polymorphism

"use strict";

const Person = function (firstName, birthYear) {
  this.firstname = firstName;
  this.birthYear = birthYear;
};

const roger = new Person("roger", 1950);
console.log(roger);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log("age : ", this.birthYear);
};

roger.calcAge();
console.log(roger.__proto__ == Person.prototype);

// Prototype of roger
console.log(Person.prototype.isPrototypeOf(roger));

Person.prototype.species = "homo sapiens";
console.log(roger.species);
