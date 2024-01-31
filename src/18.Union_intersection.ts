console.log("Union Intersection");

const inputValue = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid Input");
  }
};
console.log(inputValue(55));
console.log(inputValue("Hello"));

//Homework
//we want to create a function that formats the value passed to it in a specific way based on its type:
//If the value is a number, it should add a dollar sign and format it with two decimal places.
//If the input is a boolean it should retiurn "Yes" for true and "No" for false.
//If the input is a string, it should capitalize the first letter.

let fn = (val: number | boolean | string): number | boolean | string => {
  if (typeof val === "number") {
    return `$${val}.00`;
  } else if (typeof val === "boolean") {
    return val === true ? "Yes" : "false";
  } else if (typeof val === "string") {
    return val.at(0)?.toUpperCase() + val.slice(1);
  } else {
    throw new Error("Invalid input");
  }
};
console.log(fn("apple"));
console.log(fn(99));
console.log(fn(true));

//Intersection  --To combine multiple types in one type
// --Jab humko complete data chahiye ho to jaise 2, 3 object ho un sabka data chahiye ho to use karte karte h intersection.

type Persons = {
  name: string;
  age: number;
};
type Employee = {
  name: string;
  emp_id: number;
  department: string;
};

// type EmployeeDetails = Persons | Employee;  //dono me se koi ek ya phir dono likh sakte h
type EmployeeDetails = Persons & Employee; //compulsory hai don type alias ka property object me likhna he padega
const emp: EmployeeDetails = {
  name: "Rahul",
  age: 23,
  emp_id: 123,
  department: "IT",
};

//You are given two typescript types: User and MyLocation. Ther User type represent basic user information, while the MyLocation type contains details about the user's location. create a function called createUserProfile that takes a User object and a MyLocation object as arguments and prints the user's name and user the city they are from.

type User = {
  name: string;
  age: number;
};
type MyLocation = {
  city: string;
  country: string;
};

const user: User = {
  name: "Raziullah",
  age: 25,
};
const myLocation: MyLocation = {
  city: "Rajkot",
  country: "India",
};

function createUserProfile(user: User, myLocation: MyLocation): void {
  console.log(`User name is ${user.name}, and city is ${myLocation.city}`);
}
createUserProfile(user, myLocation);

//Homework
//Combine User and Account Data
//You are building a user management system, and you have two typescript types.

//User: Represent basic user information, with the folowing peoperties:
// id(number)
// name(string)
// email(string)

//Account: Contains details about the user's account, with the following properties:
//accountId(number)    --> unique
//accountType(string) --> (saving, checking etc)
//balance(number)
type User1 = {
  id: number;
  name: string;
  email: string;
};
type Account = {
    accountId: number;
    accountType: string;
    balance: number;
};
type CombineData = User1 & Account;
const dt: CombineData = {
    id: 12,
    name: 'Raziullah',
    email: 'raziullahkhan25@gmail.com',
    accountId: 123456789,
    accountType: 'Saving',
    balance: 10000,
}

//Your task is to create a function called combineUserAndAccount that takes a User Object and an Account object as argument and returns a new object representing the combined information of the user and their account.
const combineUserAndAccount = (obj: CombineData): CombineData =>{
    return {...obj};
}
console.log(combineUserAndAccount(dt));
