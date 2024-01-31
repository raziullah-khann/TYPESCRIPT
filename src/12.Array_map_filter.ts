//Array Map and filter method in typescript

const numberss: number[] = [1, 2, 3, 4, 5, 6];
//Map method creates a n new array by applying a provided function to each elements of the array original array. It transform each element and return a new array with the transformed values.


//1: Doubling each number
const trans: number[] = numberss.map((x: number) => x * 2);
console.log(trans);

//2: Converting numbers to string
const numToStr: string[] = numberss.map((curVal: number) => curVal.toString());
console.log(numToStr);

//Filter method

//1: Filtering even number
const evenNum: number[] = numberss.filter((curVal: number) => curVal % 2 == 0);
console.log(evenNum);

//1: Filtering greater than 3 
const greaterThan3: number[] = numberss.filter((curVal: number) => curVal > 3);
console.log(greaterThan3);


//Homework problem
//map
//1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
let frt: string[] = ['Apple', 'Orange', 'Banana']; 
const upperCaseResult: string[] = frt.map((curVal: string) => curVal.toUpperCase());
console.log(upperCaseResult);

//2: Given an array of numbers, create a new array that contains the square of each number.
let nbr: number[] = [10, 20, 30, 40, 50]; 
const sqr: number[] = nbr.map((curVal: number) => curVal * curVal);
console.log(sqr);

//filter methodd
//1: Given an array of strings, create a new array that contains only the strings with a length greater than 15.
let frts: string[] = ['Applenmbdjfdkjhfkjdfk', 'Orange', 'Banana']; 
const gtr16: string[] = frts.filter((curVal: string) => curVal.length > 15);
console.log(gtr16);

//2: Given an array of strings, filter out the names that start with the letter 'A'.
const nms: string[] = ['Alice', 'Bob', 'Anna', 'Andrew', 'Alex'];
const startA: string[] = nms.filter((curVal: string) => curVal.startsWith('A'));
console.log(startA);

