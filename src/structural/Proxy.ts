var currentUser;

class BankAccount {
    constructor(private owner: string, private balance: number) {}

    deposit(amount: number) : void {
        this.balance += amount;
    }

    withdraw(amount: number) : void {
        this.balance -= amount;
    }

    getOwner() : string {
        return this.owner;
    }

    getBalance() : number {
        return this.balance;
    }
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