console.log("Tuples");
//It is defined fixed size array and declare type first then create an array.
//It is maintain order like first number then string, boolean etc.

// const personInfo: [string, number, boolean] = ["Raziullah", 25, true];

//defining a tuple type for person information
type personInfo = readonly[string, number, boolean];

//Function to display person information
const displayPersonalInfo = (arr: personInfo):void => {
    const [name, age, hasDriverLicense] = arr;
    console.log(`Name: ${name}, Age: ${age}, DriverLicense: ${hasDriverLicense ? "Yes" : "No"}`);  
}

//Example usage
const p1: personInfo = ['Raziullah', 29, true];
const p2: personInfo = ['Rahul', 38, false];
// p2.push(10); //it is added succesfully but we want to no one add or remove. use readonly 

displayPersonalInfo(p1);
displayPersonalInfo(p2);
console.log(p2);


//HOMEWORK
//? Q1. You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements.
//Product name (string)
//Price (number)
//quantity (number)
//Create two product instances using this tuple type and display their information.
type ProductInfo = readonly [string, number, number];

const displayProductInfo = (p1: ProductInfo): void => {
    const [name, price, quantity] = p1;
    console.log(`Product Name: ${name}, Price: ${price} and Quantity: ${quantity}`);
    
}
const prod1: ProductInfo = ['Mobile', 12000, 4];
const prod2: ProductInfo = ['Pillow', 120, 2];
displayProductInfo(prod1);
displayProductInfo(prod2);

//Q2. You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements.
//Subject name (string)
//grade (number)
// Create ar array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

type SubjectGrade = readonly[string, number];
const sub1: SubjectGrade = ['Math', 80];
const sub2: SubjectGrade = ['English', 40];
const sub3: SubjectGrade = ['Science', 70];
const averageGrade = (sub1: SubjectGrade, sub2: SubjectGrade, sub3: SubjectGrade): string => {
    const [, grade1] = sub1;
    const [, grade2] = sub2;
    const [, grade3] = sub3;
    const avg = (grade1+grade2+grade3)/3;
    return `The average of three subject is: ${avg}`;
}
console.log(averageGrade(sub1, sub2, sub3));


//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

type WeatherData = readonly[string, number, string];
const displayWeather = (w1: WeatherData) => {
    const [city, temp, cond] = w1;
    console.log(`City: ${city}, Temperature ${temp}, Weather condition ${cond}`);
    
}
const wdr1: WeatherData = ["Rajkot", 12, 'Rainy']; 
displayWeather(wdr1); 