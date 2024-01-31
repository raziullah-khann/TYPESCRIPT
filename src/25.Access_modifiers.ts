class Perso {
    // Public members can be accessed from outside the class
    public name: string;
  
    // Private members are only accessible within the class
    private age: number;
  
    // Protected members are accessible within the class and its subclasses
    protected job: string;
  
    // Constructor with parameter properties
    constructor(name: string, age: number, job: string) {
      this.name = name;
      this.age = age;
      this.job = job;
    }
  
    // Public method
    public introduce(): string {
      return `Hi, I'm ${this.name}. I am ${this.age} years old. I work as a ${this.job}.`;
    }
  
    // Private method
    private celebrateBirthday(): void {
      this.age++;
      console.log(`Happy Birthday, ${this.name}! You are now ${this.age}.`);
    }
  
    // Protected method
    protected changeJob(newJob: string): void {
      this.job = newJob;
      console.log(`${this.name} has a new job: ${this.job}.`);
    }
  
    // Public method that calls private and protected methods
    public haveBirthdayAndChangeJob(newJob: string): void {
      this.celebrateBirthday(); // Accessing a private method
      this.changeJob(newJob);   // Accessing a protected method
    }
  }
  
  // Creating an instance of the Perso class
  const person10 = new Perso("Alice", 30, "Engineer");
  
  // Accessing public properties
  console.log(person10.name); // Valid
  // console.log(person.age); // Error: 'age' is private and only accessible within the class
  
  // Accessing public methods
  console.log(person10.introduce()); // Valid
  
  // Calling a public method that interacts with private and protected members
  person10.haveBirthdayAndChangeJob("Developer"); // Valid
  
  // Uncommenting the line below will result in a compilation error,
  // as 'age' is a private property and cannot be accessed outside the class.
  // console.log(person.age);
  