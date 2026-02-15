class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("The deposit amount must be greater than zero.");
    }
  }

  // Метод для зняття грошей
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds in the account");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300