console.log("Generics in Typescript ...");

// TypeScript can also infer the type of the generic parameter from the function parameters.

//This is problem before generics -- user dont know which type data take function take.

// function logAndReturn(value: number | string): number | string {
//     console.log(value);
//     return value;
// }

// const numberResult = logAndReturn(42);
// const stringResult = logAndReturn("Hello Generics");
// const booleanResult = logAndReturn(true);  //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);

//Solution Use Generic when don't which type data take function generic helps to check in runtime

function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
}
const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>("Hello Generics");
const booleanResult = logAndReturn<boolean>(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

