console.log("Absract Class in Typescript!!!");

//In TypeScript, an abstract class is a class that cannot be instantiated directly. It is meant to be subclassed, and it may contain abstract methods that must be implemented by its subclasses. Abstract classes provide a way to define a common structure for a group of related classes while allowing certain methods to be implemented differently in each subclass.

//Example: Shape Hierarchy
//Suppose you are building a graphics application, and you want to create a hierarchy of different shapes. You can use  an abstract base class Shape to define common properties and methods that all shapes share.

abstract class Shape {
    constructor(protected color: string) {}
    abstract calculateArea(): number;
    abstract displayArea(): void;
}
class Circles extends Shape{
    constructor(protected color: string, protected radius: number){
        super(color)
    }

    public calculateArea(): number {
        return Math.PI *this.radius*this.radius;
    }

    displayArea(): void {
        console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
    }
}

const cc1 = new Circles("Red", 5);
cc1.displayArea();
console.log(cc1.calculateArea());
