//node 01_basics/07_String.js
const name ="Vipin"
const repoCount = 3

// console.log(name + repoCount + "Value"); // Outdated syntax of concatination of string

console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`);  // Latest syntax also called String {` `} = back trace used for string and ${place varibale} = we place varibles here


const gameName = new String('Vipin Yadav com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); // Accesing a method

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('y'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    vipin    "
console.log(newStringOne);
console.log(newStringOne.trim());  // For removing extra characters and works on white spaces and new lines

const newStringtwo = "https://Vipin.com/hitesh%20chaudhary"

// console.log(ur.replace('%20' , '-'))

console.log(gameName.split(' '));