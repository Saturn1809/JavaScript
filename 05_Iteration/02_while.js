// node 05_Iteration/02_while.js

let index = 0;
while ( index <= 10) {

    console.log(`Value of index is ${index}`);
    index = index +2 

}

let myArray = ["Superman","Flash","Batman"]
let arr =0
while (arr < myArray.length) {

    console.log(`Value is ${myArray[arr]}`);
    arr=arr+1
    
}

// Do-while Loop


let score =11
do {

    console.log(`Score is ${score}`);
    score++
    
} while (score <=10);