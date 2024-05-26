//node 01_basics/04_comparison.js
console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);  // Confusing comparison so avoid it 
console.log(null>0);

/*The reason is that an equality check == and comparisons > < >= <= works differently.
 Comparisons convert null to a number, trating it as 0.
That's why (3) null>= 0 is true and (1) null>0 is false.
*/

// === split check 
console.log("2" ===2);