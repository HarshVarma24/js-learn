//Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
// It is a design pattern that helps to create a private scope, avoiding polluting the global scope.

// function chai(){
//     console.log("I am an IIFE function")
// }
// chai() // "I am an IIFE function"


//IIFE Method or representation
// The function is defined and executed immediately, without needing to be called later.
(function chai(){
    //named iIFE
    console.log("I am an IIFE function")
})(); // "I am an IIFE function"
//; semicolon is used to end the statement, it is not mandatory but a good practice to avoid errors in some cases.
//()()// first pair is for defining the function, second pair is for executing the function


(() => {
    console.log("I am an IIFE arrow function")
})(); // "I am an IIFE arrow function"

((name) => {
    console.log(`Hello, ${name}! I am an IIFE arrow function`)
})("John"); // "Hello, John! I am an IIFE arrow function"
