const accountId=144533  //No change in Value 
let accountEmail="vipin@gmail.com"   // In Js variable declaration can be done by using var and let but var has no block scope and functional scope (scope={}) so if we make same name files it will change their values but by using lket we can resolve this problem so always use let
var accountPassword = "1235"
accountCity="Kanpur" //that's a bad way to declare variable
let accountState; //Declared but have no value so it will show undefined.


// accountId=2 //Not allowed 
accountEmail="hc@gc"
accountPassword="2121231"
accountCity="bengluru"
console.log(accountId); //used for single printing
console.table( [accountEmail, accountId, accountPassword, accountCity,accountState]) //used for multiple values printing in a table 
// node 01_basics/01_variables.js
//hello i am aditi
