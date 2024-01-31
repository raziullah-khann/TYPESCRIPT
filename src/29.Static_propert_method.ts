// class Human {
//     constructor(public name: string) {}
// }

// const h1 = new Human("Raziullah");
// h1.name;

//without instace we get
class Circle {
    public static pi: number = Math.PI;

    public static calculateArea(radius: number): number {
        return this.pi * radius * radius;
    }

    public calculateCircumference(radius: number,): number {
        return 2 * Circle.pi * radius;
    }
}
const circleObj = new Circle();
console.log(Circle.pi);
console.log(Circle.calculateArea(5));
console.log(circleObj.calculateCircumference(5));

