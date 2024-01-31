console.log('Type alias in typescript');
//Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

// It is used for DRY

type Person = {
   name: string;
   age: number;
   isStudent: boolean;
   class?: string //optional property 
   address: {city: string; country: string};
}

const person1: Person = {
    name: 'Raziullah',
    age: 21,
    isStudent: true,
    address: {city: 'Vadodara', country: 'India'},
}
console.log(person1);

const person2: Person = {
    name: 'Kishan',
    age: 26,
    isStudent: true,
    address: {city: 'Mumbai', country: 'India'},
}
console.log(person2);

const person3: Person = {
    name: 'Max',
    age: 35,
    isStudent: false,
    address: {city: 'abc', country: 'Maxico'},
}
console.log(person3);

const person4: Person = {
    name: 'Ravi',
    age: 26,
    isStudent: false,
    address: {city: 'Surat', country: 'India'},
}
console.log(person4);

//##Calculate Total Price
//1. Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price(price * quantity) of the products.
type Product = {
    name: string;
    price: number;
    quantity: number
}
const Product1: Product = {
    name: 'Laptop',
    price: 1000,
    quantity: 5
};
const calculateTotalPrice = (product: Product): number => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(Product1));
