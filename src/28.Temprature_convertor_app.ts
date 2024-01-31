//Q2. Temperature Converter
//Define a Typescript class Temperature with a private property _celcius set to 0.
//Implement a getter method celcius that returns the temperature in celcius.
//Implement a setter method celcius that set the temperature in celcius. 
//Implement a getter method fahrenheit that converts Celcius to Fahrenheit using the formula (C * 9/5) + 5/9.
//Implement a setter method fahrenheit that converts Fahrenheit to Celcius using the formula (F - 32) *5/9
//Create an instance of a Temperature class.
//Use the setter to set the Temperature in Celcius to 25 and then use the getter for fahrenheit. What fahrenheit value do you expect?
//Use the setter to set the Temperature in Fahrenheit to 98.6 and then use the getter for Celcius. What Celcius value do you expect?

class Temperature {
    private _celcius:number = 0;

    public get celcius() {
        return this._celcius;
    }

    public set celcius(theCelcius: number) {
        if(!theCelcius) {
            throw new Error("Please enter celcius number");
        }
        this._celcius = theCelcius;
    }

    // (C * 9/5) + 5/9.
    public get fahrenheit() {
        return (this._celcius * 9/5) + 32;
    }

    public set fahrenheit(theFahrenheit: number) {
        if(!theFahrenheit) {
            throw new Error("Please enter fehrenheit number");
        }
        this._celcius = (theFahrenheit - 32) * 5/9;
    }
}

const temp: Temperature = new Temperature();
temp.celcius = 25;
console.log(`The ${temp.celcius} celcius = ${temp.fahrenheit} fehrenheit`);

temp.fahrenheit = 98.6;
console.log(`The ${temp.fahrenheit} fehrenheit = ${temp.celcius} degree celcius`);
