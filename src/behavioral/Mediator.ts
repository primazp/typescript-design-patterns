/**
* Usually a program is made up of a large number of classes. So the logic and computation is
* distributed among these classes. However, as more classes are developed in a program, especially 
* during maintenance and/or refactoring, the problem of communication between these classes may
* become more complex. This makes the program harder to read and maintain. Furthermore, it can become
* difficult to change the program, since any change may affect code in several other classes.
*
* With the mediator pattern, communication between objects is encapsulated with a mediator object.
* Objects no longer communicate directly with each other, but instead communicate through the mediator.
* This reduces the dependencies between communicating objects, thereby lowering the coupling.
*/

abstract class Colleague {

    constructor(protected mediator: Mediator) {}

    send(message: string) : void {
        this.mediator.send(message, this);
    }

    abstract notify(message: string) : void;
}

abstract class Mediator {
    abstract send(message: string, colleague: Colleague) : void;
}

class ConcreteColleague1 extends Colleague {
    notify(message: string) : void {
        console.log("Colleague1 gets message: " + message);
    }
}

class ConcreteColleague2 extends Colleague {
    notify(message: string) : void {
        console.log("Colleague2 gets message: " + message);
    }
}

class ConcreteMediator extends Mediator {

    private colleague1: ConcreteColleague1;
    private colleague2: ConcreteColleague2;

    setColleague1(colleague: ConcreteColleague1) : void {
        this.colleague1 = colleague;
    }

    setColleague2(colleague: ConcreteColleague2) : void {
        this.colleague2 = colleague;
    }

    send(message: string, colleague: Colleague) : void {
        if (colleague === this.colleague2) {
            this.colleague1.notify(message);
        } else {
            this.colleague2.notify(message);
        }
    }
}

var mediator = new ConcreteMediator();

var colleague1 = new ConcreteColleague1(mediator);
var colleague2 = new ConcreteColleague2(mediator);

mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

colleague1.send("How are you?");
colleague2.send("Fine, thanks");
