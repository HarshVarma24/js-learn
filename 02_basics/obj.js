//two ways to declare an object
// 1. Object Literal (no singleton )
// 2. Object Constructor

//obj literal
const Jsuser = {
    name: "Harsh",// key is a string, value can be any data type
    "full name" : "Harsh Varma", 
    age: 20,
    isLoggedIn: true,
    courses: ["JavaScript", "Python", "Java"],
}

console.log(Jsuser.name)//not a good practice to use dot notation for keys with spaces or special characters
console.log(Jsuser["name"]) // good practice to use bracket notation for keys with spaces or special characters
// TO PRINT FULL NAME, DOT NOTATION WILL NOT WORK
console.log(Jsuser["full name"]) //correct way.

//To use symbols as keys
const mysym = Symbol("key1");
const Jsuser1 = {
    name: "Aarav",
    "full name" : "Aarav Varma", 
    mysym:"my symbol",
    age: 20,
    isLoggedIn: true,
    courses: ["JavaScript", "Python", "Java"],
}

console.log(Jsuser1.mysym)
console.log(typeof Jsuser1.mysym) // will print string, as it is a key not a value

//IMP
//to use symbol use square brackets
//like -  [mysym] : "my symbol"

Jsuser.name = "Varma ji"// changing the value of name key
console.log(Jsuser.name) // will print "Varma ji"
console.log(Jsuser) // will print the whole object
//Object.freeze(Jsuser) // this will freeze the object and prevent any changes to it
Jsuser.name = "Harsh ji" // this will not change the value of name key
console.log(Jsuser)

//First unfreeze the object to make changes.
Jsuser.greeting = function(){
    console.log("Hello Js user")
}
console.log(Jsuser.greeting) // will print the function
console.log(Jsuser.greeting()) // will print "Hello Js user"

Jsuser.greeting_name = function(){
    console.log(`Hello ${this.name}`) // this will print the name of the user //referring the name.
}
console.log(Jsuser.greeting_name()) // will print "Hello Varma ji"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Object Constructor
const tinderUser = new Object(); // this is an empty object
console.log(tinderUser) // will print {}

tinderUser.name = "Amit";
tinderUser.age = 25;
tinderUser.id = "amit123";

console.log(tinderUser) // will print { name: 'Amit', age: 25, id: 'amit123' }

const regularUser = {
    email: "amit123@gmail.com",
    fullname: {
        firstname: "Amit",
        lastname: "Kumar"
    }
}

console.log(regularUser) // will print the object with email and fullname
console.log(regularUser.fullname.firstname) // will print "Amit"
console.log(regularUser.fullname.lastname) // will print "Kumar"

const obj1 = {1 : "a", 2: "b", 3: "c"}; // this is an object with keys as numbers
const obj2 = {4: "d", 5: "e", 6: "f"}; // this is another object with keys as numbers
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2); // this will merge obj1 and obj2 into obj3 
//{} - target object and obj1, obj2 - source objects
const obj3 = {...obj1, ...obj2}; // this will also merge obj1 and obj2 into obj3 using spread operator
console.log(obj3) // will print the object with obj1 and obj2 as keys

const user = [
    {
    id : 1,
    email : "harsh42@gmail.com"
    }
]

//user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // will print the keys of the object
console.log(Object.values(tinderUser)) // will print the values of the object
console.log(Object.entries(tinderUser)) // will print the key-value pairs of the object as an array of arrays
console.log(tinderUser.hasOwnProperty("name")) // will print true if the object has the key "name", else false

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//destructuring an object
 const course = {
    courseName: "JavaScript",
    price: 999,
    teacher: "Hitesh",
 }

 course.teacher
 const{teacher} = course; // this will extract the teacher key from the course object
 console.log(teacher) // will print "Hitesh"
 
 //JSON FORMAT
//  {
//     "name": "Harsh",
//     "age": 20,  
//     "isLoggedIn": true,
//  }

//array json format
// [
//     {},
//     {},
// ]
// JSON is a string format, not an object. It is used to send data between server and client.
