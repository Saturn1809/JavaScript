//node 04_Controlflow/one.js

//If-Else

const isUserloggedIn = true
const temparature = 41

if(temparature < 50){

    console.log("Less than 50");

}
else{
    console.log("Greater than 50");
}


// Operators -- <, >, <= , >=, ==, !=, ===(checks equality and gives type also), !== (Check the negative side)

const score = 200

if(score > 100){

    const power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); --> this will show error because power has no block scope because we use const if we use var it will work.

//Short hand notation

const balance = 1000

if(balance>500) console.log("test");  //this has implicit scope(maan lo scope hai).

//Nesting 

if (balance < 500) {

        console.log("Less than");
    
} else if (balance <750) {

    console.log("Less than 750");
    
    
}else if (balance <900) {

    console.log("Less than 900");
    
    
}else{

    console.log("Less than 1200");
}

// Real life example - website pe account banaya

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {

  console.log("Allow to buy course");
    
}

const userLoggedInfromemail = true
const userLoggedInfromgoogle = true

if (userLoggedInfromemail || userLoggedInfromgoogle) {

    console.log("Allow to buy course");
      
  }