//node 02_basics/01_arrays.js

const myArray = [0,1,2,3,4,5, true , "Vipin"]   // It is a collection of elements in a single variable 

// array can be resized  in JS and different datatypes can be used in a single arrays.
// In js array makes shallow copy 

const myHeros = ["shaktiman", "Naagraj"]
const myArr = new Array(1,2,3,4,5,6)
console.log(myArr[1]);

// Array Methods 

myArr.push(6,5)     // used for adding values in the end of the array

myArr.unshift(0)         // used for adding values in the last of the array
myArr.pop()         // Used for remove elements from the end
myArr.shift()  

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));



const newArr = myArr.join()

console.log(myArr);
console.log(newArr);


// slice, splice 

console.log("a ", myArr);

const myn1 = myArr.slice(1,3)   // slices the values and no change in original array and does not include last index
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)  // slices the values and  change in original array and does  include last index
console.log("c ", myArr);               // Removes the elements from the orginal array that are sliced.
console.log(myn2);

// **************************** Array part 2 ******************************

const marvel_heros = ["Thor", "Ironmane" , "spiderman"]
const dc_heros = ["Flash", "Supermaen" , "batmen"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)  // adds two arrays and gave a new array
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // adds two arrays and gave a new array it spreads the array values 
console.log(all_new_heros);


const another_arr = [1,2,3,3,4,[2,42,42], 8,[2,4,[2,7]]]
const real_another_arrray = another_arr.flat(Infinity)
console.log(real_another_arrray);

console.log(Array.isArray("vipin"))   //Checking it is an array or not 
console.log(Array.from("vipin"))      // makes an array
console.log(Array.from({name: "vipin"}))      // makes an empty array because here key and value pair is defined and does not specified that the array of which key or Value so retruns an empty array.

let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3,score4));