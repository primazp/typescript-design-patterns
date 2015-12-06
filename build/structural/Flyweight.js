/**
* A flyweight is an object that minimizes memory use by sharing as much data as
* possible with other similar objects; it is a way to use objects in large numbers
* when a simple repeated representation would use an unacceptable amount of memory.
* Often some parts of the object state can be shared, and it is common practice to
* hold them in external data structures and pass them to the flyweight objects temporarily
* when they are used.
*
* Imagine a task that requires to render an enormous Christmas tree with 5000 lamps on it.
* But there are only 14 types of lamp. Obviously there is no need to create 2000 lamp
* objects in memory instead of 14 ones. This is when Flyweight pattern comes in handy.
*/
// Flyweight object
var Lamp = (function () {
    function Lamp(color) {
        this.color = color;
    }
    return Lamp;
})();
// Flyweight factory
var LampFactory = (function () {
    function LampFactory() {
        this.lamps = {};
    }
    LampFactory.prototype.getLamp = function (color) {
        if (!this.lamps[color]) {
            this.lamps[color] = new Lamp(color);
        }
        return this.lamps[color];
    };
    LampFactory.prototype.getTotalSize = function () {
        return Object.keys(this.lamps).length;
    };
    return LampFactory;
})();
var factory = new LampFactory();
var colors = ['Red', 'Orange', 'Yellow', 'Green',
    'Cyan', 'Blue', 'Violet', 'Purple', 'Magenta',
    'Pink', 'Brown', 'White', 'Gray', 'Black'];
var colorsLength = colors.length;
for (var i = 0; i < 2000; i++) {
    var random = Math.floor(Math.random() * colorsLength);
    factory.getLamp(colors[random]);
}
console.log(factory.getTotalSize() + ' lamps have been created.');
