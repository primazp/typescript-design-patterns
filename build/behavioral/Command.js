/**
* In object-oriented programming, the command pattern is a behavioral design pattern
* in which an object is used to encapsulate all information needed to perform an
* action or trigger an event at a later time. This information includes the method name,
* the object that owns the method and values for the method parameters.
*/
// Concrete command B
var ShinyButton = (function () {
    function ShinyButton(name, command) {
        this.name = name;
        this.command = command;
    }
    ;
    ShinyButton.prototype.click = function () {
        this.command.execute();
    };
    return ShinyButton;
})();
// Concrete command A
var SaveCommand = (function () {
    function SaveCommand() {
    }
    SaveCommand.prototype.execute = function () {
        console.log("Saving game state on disk...");
    };
    return SaveCommand;
})();
// Concrete command B
var LoadCommand = (function () {
    function LoadCommand() {
    }
    LoadCommand.prototype.execute = function () {
        console.log("Restoring game state from the previously saved file...");
    };
    return LoadCommand;
})();
var saveGameButton = new ShinyButton("Save Game", new SaveCommand());
var loadGameButton = new ShinyButton("Load Game", new LoadCommand());
saveGameButton.click();
loadGameButton.click();
