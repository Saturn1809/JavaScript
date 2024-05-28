//node 01_basics/09_dates.js


// dates are getting from January 1,1979 and measuered in milisecond

//Prposal is to make  Temporal library for the JS

let myDate = new Date()
console.log(myDate.toString());  // Tue May 28 2024 03:13:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue May 28 2024
console.log(myDate.toISOString());  // 2024-05-28T03:13:50.931Z
console.log(myDate.toJSON());   // 2024-05-28T03:13:50.931Z
console.log(myDate.toLocaleDateString());   // 5/28/2024
console.log(myDate.toLocaleString());   // 5/28/2024, 3:13:50 AM
console.log(myDate.toLocaleTimeString());   // 3:13:50 AM
console.log(myDate.toTimeString()); // 03:13:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());  // Tue, 28 May 2024 03:13:50 GMT
console.log(myDate.getTimezoneOffset());    // 0

//above all are the methods to get time and date.

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)   
let myCreatedDate1 = new Date("01-14-2023")   
console.log(myCreatedDate1.toLocaleDateString());  // For declare specific dates and in Js months start from 0.


let myTimeStamp = Date.now
console.log(myTimeStamp());   // used for compare time of two variables .used in polls or hotel booking apps 
console.log(myCreatedDate1.getTime());

console.log(Math.floor(Date.now()/`1000`));  // used to change  time in seconds 

let newDate = new Date ()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

// String interpolation `${newDate.getDay()} and the time`

newDate.toLocaleString('default' , {   //Customizatiojn of date

    weekday:"long",
    timeZone:""
}) 


