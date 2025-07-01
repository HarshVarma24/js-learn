function sayName(){
    console.log("My name is John");
}//function declaration or definition

sayName(); // calling the function, executing the function

function addNums(num1, num2){//nums1 and num2 are parameters
    console.log(num1 + num2);
}
addNums(5, 10) //ARGUMENTS
addNums(20, "30")
addNums(10,null)

const result = addNums(5, 10); // this will print undefined because the function does not return anything
console.log(result); // will print undefined


function addNumsWithReturn(num1, num2){
    return num1 + num2; // this will return the sum of num1 and num2
}
const resultWithReturn = addNumsWithReturn(5, 10); // this will return the sum of 5 and 10
console.log(resultWithReturn); // will print 15

function loginUserMessage(username){
    return `${username} is logged in successfully!`;
}
loginUserMessage("Amit"); // this will return "Amit is logged in successfully!" not print it
console.log(loginUserMessage("Amit")); // this will print "Amit is logged in successfully!"
console.log(loginUserMessage())//undefined because no argument is passed

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Function with object as parameter
function calculatePrice(...num1){//rest operator used to accept multiple arguments
    return num1
}
console.log(calculatePrice(10)); // this will print 10
console.log(calculatePrice(10, 20, 30)); // this will print [10, 20, 30]

function calculatePrice(val1,val2,...num1){
    return num1
}
console.log(calculatePrice(10)); 
console.log(calculatePrice(10, 20, 30)); 

const user = {
    name: "Amit",
    age: 20,
}
function handleObj(anyobj){
    console.log(`Name:  ${anyobj.name}, Age: ${anyobj.age}`);
}
handleObj(user); // this will print "Name: Amit, Age: 20"
//another way
//handleObj({name: "Amit", age: 20}); // this will also print "Name: Amit, Age: 20"

//function with array as parameter
const arr = [1, 2, 3, 4, 5];

function secondVal(getarr){
    return getarr[1]; // this will return the second value of the array
    return arr[1]; // this will also return the second value of the array
}
console.log(secondVal(arr)); // this will print 2
console.log(secondVal([10, 20, 30])); // this will print 20