// Command interface
interface Launcher {
  fire(): void;
}

// The receiver A
class AirToAirMissile {
  public launch(): void {
    console.log("Launching air to air missle...");
  }
}

// The receiver B
class AirToSurfaceMissile {
  public launch(): void {
    console.log("Launching air to surface missle...")
  }
}

// Concrete command A
class A2ALauncher implements Launcher {
  fire() {
    new AirToAirMissile().launch();
  }
}

// Concrete command B
class A2SLaucnher implements Launcher {
  fire() {
    new AirToSurfaceMissile().launch();
  }
}

new A2ALauncher().fire();
new A2SLaucnher().fire();
