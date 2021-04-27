class Car {

  constructor() {
    this.price = 10000;
    this.model = 'Car'
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model
  }
}

class Audi extends Car {

  constructor() {
    super();
  }
}

class Tesla extends Car {

  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)

let tesla2 = new Tesla()
tesla2 = new Autopilot(tesla2)

let audi = new Audi()
audi = new Autopilot(audi)

console.log(tesla.getPrice(), '|', tesla.getDescription())
console.log(audi.getPrice(), '|', audi.getDescription())
console.log(tesla2.getPrice(), '|', tesla2.getDescription())
