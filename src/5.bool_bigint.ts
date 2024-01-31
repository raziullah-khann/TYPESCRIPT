//Booolean type
let isMyName: boolean = true;
let isDone: boolean = true;


//Question: Check Even Number
//Write a typescript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

let isEven = (param1: number): boolean => {
    if(param1 % 2 == 0){
        return true;
    }
    return false;
}
console.log(isEven(8));

//todo homework --> write a typescript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.

function isDivisibleBy4And8(par: number) {
    return par % 4 === 0 && par % 8 === 0;
}
console.log(isDivisibleBy4And8(8))


//Bigint type

let bigNumber: bigint = 9007199254740992n;
// console.log(bigNumber);

let anotherBigNumber = BigInt(900719925474099256);
console.log(anotherBigNumber);


let sum = bigNumber + anotherBigNumber;
console.log(sum);

//let difference = bigNumber - anotherBigNumber;
//let product = bigNumber * anotherBigNumber;
//let division = bigNumber / anotherBigNumber;