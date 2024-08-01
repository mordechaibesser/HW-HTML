function BankAccount(initialBalance) {
    this.balance = initialBalance;
    this.performTransaction = function (amount) {
        this.balance += amount;
    };
}


const account1 = new BankAccount(100);
const account2 = new BankAccount(200);


account1.performTransaction(50);
account1.performTransaction(-30);

account2.performTransaction(100);
account2.performTransaction(-50);

console.log(`Account 1 balance (Part A): ${account1.balance}`);
console.log(`Account 2 balance (Part A): ${account2.balance}`); 250

// Part B: Using call and apply with Separate transaction Function
function transaction(amount) {
    this.balance += amount;
}


const account3 = { balance: 100 };
const account4 = { balance: 200 };


transaction.call(account3, 50);
transaction.call(account3, -30);


transaction.apply(account4, [100]);
transaction.apply(account4, [-50]);

console.log(`Account 3 balance (Part B): ${account3.balance}`);
console.log(`Account 4 balance (Part B): ${account4.balance}`);

// Part C: Using bind to Create a Bound Function
function performTransaction(amount) {
    this.balance += amount;
}


const savingsAccount = { balance: 500 };


const depositFiftyInSavings = performTransaction.bind(savingsAccount, 50);


depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();

console.log(`Savings account balance (Part C): ${savingsAccount.balance}`); 