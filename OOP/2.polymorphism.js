class Vehicle {
    constructor(model) {
      this.model = model;
    }
    startEngine(){
      console.log(`${this.model} starting the engine`);
    }
  }
  
  class Car extends Vehicle {
    startEngine() { // This is polymorphism 
        super.startEngine();
        console.log(`and engine sound good`);
    }
  } 
  
  const car = new Car("GTR");
  car.startEngine();
