// node 03_basics/01_functions.js

function sayMyname (){

console.log("V");
console.log("i");
console.log("p");
console.log("i");
console.log("n");
}

sayMyname // <-- it is reference of functions
sayMyname() // <-- it is execution of functions

function addTwoNumbers (num1,num2){  // num 1 and num2 are parameters

      console.log( num1+num2); 
}
addTwoNumbers(3,4)   // 3,4 are arguments 
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,4) 
console.log("Result:",result);   // result has value undefined means function is not returning the value 8 

function addTwoNumbers1 (num1,num2){  

//    let result1 = num1+num2        method 1
//    return result1

        return num1 +num2           //method -- 2
}
const result1 = addTwoNumbers1(30,4) 
console.log("Result:",result1);                 // Here we get result as 34

 function loginUserMessage (username){      //If we give dafault value then undefined will not occur for giving the value jsut do username = "Vipin"

  //   if(!username) this type is mostly used
    if(username === undefined){             // "" empty string and undefined treated as a false values.

            console.log("Please Enter username");
            return
    }

    return `${username} just logged in `
 }

console.log( loginUserMessage ("Hello My frined")); 
console.log( loginUserMessage ());  // this will give undefined not null

// here we make functions when a user adds a lot of items in their cart and we dont know exactly how many parameters should we define

function calculateCartPrice (...num1){          // here we use rest operator (...) it makes a bundle of all arguments and returns an array it store alll the values in a single variable without using it variable will store only one value at a time.


    return num1

}
console.log(calculateCartPrice(200,400,600));

function calculateCartPrice1 (val1,val2, ...num2){         


    return num2

}
console.log(calculateCartPrice1(200,400,600));  // here first and second value  be used and rest are used by num1


//Here we use object in a function
const user = {

    username: "Vipin",
    price: 199

}
function handleObject(anyObject){

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);


}
handleObject(user)

// Another type of using object 
handleObject({

    username: "domVipin",
    price: 19

})

//Here we use array in a function

const myNewArray = [200,400,1200,2990]
function returnSecondValue(getArray){

        return getArray[0]
}

console.log(returnSecondValue(myNewArray));