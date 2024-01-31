//In Typescript, type annotatition is a way of expicitly where we can specify the type of the variables, function parameters and object properties. We can specify the type using :Type after the name of the variable, parameter or property. There can be a space after the colon.

let myName: string = 'Raziullah';  //variable annotation

const a = (id: number, name: string): void => {  // function annotation
    console.log(`Id = ${id} Name = ${name}`)
}

let employe : {   //object annotation
    id: number,
    name: string
};

employe = {
    id: 10,
    name: 'Raziullah'
}


// Number types

let s:number = 10;
console.log(s.toString(2));
console.log(s.toExponential(1));
console.log(s);

let myNumber: number = 10.8788;
console.log(myNumber.toFixed(5));


// let myAge: number = 21;
// let invalidResult: number = myAge + " years";  //Type 'string' is not assignable to type 'number'.
// console.log(invalidResult);

let invalidValue: string = "123";
let convertInNumber: number = Number(invalidValue);
console.log(convertInNumber);

// let computedValue: number = Math.sqrt(16);  //4

let nanValue: number = NaN;


//string Types
let myFullName = "Raziullah"
let myLastName = "Khan"

//1.-->todo string initialization
//Declare a variable message of type string and assign it the value "Hello, Typescript".

let message: string = "Hello, Typescript "

//2.--> todo concatenation
// Create two varioables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.

let firstName: string = 'Raziullah';
let lastName: string = 'Khan';
let fullName: string = firstName +" "+ lastName;
console.log(fullName);


//3.todo --> string length
//Declare a variable sentence of type string and assign it a sentence of your choice. Find the lenght of the string and store it in a variable called sentenceLength.

let sentence: string = 'Welcome Typescript';
let sentenceLength: number = sentence.length;
console.log(sentenceLength);

//4.todo--> Uppercase and Lowercase
//Declare a variable text of type string and assign it a sentence of your choice. Convert the entire sentence to upperCase and store the result in a variable called upperCaseText. Then convert the entire sentence to lowercase ans store the result in a variable called lowerCaseText.

let text: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
let upperCaseText: string = text.toUpperCase();
let lowerCaseText: string = text.toLowerCase();
console.log(upperCaseText);
console.log(lowerCaseText);


//5. todo --> Substring
//Declare a variable longText of type string and assign it a long sentence. Exact the first 10 character from longText and store them in a variable called shortText.

let longText: string = "Designer at work who don't have any content for their product yet have the possibility to insert a dummy text into their design to judge on the arrangement of text on their site, on readability or on fonts and sizes."
let shortText: string = longText.substring(0, 10);
console.log(shortText);

//6. todo --> string comparision:
//Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

let str1: string = "Raziullah";
let str2: string = "Khan";
console.log(str1 == str2);

//7. topdo --> string template
//Declare a variable product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is price at{price} dollars."

let product: string = "Pillow";
let price: number = 55;
console.log(`"The product ${product} is price at ${price} dollars."`)