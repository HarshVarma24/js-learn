//Arrow Functions

const user = {
    username:"harsh",
    reps : 10,
    
    welcome: function(){
        console.log(`${this.username} has ${this.reps} reps`) //this = current object/context
        console.log(this) // this refers to the user object
    }
    
}
// user.welcome() // "harsh has 10 reps"
// user.username = "John"
// user.welcome() // "John has 10 reps"

//console.log(this)//output = empty // this refers to the global object (window object in browser, global in Node.js)

// function chai(){
//     console.log(this) // this refers to the global object (window object in browser, global in Node.js)
// }
// chai()

const chai = function(){
    let username = "John"
    console.log(this.username)// undefined, because this refers to the global object, not the user object
}
chai()

const chai1 = () => {
    let username = "John"
    console.log(this)// undefined, because this refers to the global object, not the user object
    console.log(this.username) // undefined, because this refers to the global object, not the user object
}
chai()

//Arrow functions do not have their own this context, they inherit it from the parent scope
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
const addtwo = (num1, num2) => num1 + num2 //implicit return
console.log(addtwo(5, 10)) // 15

const addthree = (nu) => ({username: "Roman"})//object literal needs to be wrapped in parentheses to avoid confusion with function body
console.log(addthree()) // { username: 'Roman' }

