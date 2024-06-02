// node 04_Controlflow/truthy.js

const userEmail = "vipin@goggle.coom"

if (userEmail) {

    console.log("Got the user email");
    
}else {

    console.log("Don't get the email");
}

// When we assume a value as truth or false then it is called as truthy or falsy

/* Falsy Values

1. false
2. 0
3. -0
4. BigInt On
5. ""
6. null
7. undefined
8. Nan

Except these all are truthy values . 
Some Examples -- 

"0" --> 0 in string is truthy
"false" --> false in string is truthy
" " --> string having only space in string is truthy
{ } --> object is truthy
[ ] --> array is truthy
function(){} --> empty function is truthy value

*/


// check an array is empty or not

if (userEmail.length === 0 ) {
    
    console.log("array is empty ");
}

// check an object is empty or not


const emptyobj ={}

if (Object.keys(emptyobj).length === 0 ) {
    
    console.log("object is empty ");
}

// Nullish Coalescing Operator (??): null undefined.
// deal with complex function giving value null or undefined.


let val1;

val1 = 5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 15

console.log(val1);

// it helps to assign a value and replace null and handle situation.
// it makes for null and undefined

// val2 = null ?? 10 ?? 10 here the first value assigned


// Ternary Opearator 

// condition ? true : false  --> this is ternary operator format 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80"): console.log("More than 80");