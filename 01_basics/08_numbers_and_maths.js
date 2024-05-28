//node 01_basics/08_numbers_and_maths.js

const balance = new Number(190)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 2113.8966   // Priority of beofre decimal 

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')); // For usung comma in zeros 

// ********************************* Maths ********************************

// maths library default in javaScript 

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(2,6,1,6,7));
console.log(Math.max(4,13,5,13,65));


console.log(Math.random());  // Used for random values generates between 0 and 1 
console.log((Math.random()*10) +1);  // by using this formula we can get values above 0 and 1 
console.log(Math.floor(Math.random()*10) +1);  // for round off the values 

const min = 10  
const max = 20


// (Math.floor(Math.random() * (max - min + 1))+ min)

console.log(Math.floor(Math.random() * (max - min + 1))+min)
// In the above example  we declared a range for the random values and defined a formula how to get the random no of between those range.
//Math.floor is for round off to the lower value.
//Math.random is for the random value generation.
// multiply of ( max - min + 1) to get the range from above 0 and 1
// +min will help to generate no above minimum value .In our example it is above 10 