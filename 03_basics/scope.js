let a = 44 // global scope
if (true){
    let a = 5
    //var b = 10
    const c = 15
    console.log("inner a:", a) // 5
}

//console.log(a) // error: a is not defined
//console.log(b) // no error: b is defined in the global scope
//console.log(c) // error: c is not defined

//avoid using var, use let or const instead
console.log(a)


function one(){
    const username = "John"
    
    function two(){
        const password = "1234"
        console.log(username)
    }
    //console.log(password)
    
    two()
}
//one()

if(true){
    const username = "Jane"
    if(username === "Jane"){
        const password = "5678"
        console.log(username + password)
    }
    //console.log(password)
}

//console.log(username)//error: username is not defined

// ++++++++++++++++++interesting example++++++++++++++++++++

add(5) // here there is no error when we call the function
function add(value){
    return value + 1
}
 // 6

add2(5) // error: add2 is not defined before it is called 
const add2 = function(value){ // function expression
    return value + 2
}


