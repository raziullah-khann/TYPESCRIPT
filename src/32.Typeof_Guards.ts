/*
In TypeScript, type guards are a way to narrow down the type of a variable within a certain block of code. The typeof operator in TypeScript is commonly used in type guards to check the type of a variable or an expression. There are two main use cases for typeof guards: 
*/

const favHobbies = (hobby: string | string[]) => {
    if (typeof hobby === 'object' && Array.isArray(hobby)) {
        return hobby.map((a) => a);  // Using map without a callback
    } else {
        // console.log(hobby);
        return hobby
    }
};

console.log(favHobbies("coding"));
console.log(favHobbies(["coding", "reading"]));

