console.log("Object in Typescript");

const person: {
  name: string;
  age: number;
  isStudent: boolean;
  address: { city: string; state: string; country: string };
} = {
  name: "Raziullah",
  age: 21,
  isStudent: true,
  address: {
    city: "Rajkot",
    state: "Gujarat",
    country: "India",
  },
};

//Homework
//1. Create a Product Object: and define a product properties for name, price, and quantity. Create a product object with the following data:
//Name: 'Laptop'
//Price: 1000,
// Quality: 5
const Product: { name: string; price: number; quantity: number } = {
    name: 'Laptop',
    price: 1000,
    quantity: 5
};
