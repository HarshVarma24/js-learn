 // dates
 
let date = new Date();
console.log(date); // current date and time
console.log(date.toString()); // "Mon Oct 16 2023 12:00:00 GMT+0530 (India Standard Time)" - string representation
console.log(date.toDateString()); // "Mon Oct 16 2023" - date only
console.log(date.toTimeString()); // "12:00:00 GMT+0530 (India Standard Time)" - time only
console.log(typeof date); // "object" - Date is an object type
console.log(date.toLocaleDateString()); // "16/10/2023" - locale specific date format

let my