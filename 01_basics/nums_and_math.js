const score = 100;
console.log(score);
const balance = new Number(200)
console.log(balance)

console.log(balance.toString()); // "200"
console.log(balance.toFixed(2)); // "200.00" decimal places

const otherNum = 24.4223
console.log(otherNum.toPrecision(3)); // "24.4" - 3 significant digits
console.log(otherNum.toPrecision(1)); // "2" - 1 significant digit

const hundreds = 1000000
console.log(hundreds.toLocaleString());// "1,000,000" - locale specific formatting
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" - Indian locale formatting

//+++++++++ Math Operations +++++++++

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5)); // 5 - absolute value
console.log(Math.round(4.7)); // 5 - rounds to nearest integer
console.log(Math.round(4.4)); // 4 - rounds to nearest integer
console.log(Math.sqrt(16)); // 4 - square root
console.log(Math.ceil(4.1)); // 5 - rounds up to nearest integer
console.log(Math.floor(4.9)); // 4 - rounds down to nearest integer
console.log(Math.min(1, 2, 3, -1)); // -1
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10

Math.random() * 10 + 1; // random number between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random number between 10 and 20