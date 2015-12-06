/**
* The abstract factory pattern provides a way to encapsulate a group of individual factories
* that have a common theme without specifying their concrete classes. This pattern separates
* the details of implementation of a set of objects from their general usage and relies on object
* composition, as object creation is implemented in methods exposed in the factory interface.
*
* Let’s imagine that we are developing a game about WW2. This is an early start and we have
* only two states and only two type of units: Tank and Aircraft. These are abstract classes
* and they correspond to ProductA and ProductB on the diagram:
*/
class Tank {}
class Aircraft {}

/**
* Now we can create and abstract interface AbstractVehicleFactory which is
* AbstractFactory on the diagram.
*/

// Abstract Factory
interface AbstractVehicleFactory {
  createTank(): Tank;
  createAircraft(): Aircraft;
}

// The concrete implementations of Tank and Aircraft can be as follows:
// Concrete Product A1
class T34 extends Tank {
  constructor() {
    super();
    console.log('T-34 USSR');
  }
}

// Concrete Product A2
class Il2 extends Aircraft {
  constructor() {
    super();
    console.log('Il-2 USSR');
  }
}

// Concrete Product B1
class E25 extends Tank {
  constructor() {
    super();
    console.log('E-25 Germany');
  }
}

// Concrete Product B2
class MesserschmittBf110 extends Aircraft {
  constructor(){
    super();
    console.log('Messerschmitt Bf.110 Germany');
  }
}

// USSRVehicleFactory implements abstract factory and creates only USSR tanks and aircrafts:
// Concrete factory 1
class USSRVehicleFactory implements AbstractVehicleFactory {
  createTank() {
    return new T34();
  }
  createAircraft() {
    return new Il2();
  }
}

// GermanyVehicleFactory is created in a similar way:
// Concrete factory 2
class GermanyVehicleFactory implements AbstractVehicleFactory {
  createTank() {
    return new E25();
  }

  createAircraft() {
    return new MesserschmittBf110();
  }
}

// A simple demonstration:
function showFactory(factory: AbstractVehicleFactory) {
  factory.createTank();
  factory.createAircraft();
  console.log('\n');
}

showFactory(new USSRVehicleFactory());
showFactory(new GermanyVehicleFactory());
