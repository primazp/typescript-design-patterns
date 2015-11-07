class Singleton {
    private static instance: Singleton;

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

console.log( new Singleton() === new Singleton() );