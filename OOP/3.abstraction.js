class Vehicle {
    startengine(){
    } // This is abstraction 
  }
  
  class Car extends Vehicle {
    startengine(){
      console.log("Engine started");
    }
  } 
  
  const car = new Car("");
  car.startengine();