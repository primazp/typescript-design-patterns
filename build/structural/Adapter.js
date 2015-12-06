/**
* An adapter helps two incompatible interfaces to work together. This is the real world
* definition for an adapter. Interfaces may be incompatible but the inner functionality
* should suit the need. The Adapter design pattern allows otherwise incompatible classes
* to work together by converting the interface of one class into an interface expected
* by the clients.
*/
var GameConsole = (function () {
    function GameConsole() {
    }
    GameConsole.gamePicture = function () {
        console.log('output game picture');
    };
    return GameConsole;
})();
var Antenna = (function () {
    function Antenna() {
    }
    Antenna.wavePicture = function () {
        console.log('output wave picture');
    };
    return Antenna;
})();
var ConsoleAdapter = (function () {
    function ConsoleAdapter() {
    }
    ConsoleAdapter.prototype.getPicture = function () {
        return GameConsole.gamePicture();
    };
    return ConsoleAdapter;
})();
var AntennaAdapter = (function () {
    function AntennaAdapter() {
    }
    AntennaAdapter.prototype.getPicture = function () {
        return Antenna.wavePicture();
    };
    return AntennaAdapter;
})();
var TV = (function () {
    function TV(source) {
        this.source = source;
    }
    TV.prototype.showPicture = function () {
        return this.source.getPicture();
    };
    return TV;
})();
var cableTV = new TV(new AntennaAdapter());
var gameTV = new TV(new ConsoleAdapter());
cableTV.showPicture();
gameTV.showPicture();
