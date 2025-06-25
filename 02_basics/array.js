const arr = [1, 2, 3, 4, 5];
//Accessing elements
//Resizable array
//Array is a collection of elements 
console.log(arr[0]); // 1
const heros = ["ironman", "spiderman", "captain america"];
console.log(heros[1]); // spiderman

//Array Methods
// push - adds an element to the end of the array
heros.push("thor");
console.log(heros); // ["ironman", "spiderman", "captain america", "thor"]
// pop - removes the last element of the array

heros.pop();
console.log(heros); // ["ironman", "spiderman", "captain america

// shift - removes the first element of the array
heros.shift()
console.log(heros); // ["spiderman", "captain america"]
// unshift - adds an element to the beginning of the array

heros.unshift("ironman");
console.log(heros); // ["ironman", "spiderman", "captain america"]

//includes - checks if an element is present in the array
console.log(heros.includes("ironman")); // true

//indexOf - returns the index of the first occurrence of an element in the array
console.log(heros.indexOf("spiderman")); // 1

// const newArr = arr2.join()
// // join - joins all elements of the array into a string
// console.log(arr2)
// console.log(typeof newArr); // "string"

// slice - returns a shallow copy of a portion of an array into a new array object
// const arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.slice(1, 3)); // [2, 3] - elements from index 1 to 2 (3 is not included)

myarrray = [1, 2, 3, 4, 5];
console.log("A", myarrray)

const myn1 = myarrray.slice(1, 3);

console.log(myn1)
console.log("B", myarrray) // original array is not modified

const myn2= myarrray.splice(1,3);
console.log("C", myarrray) // original array is modified
console.log(myn2)
 // original array is modified


