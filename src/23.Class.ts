//class is a blueprint for creating object
// It is a group of objects which have common properties. 

class Personss {
    name: string;
    age: number;
    hobbies: string[];
     
    constructor(nm: string, age: number, hob: string[]) {
        this.name = nm;
        this.age = age;
        this.hobbies = hob;
    }
}

const per1: Personss = new Personss('Raziullah', 21, ['reading', 'painting']);
const per2: Personss = new Personss('Rahul', 25, ['reading', 'painting']);
console.log(per1.name);
