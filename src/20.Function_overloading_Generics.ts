//Home work:
// Here is the function overloading Example? 

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }

// const result1: number = add(5, 10) //ouput 15
// const result2: string = add("Hello", "World!") //ouput Hello World

//Solution  --> Generics solve function overloading problem
function add<T, U>(a: T, b: U) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add<number, number>(5, 10); // Output: 15
const result2 = add<string, string>("Hello", "World!"); // Output: HelloWorld
const result3 = add<number, string>(20, "World!"); 
const result4 = add<string, number>("Hello", 100); 
const result5 = add("Hello", true);
console.log("hgjjkjgjhhh", result1);
