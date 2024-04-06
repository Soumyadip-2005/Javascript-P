// There are two types of datatypes in JavaScript.
// 1. primitive Datatypes: String , Boolean , Null , Undefined , Symbol , BigInt  


// 2.  Reference (Non-primitive) : Array , Objects , Functions

const score=100
 const scorevalue =100.3
 const isLoggedIn=false
 const outsidetemp=null
 let userEmail;
 const id = Symbol('123')
 const anotherId=Symbol('456')

 console.log(id==anotherId);

 const bigNumber =6734647326432546325432n 

 console.log(typeof bigNumber);

 const heros = ["Shaktiman" , "naaraj" , "jocker"];
 let myOject = {
    name:"Soumya" ,
    age :19 

 }

  const myFunction = function(){
    console.log("Hello");
  }

  console.log(typeof myOject);