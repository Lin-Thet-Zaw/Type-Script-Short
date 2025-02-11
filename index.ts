// // Functons Parameters Annotations
// // Function Parameter annotations in 
// // TypeScript are used to specify the expected 
// // types of the parameters that a function takes.

// // Regular Function
// function addOne(num: number){
//     return num + 1;
// }

// const res = addOne(3);


// // Error
// function addOne(num: number){
//     return num + 1;
// }
// const res = addOne(fsdf);
// console.log(res);

// // Arrow Func as any type
// const double = (x, y) => { x * y}
// const res =  double(2, 20);

// // Function as type
// const double = (x: number, y:number) => { x * y}
// const res =  double(2, 20);

// // Void in TypeScript
// // Void is a type that presents the absense of any value.
// // it is often used as the return type for function that
// // not return a value

// function printMessage(message: string){
//     console.log(`This is my ${message}`);
// }

// function printMessage(message: string){
//     console.log(`This is my ${message}`);
//     return message;
// }

// function printMessage(message: string) :void{
//     console.log(`This is my ${message}`);
//     // return message;
// }
// printMessage("Message");


// Never
// The never keyword is used to indicate that a function will 
// not return anything of that a variable can never have a value.
// The never type is usefull for indicating that certain 
// code paths should never be reached, or that certain values 
// are impossible. it can help catch errors at compile-time insted of rutime.
// Never
// A function that always throws an error 
// A function that has an infinite loop 
// A variable that can never have a value
// function throwError(message:string): never {
//     throw new Error(message)
// }

// function infiniteLoop():never{
//     while(true){}
// }

// let x: never;

// function neverReturn():never {
//     while(true){}
// }

// x = neverReturn();
// let myType: [number, string];
// myType = [10,"He"];
// console.log(myType);

// const products: (number | string) [] = ["itms", 12];
// console.log(products);

// const games:[string, number] = ["Games1", 2];
// console.log(games);

// Enums
// Emum is a way to define a set of named constants. Enums allow 
// you to define acollection of related values that can be used 
// interchangeably in your code.

// enum WeatherConditions {
//     Sunny = "sunny",
//     Cloudy = "cloudy",
//     Rainy = "raiy"
// }

// console.log(WeatherConditions.Rainy);


// Class Properties Annotation
// You can annotate class properties with a type. THis allows you to 
// define the data  type of the propertly and ensure that it is aways ContentVisibilityAutoStateChangeEvent.
// class Person {
//    readonly name:string;
//    readonly age:number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age=age
//     }
// }

// const person = new Person("Joh", 20);
// person.age = 12;
// console.log(person);

// class Person {
//      name:string;
//      age:number;
 
//      constructor(name: string, age: number){
//          this.name = name;
//          this.age=age
//      }
//  }
 
//  const person = new Person("Joh", 20);
//  person.age = 12;
//  console.log(person);

// Access Modifier
// In TypeScript, you can use access mofifiers to control the visibility 
// of class members(properties and methods). Access modifiers 
// determine the qays in wich class members can be accessed form within and outside the class .

// There are three types of access modifiers in TypeScriot
// public 
// private 
// protected

// Public
// Public: Members marked as public can be 
// accessed from anywhere, both iside and outside the class.

// Private
// Private: members marked as private can only be accessed from 
// within the class they are defined in.

// Protected
// Protedted: menbers marked as protected can be accessed from within the class thay are defined in, 
// as well as any subclass that extend the class.

// class Person {
//     public first:string,
//     public last:string;

//     constructor(first: string, last:string){
//         this.first = first;
//         this.last = last;
//     }
// }

// let p1 = new Person("John", "Doe");
// console.log(p1.first);

// Error

// class Person {
//     public first:string,
//      private last:string;

//     constructor(first: string, last:string){
//         this.first = first;
//         this.last = last;
//     }
// }

// let p1 = new Person("John", "Doe");
// console.log(p1.last);

// Fixed error with getter method

// class Person {
//     public first:string;
//      private last:string;

//     constructor(first: string, last:string){
//         this.first = first;
//         this.last = last;
//     }

//     getName(): string {
//         return `${this.first} ${this.last}`
//     }
// }

// let p1 = new Person("John", "Doe");
// console.log(p1.getName());


// class Human {
//     public first:string;
//     private last:string;
//     protected age?: number;


//     constructor(first: string, last:string){
//         this.first = first;
//         this.last = last;
//     }

//     getName(): string {
//         return `${this.first} ${this.last} ${this.age}`
//     }
// }

// let p1 = new Human("John", "Doe");

// class Person extends Human{
//     constructor(first:string, last:string, age: number){
//        super(first, last, age );
//     }
// }

// const my = new Person("Li", "The", 20);
// console.log(my.getName());

// Getters & Setters 
// Getters and setters are used to access and 
// modify class properties. Getters and setters allow 
// you to define a property in a class that looks like a 
// simple variable from the outside but internally has 
// additional logic for getting and setting the value.

// class MyClass {
//     private _myProperty: number = 0;

//     get myProperty() : number {
//         return this._myProperty;
//     }

//     set myProperty(value: number) {
//         this._myProperty = value;
//     }
// }

// const myInstance = new MyClass();
// get value
// console.log(`Current Value: ${myInstance.myProperty}`);

// // set value
// myInstance.myProperty = 10;
// console.log(myInstance);

// Interface
//Interface is a way to define a contract for the shape of an 
// object. It specifies the properties and their types that an
// object must have. Interface are a powerfull tool for enforcing
// a certain structure in your code.

// Decalaration merging
// One an interface is decalared, it cannot be directly modified.
// However, TypeScript allows what is informally referred to as 
// "declaration merging" "or" "interface extension" wich is often misconstructede as "re-opening"

// Declaration merging in TypeScript refers to the ability to 
// extend or argument an existing, including interface. This can be useful  when you want to add new 
// properties or methods to an exisiting interface without modifying the original CSSStyleDeclaration.

// interface Computer {
//     name:string;
//     ram:number;
//     hdd:number;
// }

// const computerExample : Computer = {
//     name: "i7",
//     ram:8,
//     hdd: 100
// }
// console.log(computerExample.name);

// interface Movie {
//     readonly name: string;
//     ratings: number;
//     genera?:string;
// }

// const movie1 : Movie = {
//     name:"Star Wars",
//     ratings: 9.0,
//     genera: "Action"
// }

// console.log(movie1.name);

// error
// movie1.name = "fsd";

// interface MathOperation {
//     (x: number, y: number) : number;
// }

// const add: MathOperation = (a, b) => a+b;
// const subtract: MathOperation = (a, b) => a -b;
// console.log(add(2,2));
// console.log(subtract(2,1));


// interface Person {
//     firstName:string;
//     lastName:string;
//     age:number;
//     sayHello():void
// }

// function greet(person: Person){
//     console.log(`Hello,${person.firstName} ${person.lastName}`)
//     person.sayHello();
// }

// const john: Person = {
//     firstName: "John",
//     lastName:"Li",
//     age:20,
//     sayHello(){
//         console.log("Hi There");
//     },
// };

// const aung: Person = {
//     firstName: "Aung",
//     lastName:"Li",
//     age:20,
//     sayHello(){
//         console.log("Hi Aung");
//     },
// };

// greet(john);
// greet(aung);

// interface Song {
//     songName: string;
//     singerName: string;
//     printSongInfo(songName: string, singerName: string) : string;
// }

// const song1 : Song = {
//     songName: 'Nature',
//     singerName: "Image Drigon",
//     printSongInfo: (songName, singerName) => {
//         return `Song: ${songName}, Singer: ${singerName}`
//     }
// }

// console.log(song1.printSongInfo("Nature", "Image Drigon"));

// interface MovieDetails {
//     readonly name:string;
//     ratings:number;
//     printMovieInfo(name: string, price:number, ratings: number): string | number;
// }

// interface MoivGenra extends MovieDetails {
//     genra: string;
// }

// const movie1: MoivGenra = {
//     name:"Star Wars",
//     genra:"Action",
//     ratings: 8.9,
//     printMovieInfo(
//         name:string,
//         price:number,
//         ratings:number
//     ) : string | number {
//         return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
//     },
// };

// const res = movie1.printMovieInfo('John Wick', 100, 8);

// console.log(res);

// interface Vehicle {
//     start(): void;
//     stop(): void;
// }

// class Car implements Vehicle {
//     start(): void {
//         console.log('Car is starting...')
//     }

//     stop(): void {
//         console.log('Car is stopped....')
//     }
// }

// const myCar = new Car();
// myCar.start();
// myCar.stop();

// Original Interface
// interface Vehicle {
//     brand: string;
//     start(): void;
// }

// declaration merging (interfece extension)

// interface Vehicle {
//     model: string;
//     stop(): void;
// }

// const myCar: Vehicle = {
//     brand:'BMW',
//     model:'M3',

//     start(): void {
//         console.log('Car is starting...')
//     },

//     stop(): void {
//         console.log('Car is stopped....')
//     }
// }

// myCar.start();
// myCar.stop();

// Generics
// In TypeScript, generics allow you to create visually-hidden-focusable
// components that can work wth a variety of types. Generics 
// make it possible for you to define functions, classes, and 
// interfaces that can work with defferent data types without
// having to duplicate code.

// Regular function
// function printNumber(item: number, defaultValue: number) : [number, number] {
//     return [item, defaultValue];
// }

// function printString(item: string, defaultValue: boolean) : [string, boolean] {
//     return [item, defaultValue];
// }
// const num = printNumber(10, 20)

// Error
// const num = printNumber('data', true)

// const string = printString('String', false)
// console.log(string);

// Generics
// function printNumber(item: any, defaultValue: any) : [any, any] {
//     return [item, defaultValue];
// }

// const num = printNumber(1, "ss")
// console.log(num);

// function uniqueDataTypesFunc<Type>(
//     item:Type,
//     defaultValue:Type
// ): [Type, Type] {
//     return [item, defaultValue];
// }

// const number = uniqueDataTypesFunc<number>(10,20);
// const string = uniqueDataTypesFunc<string>('Hello', 'Hi');
// const boolean = uniqueDataTypesFunc<boolean>(true, false);
// console.log(string);

// function uniqueDataTypesFunc <T>(item: T, defaultValue: T) : [T, T]{
//     return [item, defaultValue];
// }

// interface Dog {
//     name: string;
//     breed: string;
// }

// const dog1 = uniqueDataTypesFunc<Dog> (
//     {name: "Buddy", breed: "Labrador"},
//     {name: "Default", breed:"Unknown"}
// );

// console.log(dog1);

// function getRandomKeyValuePair<T>(obj: {[key: string] : T}) : 
// {
//     key: string;
//     value: T;
// } {
//     const keys = Object.keys(obj);
//     const randKey = keys[Math.floor(Math.random()  * keys.length)];
//     return {key: randKey, value: obj[randKey]};
// }

// const stringObject = {a: "apple", b:"banana", c:"cherry"};
// const res = getRandomKeyValuePair<string>(stringObject);
// console.log(res);

// const numberObject = {one:1, two:2, three:3}
// const resNum = getRandomKeyValuePair<number>(numberObject);
// console.log(resNum); 

// function filterArray<T>(array: T[], condition: (item:T) => boolean) : T[] {
//     return array.filter((item) => condition(item));
// }

// const numberArray = [1,2,3,4,5,6];
// const evenNumber = filterArray<number>(numberArray, (num) => num % 2 == 0);
// console.log(evenNumber);

// const stringArr = ["apple", "banana", "cherry", "date"];
// const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);
// console.log(shortWords);

// interface Fruit {
//     name: string;
//     color: string;
// }

// const fruitArray: Fruit[] = [
//     {name: "Apple", color:"red"},
//     {name: "Banana", color: "yellow"}
// ]

// const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "red");
// console.log(redFruits);


// function reversePair<T, U> (value1: T, value2: U): [U, T]{
//     return [value2, value1];
// }

// const reversedPair = reversePair("Hello", 20);
// console.log(reversedPair);

// class Box<T> {
//     private content: T;

//     constructor(initaeContent : T) {
//         this.content = initaeContent;
//     }

//     getContent(): T {
//         return this.content;
//     }

//     setContent(newContent: T): void {
//         this.content;
//     }
// }

// const stringBox = new Box<string>("Hello , TypeScript");
// console.log(stringBox.getContent);

// stringBox.setContent("New Content Added");
// console.log(stringBox.getContent);  

// const numberBox = new Box<string>("Number Box");
// console.log(numberBox);

// numberBox.setContent("New Number Box");
// console.log(numberBox);

//Type Narrowing
// Type narrowing is the process of refining a variable's type within a
// conditional block of code. This allows you to write more precise 
// an type-sage code.
// TypeScript provides several mechanisms for narrowing SVGUnitTypes
// Type guards 
// The instanceof operator 
// Intersection types 

// Type guards
// Type guards are mechanisms that help TypeScript 
// understand and narrow down the types more precisely.
// One common type guard is the typeof operator.

// type MyType = string | number;
// function exampleFunction(value: MyType): void{
//     if(typeof value === "string"){
//         console.log(value.toLocaleUpperCase);
//     }else{
//         console.log(value.toFixed);
//     }
// }

// exampleFunction("Hello");//HELLO
// exampleFunction(20);//20.00

// instanceof operator
// The instanseof operetor is another type guard in TypeScript
// that allows you check weather an object is 
// an instance of a particular class or constructure function.
// class Dog {
//     bark() :void {
//         console.log("Woff Woff");
//     }
// }

// class Cat{
//     meow(): void {
//         console.log("Meow");
//     }
// }

// function animalSound(animal: Dog | Cat) :void {
//     if(animal instanceof Dog){
//         animal.bark();
//     }else{
//         animal.meow();
//     }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// console.log(myDog)
// console.log(myCat)

// animalSound(myDog)//Woff Woff
// animalSound(myCat)// Meow...

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