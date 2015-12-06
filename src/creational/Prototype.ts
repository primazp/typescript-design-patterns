/**
* The prototype pattern is a creational design pattern in software development.
* It is used when the type of objects to create is determined by a prototypical instance,
* which is cloned to produce new objects. This pattern is used to:
* 
* 1) avoid subclasses of an object creator in the client application, like the abstract
* factory pattern does.
*
* 2) avoid the inherent cost of creating a new object in the standard way
* (e.g., using the ‘new’ keyword) when it is prohibitively expensive for a given application.
*/

class Coffee {
    private kind: string;

    setKind(kind: string) {
        this.kind = kind;
    }

    getKind() : string {
        return this.kind;
    }

    /** Please pay attention. Object.create is used only for the
     * example purpose. It does not handle nested objects structure
     * and therefore CAN NOT be used in production.
     * @see http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
     * */
    clone() : Coffee {
        return Object.create(this);
    }
}

class CoffeeMachine {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    makeCofee() : Coffee {
        return this.coffee.clone();
    }
}

var coffee = new Coffee();
coffee.setKind('Espresso');
var cm = new CoffeeMachine(coffee);
var anotherCoffee = cm.makeCofee();
console.log(anotherCoffee.getKind());
