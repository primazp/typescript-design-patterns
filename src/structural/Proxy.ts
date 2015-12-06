/**
* A proxy, in its most general form, is a class functioning as an interface to
* something else. The proxy could interface to anything: a network connection,
* a large object in memory, a file, or some other resource that is expensive or
* impossible to duplicate. In short, a proxy is a wrapper or agent object that is
* being called by the client to access the real serving object behind the scenes.
*
* The example below is a simple Security Proxy. BankAccountProxy will determine
* if the current user is an owner of the account and, therefore, is able to access
* the object of interest.
*/

var currentUser;

class BankAccount {
    constructor(private owner: string, private balance: number) {}

    deposit(amount: number) : void {
        this.balance += amount;
    }

    withdraw(amount: number) : void {
        this.balance -= amount;
    }

    getOwner() : string { return this.owner; }

    getBalance() : number { return this.balance; }
}

class BankAccountProxy {
    constructor(private realObject: BankAccount) {}

    private checkAccess() {
        if (this.realObject.getOwner() !== currentUser) {
            throw new Error('Unauthorized!');
        }
    }

    deposit(amount: number) : void {
        this.checkAccess();
        return this.realObject.deposit(amount);
    }

    withdraw(amount: number) : void {
        this.checkAccess();
        return this.realObject.withdraw(amount);
    }

    getOwner() : string {
        this.checkAccess();
        return this.realObject.getOwner();
    }

    getBalance() : number {
        this.checkAccess();
        return this.realObject.getBalance();
    }
}

currentUser = 'John Doe';
var account = new BankAccount('John Doe', 500);
var accountProxy = new BankAccountProxy(account);
accountProxy.deposit(200);
console.log(accountProxy.getBalance());

currentUser = 'Jane Doe';
try {
    accountProxy.withdraw(200);
} catch (e) {
    console.log(e);
}
currentUser = 'John Doe';
console.log(accountProxy.getBalance());
