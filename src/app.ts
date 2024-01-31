console.log("Welcome Typescript!");
let numm: number = 5;
// num = 'Khan';  //Type 'string' is not assignable to type 'number'.
 
numm = 55;
console.log(numm);

//TODO 1: Write a program to add two numbers?
const addd = (n1: number, n2: number): number =>{
    return n1 + n2;
}
console.log(addd(5, 7));
//TODO 2: How to catch Errors & solve it?
//TODO 3: TS Configuration File?