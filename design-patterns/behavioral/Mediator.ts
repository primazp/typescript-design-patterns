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