console.log("Array Methods...!")

//Arrays in typescript come with built-in methods that allow you to perform common operations.

const fruits1: string[] = ['apple', 'banana', 'orange', 'mango'];

//a) Adding elements to an array using push:
const addEl = fruits1.push('Cherry');
console.log(addEl);
console.log(fruits1);

//b) Removing elements to an array using pop:
const lastEl = fruits1.pop();
console.log(lastEl);
console.log(fruits1);

//sort() --Itreturn sorted array and change in original array
const srt = fruits1.sort();
console.log(srt);
console.log(srt);

//Array Iteration
// 1. Using for loop
console.log('For loop');
for(let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]); 
}

//2. for ... of loop  --> of me direct value milega
console.log('For of loop');
for(const j of fruits1) {
    console.log(j);
}

//3. for in loop --> index dega array ka
console.log("For in loop");
for(const k    in fruits1) {
    console.log(k, fruits1[k]); 
}

//Using for each loop
console.log('foreach loop');
fruits1.forEach((x: string,y: number) => console.log(y,x));


