//In TypeScript, utility types are a set of predefined generic types that provide convenient and reusable transformations on existing types. These utility types help you create new types by modifying or combining existing ones.

//1. Partial<T>:
//Makes all properties of the type T optional by marking them as potentially undefined.
interface Userr {
  name: string;
  age: number;
}

const partialUser: Partial<Userr> = { name: "John" };
console.log(partialUser);

//2. Required
//Makes all properties of the type T required by marking them as potentially undefined.
interface Cars {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Cars> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};

//3. Record --> Record is a shortcut to defining an object type with a specific key type and value type.
// Record<string, number> is equivalent to { [key: string]: number }
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};


//4.Omit
//Omit removes keys from an object type.
 
interface value {
    num1: number;
    num2: number;
    num3: number;
}
const  myinfo: Omit<value, 'num2' | 'num3'> = {
    num1: 20
}
console.log(myinfo);

//5. Pick
// Pick removes all but the specified keys from an object type.

//It is opposite of omit
const  myinfor: Pick<value, 'num2' | 'num3'> = {
    num2: 20,
    num3: 200,
}
console.log(myinfo);

//6. Exclude
//Exclude removes types from a union.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.


//7. ReturnType
// ReturnType extracts the return type of a function type.

// function ADD(a: number, b: number): number {
//     return a+b;
// }
// console.log(ADD(5,6));

// type Point = {
//     ADD(): {x: number, y: number};
// }
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
  };
console.log(point);


//8.Parameters
// Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;
const points: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

//9. Readonly
//Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

interface Personn {
    name: string;
    age: number;
  }
  const personn: Readonly<Personn> = {
    name: "Dylan",
    age: 35,
  };
  person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.