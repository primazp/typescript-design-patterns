/**
* The memento pattern is a software design pattern that provides the ability to
* restore an object to its previous state (undo via rollback).
*
* The memento pattern is implemented with three objects: the originator, a
* caretaker and a memento. The originator is some object that has an internal state.
* The caretaker is going to do something to the originator, but wants to be able
* to undo the change. The caretaker first asks the originator for a memento object.
* Then it does whatever operation (or sequence of operations) it was going to do.
* To roll back to the state before the operations, it returns the memento object
* to the originator. The memento object itself is an opaque object (one which
* the caretaker cannot, or should not, change). When using this pattern, care should
* be taken if the originator may change other objects or resources - the memento
* pattern operates on a single object.
*/

class Memento {
    constructor(private state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

class Caretaker {
    private memento: Memento;

    public getMemento(): Memento {
        return this.memento;
    }

    public setMemento(memento: Memento): void {
        this.memento = memento;
    }
}

class Originator {
    private state: string;

    public setState(state: string): void {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public saveState(): Memento {
        return new Memento(this.state);
    }

    public restoreState(memento: Memento): void {
        this.state = memento.getState();
    }
}

var originator = new Originator();
var caretaker = new Caretaker();
originator.setState("on");
console.log("State is " + originator.getState());
caretaker.setMemento(originator.saveState());

originator.setState("off");
console.log("State is " + originator.getState());

originator.restoreState(caretaker.getMemento());
console.log("State is " + originator.getState());
