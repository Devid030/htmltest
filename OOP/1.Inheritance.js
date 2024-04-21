class Vehicle {
  constructor(model) {
    this.model = model;
  }
  startengine(){
    console.log(`${this.model} starting the engine`);
  }
}

class Car extends Vehicle {} //here is inheritance

const car = new Car("GTR");
car.startengine();