let score ="33ABC"
let score1=null

console.log(typeof (score));

let valueInNumber = Number(score)  //used for changing type of variables 
console.log(typeof valueInNumber);
console.log(valueInNumber);
// chcek if it's giving NaN(Not a Number) then the no is not a pure no

console.log(typeof (score1));

let valueInNumber1 = Number(score1)  //used for changing type of variables 
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// "33" = 33
// "33abc" = NaN
// trye = 1; false = 0

let isLoggedin1 = 1 //True 
let isLoggedin2 = 0 //False 
let isLoggedin3 = "" //False
let isLoggedin4 = "Vipin" //True

let booleanIsLoggedIn1 = Boolean(isLoggedin1)
console.log(booleanIsLoggedIn1);

let booleanIsLoggedIn2 = Boolean(isLoggedin2)
console.log(booleanIsLoggedIn2);

let booleanIsLoggedIn3 = Boolean(isLoggedin3)
console.log(booleanIsLoggedIn3);

let booleanIsLoggedIn4 = Boolean(isLoggedin4)
console.log(booleanIsLoggedIn4);

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//node 01_basics/03_datatypconversion.js

//******************** Operations ********************* */

let value = 3
let negValue = -value 
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);

let str1= "Hello"
let str2= "vipin"
str3=str1 + str2
console.log(str3);



console.log("1"+ 2);
console.log(1 +"2");
console.log("1"+2+2);
console.log(1+2+"2");


//tricky conversion 

console.log(true);
console.log(+true); // Do not use it
console.log(+""); // Do not use it

let num1 ,num2,num3 // Do not use it
num1=num2=num3=2 + 2

let gameCounter=100
gameCounter++;
++gameCounter;
console.log(gameCounter);

