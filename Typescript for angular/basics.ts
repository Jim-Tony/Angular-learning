//Primitives data types
let num:number = 1;

let username:string = 'Random';

let isEmpty:boolean = false;

//Complex data type

let hobbies: string[] = ['eating', 'sleeeping', 'coding'];


//For objects

let person:{
    name:string,
    age:number
};

person = {
    name:'Kalr',
    age:33
}

//Array of objects
let users:{
    name:string,
    age:number
}[];

users = [
    {
        name:'tony',
        age:33
    },
    {
        name:'lenin',
        age:33
    }
]

///Type inference
let lesson = 'A failry tale';
//Automatically ts will make the type of lesson as string -> This is called type inference


//Union types

let value: string | number;

value = 12;
value = 'Value';


//Type alias -> use this type anywhere u needed
type personalType = {
    version : number,
    year : string
}

let laptop:personalType = {
    version: 12.1,
    year:'2021'
}


//Generics

function insertAtBeginning<T>(array:T[], num:T):T[] {
    let newArray:T[] = [num, ...array];
    return newArray;
}

let demoArray = [12, 12, 33];
let num1 = 2;

let newArray = insertAtBeginning(demoArray, num);

//Function datatypes

function returnFunction():()=>void{
    return ()=>console.log("Hey");
}


//Classes
class Student {
    firstName:string;
    lastName:string;
    age:number;
    courses:string[];
    
    constructor(firstName:string, lastName:string, age:number, courses:string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
}
let  s1 = new Student('Anton', 'Henry', 21, ['React']);

//Interfaces

interface Human {
    name: string,
    height: number

    sayHello: ()=> void
}

//Difference between interface and type is interface can be implemented by class

class StrongHuman implements Human {
    name: string;
    height: number;
    
    constructor(name:string, height:number) {
        this.name = name;
        this.height = height;
    }
    sayHello(){
        console.log("Hello I am strong human");
    }
}

let human = new StrongHuman('Alex', 213);
human.sayHello();
