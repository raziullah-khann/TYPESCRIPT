//function declaration
function greet() {
    console.log('Hello Typescript!');
}
//function invocation
greet();

//Functions can also include parameter types and return type.

function sums(x: number, y: number): number {
 return x + y;
}
console.log(sums(2,3));

//using arrow function
const asd = (name: string, id: number) => {
    console.log(`Welcome ${name} and your id is ${id}`);
    
}
asd('Raziullah', 24);

//Todo Practice Time.

//Write a function called isPallindrome that takes a string as a parameter and returns true if the string is a pallindrome (read the same forwards and backwards) and false otherwise. 

// using loop
// const isPallindrome = (input: string): boolean =>{
//     let str = '';
//     for(let i = 0; i< input.length; i++){
//         str = input.charAt(i) + str;
//     }
//     if(str == input) {
//         return true
//     }
//     return false;
// }

//without using loop
const isPallindrome = (input: string): boolean =>{
    const arr = input.split("").join("");
    if(arr == input){
        return true;
    }
    return false;
}
console.log(isPallindrome('12321'));

//Homework
//1. Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
const calculateAverage = (ar: number[]): number =>{
    const lenght = ar.length;
    let avg = (ar.reduce((sum, val) => sum + val,0))/lenght;
    return avg;
}
let aa: number[] = [10, 50, 80, 90,100];
console.log(calculateAverage(aa));

//2. Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

const findMaxValue = (ar: number[]): number => {
    const max = Math.max(...ar);
    return max;
}
console.log(findMaxValue([10, 50, 80, 90,100]));


