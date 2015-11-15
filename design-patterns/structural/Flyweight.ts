// Flyweight object
class Lamp {
    constructor(private color: string){}
}

// Flyweight factory
class LampFactory {
    private lamps = {};

    getLamp(color: string): Lamp {
        if (!this.lamps[color]) {
            this.lamps[color] = new Lamp(color);
        }

        return this.lamps[color];
    }

    getTotalSize() : number {
        return Object.keys(this.lamps).length;
    }
}

var factory = new LampFactory();
var colors = ['Red', 'Orange', 'Yellow', 'Green',
    'Cyan', 'Blue', 'Violet', 'Purple', 'Magenta',
    'Pink', 'Brown', 'White', 'Gray', 'Black'];
var colorsLength = colors.length;

for(var i = 0; i < 2000; i++) {
    var random = Math.floor(Math.random() * colorsLength);
    factory.getLamp( colors[random] );
}

console.log(factory.getTotalSize() + ' lamps have been created.');