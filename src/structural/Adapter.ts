/**
* An adapter helps two incompatible interfaces to work together. This is the real world
* definition for an adapter. Interfaces may be incompatible but the inner functionality 
* should suit the need. The Adapter design pattern allows otherwise incompatible classes
* to work together by converting the interface of one class into an interface expected
* by the clients.
*/

class GameConsole {
    static gamePicture(): void {
        console.log('output game picture');
    }
}

class Antenna {
    static wavePicture(): void {
        console.log('output wave picture');
    }
}

interface Adapter {
    getPicture();
}

class ConsoleAdapter implements Adapter {
    getPicture() {
        return GameConsole.gamePicture();
    }
}

class AntennaAdapter implements Adapter {
    getPicture() {
        return Antenna.wavePicture();
    }
}

class TV {
    constructor(private source: Adapter){}

    showPicture() {
        return this.source.getPicture();
    }
}

var cableTV = new TV(new AntennaAdapter());
var gameTV = new TV(new ConsoleAdapter());

cableTV.showPicture();
gameTV.showPicture();
