// ES6 Classes //

// Car Class

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// EVCL Inherits CarCL

class EVCL extends CarCL {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log("Battery charged");
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Accelerated at ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }
}

// Test

const rivian = new EVCL("rivian", 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().chargeBattery(20);
