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

class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
}

const martha = new Student("Martha", 2012, "CS");
console.log(martha);
