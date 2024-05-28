// node 02_basics/02_Objects.js

// Literals se singleton nahi banta 
// singleton 

Object.create // <--- object using constructor and in it singleton will be created 
// object literals -- used for object declaration

const mySym = Symbol ("Key1")

const jsUser = {

    name:"Vipin",
   [ mySym]:"MyKey1",
    age:20,
    "Full_name" : "Vipin Yadav",
    Location:"Kanpur",
    lastLoginDays:  ["Monday","Saturday"]
}
 
console.log(jsUser.name);       //Objects of elements can be accesed using (.) dot
console.log(jsUser["name"]);
console.log(jsUser["Full_name"]);         //Objects of elements can be accesed using [ ] sqaure brackets in special cases.
console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)  // For locking  objects
jsUser.Location = "Jaipur"
console.log(jsUser);

jsUser.greeting = function(){       // Use of function in object

   console.log("Hello ");
}
jsUser.greeting1 = function(){

   console.log(`Hello js user , ${this.name}`); // use of function with particular object elements
}
console.log(jsUser.greeting1());