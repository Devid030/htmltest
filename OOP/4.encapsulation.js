class Vehicle {
    constructor(model) {
      this._model = model; // this is encapsulation 
    }
  
    get model() {
      return this._model;
    }
  
    startEngine() {
        if (arguments.length > 0) {
          throw new Error("Engine start doesn't accept arguments. Model is immutable.");
        }
        console.log(`${this.model} starting the engine`);
      }
  }
  const car = new Vehicle("GTR");
  car.startEngine();
  