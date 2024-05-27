//node 01_basics/06_memory.js

// Stack Memory (Primitive Data Type) -
// we got a copy of value

let myYoutubename= "Mecreator"

let anotherName= "myYoutubename"

anotherName="Kanpuriya"
console.log(myYoutubename);
console.log(anotherName);

let user =
{
    email: "user@googole.com",
    upi: "Vipin@ybl",
}

let user1=user
user1.email="hitesh@google.com"
console.log(user1.email);
console.log(user.email);

//Heap Memory  (-Non Primitive Data Type) -
// we got a reference of value



