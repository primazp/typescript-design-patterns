/**
* The factory method pattern is a creational pattern that uses factory methods to deal with the
* problem of creating objects without having to specify the exact class of the object that will
* be created. This is done by creating objects by calling a factory method—either specified in
* an interface and implemented by child classes, or implemented in a base class and optionally
* overridden by derived classes – rather than by calling a constructor.
*/

// abstract Product
abstract class Warrior {
    abstract getInfo(): string;
}

// Concrete Product A
class Archer extends Warrior {
    getInfo() {
        return 'The one with the bow.';
    }
}

class SwordsMan extends Warrior {
    getInfo() {
        return 'The one with the sword.';
    }
}

// Creator
abstract class Barracks {
    abstract trainUnit() : Warrior;
}

// Concrete creator A
class ArcheryRange extends Barracks {
    trainUnit() {
        return new Archer();
    }
}

// Concrete creator B
class TrainingYard extends Barracks {
    trainUnit() {
        return new SwordsMan();
    }
}

for (var creator of [new ArcheryRange(), new TrainingYard()]) {
    var warrior = creator.trainUnit();
    console.log(warrior.getInfo());
}
