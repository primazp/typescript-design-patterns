interface Observable {
  notifyObservers(): void;
}

abstract class BaseObserver {
  abstract update(citizen: Citizen): void;
}

class Citizen implements Observable {
  private observers: BaseObserver[] = [];
  constructor(private name: string, private salary: number){}

  subscribe(observer: BaseObserver) {
    this.observers.push(observer);
  }

  unsubscribe(observer: BaseObserver) {
    var index = this.observers.indexOf(observer);
    if (index > -1) { this.observers.splice(index, 1); }
  }

  notifyObservers(): void {
    for(var i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this);
    }
  }

  getName(): string { return this.name; }
  setName(name: string): void { this.name = name; }

  getSalary(): number { return this.salary; }
}

class PayRoll extends BaseObserver {
  update(citizen: Citizen) {
    console.log(citizen.getName() + ' salary is now ' + citizen.getSalary());
  }
}

class TaxMan extends BaseObserver {
  update(citizen: Citizen) {
    console.log('Sending a new tax bill to ' + citizen.getName());
  }
}

var citizen = new Citizen("John Doe", 5000);
citizen.subscribe(new PayRoll());
citizen.subscribe(new TaxMan());
citizen.notifyObservers();
