console.log('Arrays in typescript...');
//Four way to create an array and initilize arrays 

// 1. Using square brackets:
const numbers: number[] = [1, 2, 3, 4, 5, 6];

// 2. Using the array constructor:
const numbers1: number[] = new Array(1, 2, 3, 4, 5, 6);

// 3. sing the Array.of method:
const numbers2: number[] = Array.of(1, 2, 3, 4, 5, 6);

// 4. Using a generic array type, Array<elementType>.

let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(fruits[0]);
console.log(fruits.length);


//Homework
const value1 = [1, 2, 3, 4, 5]; //--> Yes
//Is value1 an arrar? Yes or no
console.log(Array.isArray(value1)) //true

const value2 = 'Hello, World!';  //-->No
//Is value2 an arrar? Yes or no

const value3 = {name: 'Jhon', age: 30}; //--> No
//Is value2 an arrar? Yes or no

const value4 = [true, false, true]; //--> Yes
//Is value2 an arrar? Yes or no

const value5 = 42; //--> No
//Is value2 an arrar? Yes or no