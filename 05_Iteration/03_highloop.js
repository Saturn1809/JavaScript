// node 05_Iteration/03_highloop.js

// They all are array specific loops

["","",""]
[{},{},{}]


// Forof loop -->

const arr = [1,2,3,3,45]

for (const num of arr) {
    
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {

    console.log(`Each char is ${greet}`);
    
}

// Maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"Frace")

console.log(map);

for (const [key , value] of map) {

    console.log(key , ':' , value);
    
}

// Object

const myobject = {

    'game1': 'NFS',
    'game2': 'Spidermen',
    'game3': 'gks',
    'game4': 'Asphalt'
}

for (const [key,value] of myobject) {

    console.log(key , value);
    
}