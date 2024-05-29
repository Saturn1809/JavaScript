//  node 03_basics/02_scope.js

// { } --> it is called a scope 



if(true){

    let a=10    //let and const has a block scope 
    const b=20
    var c=30        // var has a gloabal scope even it is in a block scope 

    console.log("INNER: ",a);
}
// console.log(a);
// console.log(b);
console.log(c);

// in browser the global scope is different and in codespace it is different

// Nested Scope

function one (){

    const username = "Vipin"
    function two (){
        
        const  website = "Github"
        console.log(username);

    }
    // console.log(website);
    two ()
}
one()           //Here we took example of ICe cream elders could not ask icecreams from youngers but youngers can same here function two can access username but function one can not access website

if (true){

    const username = "Vipin"
    if (username==="Vipin"){

        const website = "Youtube"
        console.log(website+username);
    }
    // console.log(website);  it will give error because its scope 
}
// console.log(username);
// it will give error because its scope 

// ** Interesting **

function addone (num){       //It is functiom

    return num+1


}
addone(5)

const addTwo =function(num)//It is expression

{
    return num+2
}

addTwo(5)
