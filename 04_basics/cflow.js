//CONTROL FLOW
// 1. if-else statement

//if(condition){
    // code to execute if condition is true


const balance = 1000;
//if(balance > 500) console.log("You have enough balance.");

const userLogin = true;
const card = true
if(userLogin && card) {
    console.log("You can access your account.");
}



const month = 3;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");   
        break;   
}     

//TRUTHY AND FALSY VALUES
// Falsy values: 0, "", null, undefined, NaN, -0, false,BigInt, 0n
// Truthy values: everything else, "0", 'False', " ", [], {}, function(){}, new Date(), Infinity, -Infinity
    
const email = "harshvarma@gmail.com";
if(email) { // truthy value we dont have checked email with any condition, bydefault it is true.
    console.log("Email is provided.");
}
else {
    console.log("Email is not provided.");
}

if(email.length === 0){
    console.log("Array is empty");
}

const email2 = [];
if(email2.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

false == 0
true
false == "" // true
0 == "" // true

//NULLISH COALESCING OPERATOR(??): NULL OR UNDEFINED
// It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = null ?? undefined; // undefined
console.log(val1);

//TERNARY OPERATOR
// (condition) ? valueIfTrue : valueIfFalse
const age = 18;
const canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);
