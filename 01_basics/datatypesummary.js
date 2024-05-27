//node 01_basics/datatypesummary.js

//Primitive data types - call by value(means there actual value is used )
// 7 Types : String, Number, Boolean , Null, Undefined , Symbol(used for uniqunes ), BigInt

const score=100
const scoreValue=100.3

const isLoggedIn = false
let userEmail;

const id = Symbol('1234')
const AnotId = Symbol('1234')

console.log(id===AnotId);
const outsideTemp= null

// Reference type or Non Primitve - Call by Reference (Not values bt thier address is send)
// Array , Objects , functions
//JavaScript is a dynamically Typed laguage .

const heros = ["shaktiman","nagraj","doga"];  //Array

let myObj =  //Object
{
    name:"Vipin",
    age:22,
}

const myFunction = function (){ //Function

    console.log("Hello World"); 
}

console.log(typeof myFunction );  /// used for check datatype