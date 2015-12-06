/**
* The observer pattern is a software design pattern in which an object, called the subject,
* maintains a list of its dependents, called observers, and notifies them automatically of any
* state changes, usually by calling one of their methods. It is mainly used to implement distributed
* event handling systems. The Observer pattern is also a key part in the familiar
* model–view–controller (MVC) architectural pattern. The observer pattern is implemented in
* numerous programming libraries and systems, including almost all GUI toolkits.

* The observer pattern can cause memory leaks, known as the lapsed listener problem, because
* in basic implementation it requires both explicit registration and explicit deregistration,
* as in the dispose pattern, because the subject holds strong references to the observers,
* keeping them alive. This can be prevented by the subject holding weak references to the observers.
*/

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
