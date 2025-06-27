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