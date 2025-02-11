// Annotations
// Annotations are used to specify the data type of a variable,
// parameter, function return value, and other types of values.
// Annotations help developers catch errors early in development by 
// allowing them to specify what types of values can be assigned to a given 
// variable or passed as an argument to a function.

// Strings
let myName: string = "Lin";
myName = "Lin Thet Zaw";
console.log(myName);

// Numbers
let favNumber: number = 8;
console.log(favNumber);

// Boolean
let tsHard: boolean = false;
console.log(tsHard);

// Type Inference
// Type inference is a feature in TypeScript that allows the compiler
// to automatically determine the type of a variable based on its value.
// In other words, if you declare a variable without explicitly specifying 
// its type, TypeScript will try to infer the type based on the value assigned to it.

let tech = "TypeScript";
console.log(typeof tech); 
let favNumberInferred = 8;
console.log(typeof favNumberInferred); 
let isHard = true;
console.log(typeof isHard); 

// Any Type
// TypeScript has a special `any` type that can be used to
// disable type checking for a variable. When a variable is annotated with the
// `any` type, TypeScript will allow it to have any value and 
// disable all type checking for that variable and its properties.

let color: any = "white";
color = 20;
color = true;
console.log(color);

// Array Types
// Arrays are a type of object that can store multiple values
// of the same data type. Arrays in TypeScript are typed, 
// which means you can specify the type of value that an array can hold.

// Using the square bracket notation [] to indicate an array of a specific type.
const nums: number[] = [1, 2];
const str: string[] = ["one", "two"];
console.log(str);

const items: string[] = [];
items.push('Keyboard');
console.log(items);

// Using the generic Array<Type> notation to indicate an array of a specific type.
const itemsGeneric: Array<string> = [];
itemsGeneric.push("Hello");
console.log(itemsGeneric);

// Multi-Dimensional Arrays
// A multi-dimensional array is an array that contains other arrays as its elements.
// Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with nested square brackets.

const singleDi: number[] = [1, 2, 3, 4, 5];
const multiDi: number[][] = [[1, 2, 3, 4]];
const tripleDi: number[][][] = [[[1, 2, 3, 4]]];

console.log(singleDi);
console.log(multiDi);
console.log(tripleDi);

// Objects
// An object in TypeScript is a structured data type that represents 
// a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and 
// the object itself can be annotated with a type, often defined using an interface or a type alias.

const person: { firstName: string; lastName: string; age: number } = {
    firstName: "He",
    lastName: "llo",
    age: 23
};
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// Error: Required properties missing
// const personError: { firstName: string; lastName: string; age: number } = {
//     firstName: "He",
//     lastName: "llo"
// };
// console.log(`Name: ${personError.firstName} ${personError.lastName}, Age: ${personError.age}`);

function printUser(): { name: string; age: number; location: string } {
    return {
        name: "he",
        age: 20,
        location: "blabla"
    };
}
const res = printUser();
console.log(res);

// Error: Required properties missing
// function printUserError(): { name: string; age: number; location: string } {
//     return {
//         name: "he",
//         location: "blabla"
//     };
// }
// const resError = printUserError();
// console.log(resError);

// Type Aliases
// A type alias is a way to create a new name for an existing type. It 
// allows you to define a custom type that refers to another type 
// and give it a more meaningful or descriptive name.

type User = {
    name: string;
    age: number;
    location: string;
};

const printUserInfo = (user: User) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};
const userInfoRes = printUserInfo({ name: "Ales", age: 20, location: "Blabla" });
console.log(userInfoRes);

// Optional Properties
// You can make a certain property optional in an object type by adding a
// question mark (?) after the property name.

type UserOptional = {
    name: string;
    age?: number;
    readonly location: string;
};

const userOptional: UserOptional = {
    name: "Hi",
    location: "b"
};
console.log(userOptional);

// Intersection Types
// An intersection type is a way to combine multiple types into a 
// single type that includes all the properties and methods of each 
// constituent type. An intersection type is denoted by the & symbol.

type UserInfo = {
    first: string;
    last: string;
    age: number;
};

type AccountDetail = {
    email: string;
    password: string;
};

type UserIntersection = UserInfo & AccountDetail;
const myUser: UserIntersection = {
    first: "He",
    last: "llo",
    age: 25,
    email: "B",
    password: "b"
};
console.log(myUser);

// Unions
// Unions are used to declare a type that can have one of several 
// possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.
// The syntax for defining a union type in TypeScript uses the pipe symbol (|).

let password: string | number = 20;

type UserInfoUnion = {
    first: string;
    last: string;
    age: number;
};

type AccountDetailsUnion = {
    email: string;
    password: string;
};

let userUnion: UserInfoUnion | AccountDetailsUnion = {
    email: "BM",
    password: "B"
};
console.log(userUnion);

const itemsUnion: (number | string)[] = [1, 2, 3, "he"];
console.log(itemsUnion);

// Literal Types
// Literal types allow you to specify a value that can only be 
// one specific literal value. This means that a variable with a 
// literal type can only have one specific value and no other.

let direction: "left" | "right" | "up" | "down";
direction = "left";
// direction = "diagonal"; // Error

// Function Parameter Annotations
// Function parameter annotations in TypeScript are used to specify the expected 
// types of the parameters that a function takes.

// Regular Function
function addOne(num: number): number {
    return num + 1;
}
const addOneRes = addOne(3);
console.log(addOneRes);

// Error
// function addOneError(num: number): number {
//     return num + 1;
// }
// const addOneErrorRes = addOneError("fsdf"); // Error
// console.log(addOneErrorRes);

// Arrow Function with Type Annotations
const double = (x: number, y: number): number => x * y;
const doubleRes = double(2, 20);
console.log(doubleRes);

// Void in TypeScript
// Void is a type that represents the absence of any value.
// It is often used as the return type for functions that 
// do not return a value.

function printMessage(message: string): void {
    console.log(`This is my ${message}`);
}
printMessage("Message");

// Never
// The `never` keyword is used to indicate that a function will 
// not return anything or that a variable can never have a value.
// The `never` type is useful for indicating that certain 
// code paths should never be reached, or that certain values 
// are impossible. It can help catch errors at compile-time instead of runtime.

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}

let x: never;

function neverReturn(): never {
    while (true) {}
}

x = neverReturn();

// Tuples
let myType: [number, string];
myType = [10, "He"];
console.log(myType);

const products: (number | string)[] = ["items", 12];
console.log(products);

const games: [string, number] = ["Games1", 2];
console.log(games);

// Enums
// Enums are a way to define a set of named constants. Enums allow 
// you to define a collection of related values that can be used 
// interchangeably in your code.

enum WeatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy"
}
console.log(WeatherConditions.Rainy);

// Class Properties Annotation
// You can annotate class properties with a type. This allows you to 
// define the data type of the property and ensure that it is always consistent.

class Person {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const personInstance = new Person("John", 20);
// personInstance.age = 12; // Error
console.log(personInstance);

// Access Modifiers
// In TypeScript, you can use access modifiers to control the visibility 
// of class members (properties and methods). Access modifiers 
// determine the ways in which class members can be accessed from within and outside the class.

// There are three types of access modifiers in TypeScript:
// public, private, and protected.

class PersonAccess {
    public first: string;
    private last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    getName(): string {
        return `${this.first} ${this.last}`;
    }
}

let p1 = new PersonAccess("John", "Doe");
console.log(p1.first);
// console.log(p1.last); // Error

// Getters & Setters
// Getters and setters are used to access and 
// modify class properties. Getters and setters allow 
// you to define a property in a class that looks like a 
// simple variable from the outside but internally has 
// additional logic for getting and setting the value.

class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const myInstance = new MyClass();
console.log(`Current Value: ${myInstance.myProperty}`); // Get value
myInstance.myProperty = 10; // Set value
console.log(myInstance);

// Interface
// An interface is a way to define a contract for the shape of an 
// object. It specifies the properties and their types that an
// object must have. Interfaces are a powerful tool for enforcing
// a certain structure in your code.

interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const computerExample: Computer = {
    name: "i7",
    ram: 8,
    hdd: 100
};
console.log(computerExample.name);

interface Movie {
    readonly name: string;
    ratings: number;
    genre?: string;
}

const movie1: Movie = {
    name: "Star Wars",
    ratings: 9.0,
    genre: "Action"
};
console.log(movie1.name);

// Error
// movie1.name = "fsd"; // Error

interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
console.log(add(2, 2));
console.log(subtract(2, 1));

interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
}

function greet(person: PersonInterface) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const john: PersonInterface = {
    firstName: "John",
    lastName: "Li",
    age: 20,
    sayHello() {
        console.log("Hi There");
    }
};

const aung: PersonInterface = {
    firstName: "Aung",
    lastName: "Li",
    age: 20,
    sayHello() {
        console.log("Hi Aung");
    }
};

greet(john);
greet(aung);

interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
    songName: 'Nature',
    singerName: "Image Drigon",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, Singer: ${singerName}`;
    }
};
console.log(song1.printSongInfo("Nature", "Image Drigon"));

interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    name: "Star Wars",
    genre: "Action",
    ratings: 8.9,
    printMovieInfo(name: string, price: number, ratings: number): string | number {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
    }
};

const movieRes = movie1.printMovieInfo('John Wick', 100, 8);
console.log(movieRes);

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log('Car is starting...');
    }

    stop(): void {
        console.log('Car is stopped....');
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();

// Original Interface
interface VehicleOriginal {
    brand: string;
    start(): void;
}

// Declaration Merging (Interface Extension)
interface VehicleOriginal {
    model: string;
    stop(): void;
}

const myCarExtended: VehicleOriginal = {
    brand: 'BMW',
    model: 'M3',

    start(): void {
        console.log('Car is starting...');
    },

    stop(): void {
        console.log('Car is stopped....');
    }
};

myCarExtended.start();
myCarExtended.stop();

// Generics
// In TypeScript, generics allow you to create reusable
// components that can work with a variety of types. Generics 
// make it possible for you to define functions, classes, and 
// interfaces that can work with different data types without
// having to duplicate code.

function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}

const numberGeneric = uniqueDataTypesFunc<number>(10, 20);
const stringGeneric = uniqueDataTypesFunc<string>('Hello', 'Hi');
const booleanGeneric = uniqueDataTypesFunc<boolean>(true, false);
console.log(stringGeneric);

interface Dog {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
    { name: "Buddy", breed: "Labrador" },
    { name: "Default", breed: "Unknown" }
);
console.log(dog1);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };
const resRandom = getRandomKeyValuePair<string>(stringObject);
console.log(resRandom);

const numberObject = { one: 1, two: 2, three: 3 };
const resNumRandom = getRandomKeyValuePair<number>(numberObject);
console.log(resNumRandom);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 == 0);
console.log(evenNumbers);

const stringArr = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortWords);

interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "yellow" }
];

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "red");
console.log(redFruits);

function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const reversedPair = reversePair("Hello", 20);
console.log(reversedPair);

class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());

stringBox.setContent("New Content Added");
console.log(stringBox.getContent());

const numberBox = new Box<number>(42);
console.log(numberBox.getContent());

numberBox.setContent(100);
console.log(numberBox.getContent());

// Type Narrowing
// Type narrowing is the process of refining a variable's type within a// conditional block of code. This allows you to write more precise 
// an type-sage code.
// TypeScript provides several mechanisms for narrowing SVGUnitTypes
// Type guards 
// The instanceof operator 
// Intersection types 

// Type guards
// Type guards are mechanisms that help TypeScript 
// understand and narrow down the types more precisely.
// One common type guard is the typeof operator.

type MyType = string | number;
function exampleFunction(value: MyType): void{
    if(typeof value === "string"){
        console.log(value.toLocaleUpperCase);
    }else{
        console.log(value.toFixed);
    }
}

exampleFunction("Hello");//HELLO
exampleFunction(20);//20.00

// instanceof operator
// The instanseof operetor is another type guard in TypeScript
// that allows you check weather an object is 
// an instance of a particular class or constructure function.
class Dog {
    bark() :void {
        console.log("Woff Woff");
    }
}

class Cat{
    meow(): void {
        console.log("Meow");
    }
}

function animalSound(animal: Dog | Cat) :void {
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat();

console.log(myDog)
console.log(myCat)

animalSound(myDog)//Woff Woff
animalSound(myCat)// Meow...

// Intersection types 
// Intetsection types in TypeScript allow you to combine 
// multiple types into a SVGTextPositioningElement. The resulting tupe will 
// have all the properties of each individual type. You create 
// intersection types using the & operator

type Employee = {
    id: number;
    name: string
}

type Manager = {
    department: string;
    role: string;
}

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
    id:123,
    name:"Alex Merson",
    department:"Engineering",
    role:"Team Lead"
}

console.log(manager.id)
console.log(manager.name)
console.log(manager.department)
console.log(manager.role);