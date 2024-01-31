console.log('Function Call sinatures');
type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string;  //Method call signature only function structure
    // (country: string): string;
}

const student1: Student ={
    name: 'Raziullah',
    age: 21,
    greet: (country: string): string => {
        return `Welcome My name is ${student1.name} and I am ${student1.age} old and I am from ${country}`;
    }
}

const introduction = (student1: Student): string => {
    const {name, age} = student1;
    return `Welcome My name is ${name} and I am ${age} old`
}

console.log(introduction(student1));
console.log(student1.greet("India"));

//call signature
type Student2 = {
    name: string;
    age: number;
    gender?: string;
    (country: string): string;
}