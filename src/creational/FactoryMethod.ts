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
