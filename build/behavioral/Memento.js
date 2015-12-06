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
*
* Memento pattern is a powerful design pattern to store the state of an object.
* One other usage is the implementation of 'Ok' and 'Cancel' dialog where we store
* the state of the object on load of dialog and work on the main object.
* If user presses 'Cancel', we restore to the initial state.
*/
var Memento = (function () {
    function Memento(state) {
        this.state = state;
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
})();
var Caretaker = (function () {
    function Caretaker() {
    }
    Caretaker.prototype.getMemento = function () {
        return this.memento;
    };
    Caretaker.prototype.setMemento = function (memento) {
        this.memento = memento;
    };
    return Caretaker;
})();
var Originator = (function () {
    function Originator() {
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.getState = function () {
        return this.state;
    };
    Originator.prototype.saveState = function () {
        return new Memento(this.state);
    };
    Originator.prototype.restoreState = function (memento) {
        this.state = memento.getState();
    };
    return Originator;
})();
var originator = new Originator();
var caretaker = new Caretaker();
originator.setState("on");
console.log("State is " + originator.getState());
caretaker.setMemento(originator.saveState());
originator.setState("off");
console.log("State is " + originator.getState());
originator.restoreState(caretaker.getMemento());
console.log("State is " + originator.getState());
