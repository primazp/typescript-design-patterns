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
var BankAccount = (function () {
    function BankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getOwner = function () { return this.owner; };
    BankAccount.prototype.getBalance = function () { return this.balance; };
    return BankAccount;
})();
var BankAccountProxy = (function () {
    function BankAccountProxy(realObject) {
        this.realObject = realObject;
    }
    BankAccountProxy.prototype.checkAccess = function () {
        if (this.realObject.getOwner() !== currentUser) {
            throw new Error('Unauthorized!');
        }
    };
    BankAccountProxy.prototype.deposit = function (amount) {
        this.checkAccess();
        return this.realObject.deposit(amount);
    };
    BankAccountProxy.prototype.withdraw = function (amount) {
        this.checkAccess();
        return this.realObject.withdraw(amount);
    };
    BankAccountProxy.prototype.getOwner = function () {
        this.checkAccess();
        return this.realObject.getOwner();
    };
    BankAccountProxy.prototype.getBalance = function () {
        this.checkAccess();
        return this.realObject.getBalance();
    };
    return BankAccountProxy;
})();
currentUser = 'John Doe';
var account = new BankAccount('John Doe', 500);
var accountProxy = new BankAccountProxy(account);
accountProxy.deposit(200);
console.log(accountProxy.getBalance());
currentUser = 'Jane Doe';
try {
    accountProxy.withdraw(200);
}
catch (e) {
    console.log(e);
}
currentUser = 'John Doe';
console.log(accountProxy.getBalance());
