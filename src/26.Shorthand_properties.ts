console.log("Shorhand property");

class Per { 
    constructor(public name: string, public age: number, protected hobbies: string[]) {}

    introduce(): string {
        return`Hi I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(", ")}`
    }
}

class Stud extends Per{
    constructor(name: string, age: number, hobbie: string[], public grade: number) {
        super(name, age, hobbie);
    }

    // introduce(): string {
    //     return`Hi I am ${this.name} and I am ${this.age} years old.I am in grade ${this.grade} I love ${this.hobbies.join(", ")}`
    // }

    introduce(): string {
        return` ${super.introduce()}.I am in grade ${this.grade}`
    }
}

const pr1: Per = new Per('Raziullah', 21, ['reading', 'painting']);
const pr2: Per = new Per('Rahul', 25, ['reading', 'painting']);
const std1: Stud = new Stud('Kumar', 25, ['reading', 'painting'], 10);
console.log(std1.introduce());
console.log(std1.name);
console.log(pr1.name);
// console.log(prsn1.age);  //Property 'age' is protected and only accessible within class 'Prsn' and its subclasses
