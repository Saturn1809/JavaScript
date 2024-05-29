// node 03_basics/04_iife.js

// Immediately invoked function expression

(function chai (){
        //named iife
    console.log(`DB Connected`);
}) ();

//To remove global scope pollution
// ; is used to iife end  

(  (name) => {
    //unnamed iife
    console.log(`DB COnnected 2 ${name}`);

})('Vipin');