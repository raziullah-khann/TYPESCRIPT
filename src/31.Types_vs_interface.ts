console.log("Types vs Interface in Typescript");

//1. Declaration Merging:
// interface Person {
//     name: string;
//   }

//   interface Person {
//     age: number;
//   }

// Merged interface
// { name: string; age: number; }

//2. Extending Interfaces:
interface Shape {
  color1: string;
}

interface Square extends Shape {
  sideLength: number;
}

//UNION
//1. Union and Intersection:
// type ID = string | number;
// type Person = { name: string; age: number };

// // Intersection type
// type Employee = Person & { employeeId: string };

//2. Literal Types:
type Color = 'red' | 'green' | 'blue';
type Greeting = `Hello, ${string}`;

// 3.Mapped Types:   
type ReadonlyPerson = Readonly<Person>;
