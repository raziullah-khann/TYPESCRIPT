//Inheritance in typescript
class Prsn {
    public name: string;
    protected age: number;
    protected hobbies: string[];
     
    constructor(nm: string, age: number, hob: string[]) {
        this.name = nm;
        this.age = age;
        this.hobbies = hob;
    }

    introduce(): string {
        return`Hi I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(", ")}`
    }
}

class Stu extends Prsn{
    grade: number;

    constructor(nm: string, age: number, hob: string[], g: number) {
        super(nm  , age, hob);
        this.grade = g;
    }

    // introduce(): string {
    //     return`Hi I am ${this.name} and I am ${this.age} years old.I am in grade ${this.grade} I love ${this.hobbies.join(", ")}`
    // }

    introduce(): string {
        return` ${super.introduce()}.I am in grade ${this.grade}`
    }
}

const prsn1: Prsn = new Prsn('Raziullah', 21, ['reading', 'painting']);
const prsn2: Prsn = new Prsn('Rahul', 25, ['reading', 'painting']);
const st1: Stu = new Stu('Kumar', 25, ['reading', 'painting'], 10);
console.log(st1.introduce());
console.log(st1.name);
console.log(prsn1.name);
// console.log(prsn1.age);  //Property 'age' is protected and only accessible within class 'Prsn' and its subclasses