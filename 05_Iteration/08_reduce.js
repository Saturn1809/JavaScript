// node 05_Iteration/08_reduce.js

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc , curval) {

//     console.log(`acc; ${acc} and curval: ${curval}`);
//     return acc+ curval
// }, 0)

// console.log(myTotal); 

const myTotal = myNums.reduce((acc,curr ) => acc+curr ,0)
console.log(myTotal); 

const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 799
    },

    {
        itemName: 'python Course',
        price: 899,
    },

    {
        itemName: 'webdev Course',
        price: 2999,
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+ item.price  ,0)
console.log(priceToPay);