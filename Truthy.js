const userMail = "S@soumyadippal.ks"


//  Falsy value : false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN .
// Truthy value : "0" , 'false' , " " , {} , function(){} 

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object IS empty");
    
// }


//  Nullish Coalescing operator (??) : Null & Undefined 

let val_1 ;
// val_1 = 5 ?? 10
// val_1 = null ?? 10 

val_1 = undefined ?? 15
console.log(val_1);


//  Terniary Operator 
// condition ? true : false 
const iceTeaPrice = 989
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");