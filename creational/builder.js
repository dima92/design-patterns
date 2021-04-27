class Car {

  constructor() {
    this.autoPilot = false
    this.parktronic = false
    this.signaling = false
  }
}

class CarBuilder {

  constructor() {
    this.car = new Car()
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .updateEngine('V8')
  .build()

const myNewCar = new CarBuilder()
  .addSignaling(true)
  .updateEngine('V4')
  .build()

console.log(myCar)
console.log(myNewCar)