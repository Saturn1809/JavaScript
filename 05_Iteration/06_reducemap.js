// node 05_Iteration/06_reducemap.js

const myNums = [1,2,3,4,55,6,7,8,8,10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//filter returns value and for each does not returns values

const newNums2 = myNums.filter( (num) => {
    
    
     return num > 4
})

console.log(newNums2);


// Using For each loop
const newn = []

myNums.forEach( (num) => {

    if (num >4 ){

        newn.push(num)
    }
})
console.log(newn);

//Book filter Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userBooks = books.filter((bk) => bk.genre === 'History')
let userBook = books.filter((bk) =>{ 
    
    return bk.publish >= 1995 && bk.genre === 'History'})


console.log(userBooks);
console.log(userBook);