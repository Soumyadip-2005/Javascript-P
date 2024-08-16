//    Array Defination :-[ The Array object, as with arrays in other programming languages, 
//                        enables storing a collection of multiple items under a single variable name, 
//                        and has members for performing common array operations.]

// Key Points :- JavaScript arrays are ( resizable ) and can contain a mix of different data types.

//  [A shallow copy of an object is a copy whose properties share the same references .]  (Their properties & prototype chains are equal)

// [ A deep copy of an object is a copy whose properties do not share the same references .] (Their properties & prototype are structurally equivalent.)

const myArray =[ 10 , 11 ,22 , 33 , 54 , 66  ]
 console.log(myArray[2]);

//   ++++++++++++++++++  Array Methods +++++++++++++++++++

const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// Slice & splice 
 console.log("A = " , myArray);
 const myN1 = myArray.slice(1,3)

console.log(myN1);
console.log("B = ", myArray);

const myN2 = myArray.splice(1,3)
console.log("C = ", myArray);

console.log(myN2);