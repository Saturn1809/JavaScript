// node 02_basics/03_Object2.js

// const tinderUser = new Object ()  it's an singleton Object

const tinderUser ={}  //its not a singleton object 
tinderUser.id ="123abc"
tinderUser.name = "Johnny"
tinderUser.isLogged = false
// console.log(tinderUser);

const regularUser = {           //Object nesting can be possible in js 

    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Vipin",
            lastName:"Yadav"
        }

    }
}

console.log(regularUser.fullname.userfullname);  //for results and reducing nesting
console.log(regularUser.fullname?.userfullname);  //for results and reducing nesting and ? it is to check variable is present or not 

const obj1 ={
    
    
    1: "a", 2:"B"

}
const obj2 ={ 
    
    3: "c", 4:"d"

}
const obj3 ={ 
    
    5: "e", 6:"f"

}
const obj4 = Object.assign({},obj1,obj2,obj3)   // used to add two objects
// here { } these are used as a target and other are used as source without { } it evertything is goes to the obj1
console.log(obj4);

const obj5 = { ...obj1, ...obj2}
console.log(obj5);

const users = [ 

    
        {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // to get keys and returns an array having keys
console.log(Object.values(tinderUser));   // to get values and returns an array having values
console.log(Object.entries(tinderUser));  

console.log(tinderUser.hasOwnProperty('isLogged'));  //To check elements are present or not.

//***************** Object part 2  ********************* */

const course ={

    coursename: "JS in hindi ",
    price: 999,
    courseInstructor: "Vipin"
}

const {courseInstructor} = course   //Used for destructuring means baar baar poora  ahi likhna hai
console.log(courseInstructor);
 
// {                                    // JSON API gets in this form 
//     "name": "Vipin",
//     "coursename": "JS in hindi ",
// }

// [                                   // They also came in array format
//     {},
//     {},
//     {},
// ]

// JSON Formatter is used to understand data of API.
