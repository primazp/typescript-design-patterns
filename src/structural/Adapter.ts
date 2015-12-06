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