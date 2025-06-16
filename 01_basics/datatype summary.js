//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// symbols are unique and immutable, even if they have the same description
// symobols are used to create unique identifiers.
// what are symbols?
// they are a new primitive data type in JavaScript, introduced in ES6.


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction();

console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

//stack vs heap memory

// JavaScript uses two types of memory allocation: stack and heap
// stack memory is used for primitive data types, while heap memory is used for reference data types
// in stack we get a copy of the value, while in heap we get a reference to the value
// stack memory is faster than heap memory

let myName = "Hitesh";// stack memory
let myName2 = myName; // stack memory, copy of the value
myName2  = "Harsh"
console.log(myName);// Hitesh
// myName2 is a copy of myName, so changing myName2 does not change myName
console.log(myName2); 

let user1= {
    email: "user@harsh.com",
    upiId: "user@upi",
}
let user2 = user1; // heap memory, reference to the value

user2.email = "user2@aarav.com"; // changing the value of user2 will also change the value of user1
console.log(user1.email);  // user1.email is also changed to user2.email
console.log(user2.email);  // user2.email is changed to user1.email