//Default parameter
const greet3 = (name: string, id: number = 1): string =>{
    return `Welcome ${name} and your id is ${id}`;
}
console.log(greet3('Raziullah'));  //Welcome Raziullah and your id is 1
console.log(greet3('Raziullah', 45));//Welcome Raziullah and your id is 45
console.log(greet3('Raziullah', undefined)); //Welcome Raziullah and your id is 1



//optional parameter
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}
console.log(Greet('Hello', 'Typescript')); //Hello Typescript!
console.log(Greet('Hello')); //Hello undefined!
// console.log(Greet('Hello', 'Typescript', 'Hello')); //ERROR--> Expected 1-2 arguments, but got 3.

