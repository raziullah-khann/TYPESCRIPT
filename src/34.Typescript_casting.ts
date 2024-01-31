//In TypeScript, type casting refers to the process of explicitly changing the data type of a value from one type to another. 

//There are two main ways to perform type casting in TypeScript:

// 1. Angle Bracket Syntax:
//In this example, (<string>variable1) is used to cast variable1 to a string type.
let variable1: any = "Hello, TypeScript!";
let leng: number = (<string>variable1).length;
console.log(leng);

//2. As-Keyword:
//Here, (variable1 as string) is used for type casting.
let variable2: any = "Hello, TypeScript!";
let lengt: number = (variable1 as string).length;
console.log(lengt);
