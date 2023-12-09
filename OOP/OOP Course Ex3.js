// Inheritance

// Classes
const Person = function (firstName, birthYear) {
  this.firstname = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log("Age calc");
};

const Student = function (firstName, birthYear, course) {
  // Calling another class with call
  Person.call(this.firstName, this.birthYear, this.course);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

// Adding function through prototype
Student.prototype.introduce = function () {
  console.log("Introduction function called");
};

// Execution
const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);

mike.introduce();
mike.calcAge();

// Changing prototype of Student
Student.prototype.constructor = Student;

///////////////////////////////////////////////////////
// Inheritance
///////////////////////////////////////////////////////

/*class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
}

const martha = new Student("Martha", 2012, "CS");
console.log(martha);*/

///////////////////////////////////////////////////////
// Chaining example
///////////////////////////////////////////////////////

/*withdraw(val) {
  this.deposit(-val)
  return this;
}*/

// Result

class Student extends Person {
  university = "univ test";
  #studyhours = 0;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffe();
    this.#studyhours += h;
  }

  #makeCoffe() {
    return "Here is a coffe !";
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student("roger", 1980, 2000, "Computer Science");
