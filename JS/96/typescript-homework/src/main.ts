function addNumbers(a: number, b: number): number {
  return a + b;
}

function greetUser(name: string, age: number): string {
  return `Sholom Aleichem, ${name}! You are ${age} years old.`;
}


const sum = addNumbers(1234567890, 9876543210);
console.log(`Sum: ${sum}`);

const greeting = greetUser("Mordechai", 35);
console.log(greeting);


interface User {
  id: number;
  name: string;
  email: string;
}

function printUserDetails(user: User): void {
  console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
}


const user: User = {
  id: 1,
  name: "Mendy Besser",
  email: "mendybesser@gmail.com",
};

printUserDetails(user);


class Product {
  constructor(
      public id: number,
      public name: string,
      private price: number
  ) {}

  getPrice(): number {
      return this.price;
  }
}


const product = new Product(101, "Laptop", 999.99);
console.log(`Product Name: ${product.name}, Price: $${product.getPrice()}`);
