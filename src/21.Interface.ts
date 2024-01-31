console.log("Interface...");

interface Greet {
    name: string;
    age: number;
}

const greets: Greet = {
    name: 'Raziullah',
    age: 21,
}


//Define a interface or type representing a product with properties for name, price, and quality. Create a product object with the following data:
//Name: "Laptop"
//Price: 1000
//Quantity: 5

interface Prod {
    name: string;
    price: number;
    quantity: number;
}

const produ: Prod = {
    name: "Lapto",
    price: 1000,
    quantity: 5
}

//##Calculate Total Price
//1. Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price(price * quantity) of the products.

const calculateTotalPrice1 = (obj: Prod) => {
    return `The total price is: ${obj.price * obj.quantity}`;
}
console.log(calculateTotalPrice1(produ));


