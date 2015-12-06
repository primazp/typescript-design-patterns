class Tank {}
class Aircraft {}

// Product A1
class T34 extends Tank {
  constructor() {
    super();
    console.log('T-34 USSR');
  }
}

// Product A2
class Il2 extends Aircraft {
  constructor() {
    super();
    console.log('Il-2 USSR');
  }
}

// Product B1
class E25 extends Tank {
  constructor() {
    super();
    console.log('E-25 Germany');
  }
}

// Product B2
class MesserschmittBf110 extends Aircraft {
  constructor(){
    super();
    console.log('Messerschmitt Bf.110 Germany');
  }
}

// Abstract Factory
interface AbstractVehicleFactory {
  createTank(): Tank;
  createAircraft(): Aircraft;
}

// Concrete factory 1
class USSRVehicleFactory implements AbstractVehicleFactory {
  createTank() {
    return new T34();
  }
  createAircraft() {
    return new Il2();
  }
}

// Concrete factory 2
class GermanyVehicleFactory implements AbstractVehicleFactory {
  createTank() {
    return new E25();
  }

  createAircraft() {
    return new MesserschmittBf110();
  }
}

function showFactory(factory: AbstractVehicleFactory) {
  factory.createTank();
  factory.createAircraft();
  console.log('\n');
}

showFactory(new USSRVehicleFactory());
showFactory(new GermanyVehicleFactory());