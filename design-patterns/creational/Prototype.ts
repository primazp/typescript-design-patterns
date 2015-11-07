class Coffee {
    private kind: string;

    setKind(kind: string) {
        this.kind = kind;
    }

    getKind() : string {
        return this.kind;
    }

    /** Please pay attention. Object.create is used only for example.
     * It does not handle nested objects structure and therefore
     * CAN NOT be used in production.
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