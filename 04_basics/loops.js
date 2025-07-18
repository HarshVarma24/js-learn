// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
} 

//for of loop

const array = [10, 20, 30, 40, 50];
for (const value of array) { //value will take each element of the array, works with iterable objects
    console.log("Value:", value);
}

//Map
//Map are not iterable by default, but we can use forEach method to iterate over them
// maps are key value pairs, they are unique and can have any type of key, ordered 
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
console.log(map)
console.log(map.get("IN")); // will print "India"

for(const [key, value] of map) { // key and value will take each key-value pair of the map
    console.log(`Key: ${key}, Value: ${value}`);
}

const myobject = {
    'game1': 'Cricket',
    'game2': 'Football',
}
for(const [key, value] of Object.entries(myobject)) { // Object.entries will convert the object into an array of key-value pairs
    console.log(`Key: ${key}, Value: ${value}`);
}

//for in

const userObject = {
    js : "JavaScript",
    py : "Python", 
    rb : "Ruby"
};
for (const key in userObject) { // key will take each key of the object
    console.log(`Key: ${key}, Value: ${userObject[key]}`); // userObject[key] will give the value of the key
}

const prog = ["py", "js", "rb"];
for (const index in prog) { // index will take each index of the array
    console.log(index)// will print the index of the array or key of the object
    console.log(prog[index]) // will print the value of the index
}

// const map1 = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");
// for (const country in map1) {
//   console.log(country);
// }

// for of vs for in
// for of is used to iterate over iterable objects like arrays, strings, maps, etc.
// for in is used to iterate over the keys of an object or the indices of an array.

//for each loop

const coding = ["js", "py", "rb"];
coding.forEach(function(item){// item will take each element of the array
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe); // passing a function as a callback to forEach/reference to the function.

coding.forEach((item, index) => {
  console.log(item, index);  
})

//foreach is used for objects inside array.

//how to iterate over obj inside arr
const mycode = [
    {
        lang_name : "javascript",
        lang_file : "js"
    },
    {
        lang_name : "ruby",
        lang_file : "rb"
    },
    {
        lang_name : "Hyper",
        lang_file : "html"
    },
]

mycode.forEach((item) =>{
    console.log(item.lang_name);
})

