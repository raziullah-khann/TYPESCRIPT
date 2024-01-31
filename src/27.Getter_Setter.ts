class Person3 {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

const pp1: Person3 = new Person3(10, "Raziullah", "Khan");
console.log(pp1.getFullName());
console.log(pp1.age);

//Q1. Bank Account Balance
//Create a Typescript class BankAccount with a private property _balance initialized to 0.
//Implement a getter method balance that returns the current balance.
//Implement a setter method balance that updates the balance if the new value is non-negative.Otherwise, log an error message.
//Instantiate an object of the BankAccount class.
//Use the setter to set balance to 1000 and use the getter to display the updated balance.
//Try setting a negative balance using the setter . what output do you expect

class BankAccount {
    private _balance: number = 0;

    public get balance(): number {
        return this._balance;
    }

    public set balance(curretBalance: number) {
        if(curretBalance <= 0) {
            throw new Error("Please set positive number");
        }
        this._balance = curretBalance;
    }
}

const ba:BankAccount = new BankAccount();
ba.balance = 1000;
console.log(ba.balance);

// Try setting a negative balance using the setter
// ba.balance = -500; //// This will log an error message


