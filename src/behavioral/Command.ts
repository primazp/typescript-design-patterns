// Command interface
interface Command {
  execute(): void;
}

// Concrete command B
class ShinyButton {
  constructor(private name: string, private command: Command){};

  public click(): void {
    this.command.execute()
  }
}

// Concrete command A
class SaveCommand implements Command {
  execute() {
    console.log("Saving game state on disk...");
  }
}

// Concrete command B
class LoadCommand implements Command {
  execute() {
    console.log("Restoring game state from the previously saved file...");
  }
}

var saveGameButton = new ShinyButton("Save Game", new SaveCommand());
var loadGameButton = new ShinyButton("Load Game", new LoadCommand());
saveGameButton.click();
loadGameButton.click();
