const name = "Harsh"    
const repoCount = 10

//console.log(name + repoCount + "value"); 
//this above is a bad practice, because it will convert the number to string and concatenate it

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is a template literal, it is a better way to concatenate strings and variables
// this is string interpolation.

//strings declaration
const name1 = new String("Harshit");
// this is not recommended, because it creates a String object, which is a reference type

console.log(name1[0]); // H
console.log(name1.length); // 7
console.log(name1.toUpperCase()); // HARSHIT
console.log(name1.indexOf("s")); // 3
console.log(name1.slice(0, 3)); // Har

const name2 = "vansh";
console.log(name2.slice(-3,2));
// slice can take negative indices, which means it will start from the end of the string
//how slice works
// slice(start, end) - start is inclusive, end is exclusive
//(-3,2) means start from the 3rd last character and go till the 2nd characte
// we can do -3 = 5 - 3= 2 that is total length - 3.

//in substring we cannot use negative indices, it will treat them as 0
console.log(name2.substring(0, 3)); // van

const newString = "   varmaji  "
console.log(newString.trim()); // "varmaji"

const url = "https://www.youtube.com/@chaiaurcode";
console.log(url.replace('@', '')); // "https://www.youtube.com/chaiaurcode"
console.log(url.includes('youtube')); // true
console.log(url.startsWith('https')); // true

const name3 = "harsh-varma";
console.log(name3.split('-')); // ["harsh", "varma"]