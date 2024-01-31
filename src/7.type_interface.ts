let myNAme = 'Raziullah';  //The compiler infers the type string for the variable myNAme.

// myNAme = 5;//Type 'number' is not assignable to type 'string'

var arr = [0, 1, "test"];
arr.push("Apple");
// arr.push(true);   //Error  Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(arr);

function sum1(a: number, b: number) {
    return a + b;
}
let total: number = sum1(5,6);
// let str: string = sum1(5,6); // Compile Error

//--Important point for type interface
//--> Use type interface for simple cases where the assigned value clearly indicates the intended type.
var arr1 = [0, 1, "test"];
//--> When in doubt, provide expilcit type annotations to make your intentions clear.
let a1b: number = 525;
//Avoid relying too heavily on type inference when the assign value is complex or ambigious.
//Regularly review and refactor your code to ensure the inferred types align with your intentions.


//-->1. Declare a variable message and iniyialize it with the value "Hello, Typescript!". Infer the type of message using type interface.

let message1 = "Hello, Typescript!";


//-->2. Write a function calculateArea that takes the length and width parameters of type number and returns their product. Infer the return type of the function using type interface.

function calculateArea(length: number, width: number) {
    return length * width;
}
console.log(calculateArea(4,5));
