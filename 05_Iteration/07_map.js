// node 05_Iteration/07_map.js

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNumbers.map( (num) => num+10 )
console.log(newnums);

// when we open scope we have to use return keyword


// Example of chaining

const newmu = myNumbers
                .map((num) => num*10)  // yaha jo banega vo aage chain me jaayega
                .map((num) => num+1)
                .filter((num) => num>= 40)


console.log(newmu);