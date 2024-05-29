//  node 03_basics/03_arrow.js

const user ={

    username: "Vipin",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username= "Don"
// user.welcomeMessage()
console.log(this);

//this is refers to current context -
// this keyword global object in browser is window
// this keyword global object in codespace is empty object

function chai (){  //in function we cant use this

    let username="vIPIN"
    console.log(this.username);
}
chai()

const chai2 =function(){  //in function we cant use this

    let username="vIPIN"
    console.log(this.username);
}
chai2()

/* ARROW FUNCTION */

const chai1 = ()=>{

    let username ="Vipin"
    console.log(this);
}
chai1()
const addTwo= (num1,num2) => {
    return num1+num2
 }

console.log(addTwo(3,4));

const addThree = (num3,num4) => (num3+num4)
console.log(addThree(7,8));         //No return keyword when used parenthesis

const addThre = (num3,num4) => ({username: "Vipin"})
console.log(addThre(7,8));   

// it is used for object return

const arr= [2,4,5,6]  //In array and loops
arr.forEach(()=> {})