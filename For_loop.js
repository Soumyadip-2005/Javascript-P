//  For Loop

// for (let i= 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`${element} is the Best Number `) ;
//         break 
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop Value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop Value ${j} & Outer loop  ${i}`);
//         console.log( +i + "*" + j + " = " + i*j)
            
//     }
    
// }

// let myArray = [ "Mamta" , "Hasina" , "Mujeeb" , "Om Birla" , "Yogi"]
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray [i];
//     console.log(element);
// }

//   Break & Continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5 `);
        continue
      }
    console.log(`Value of i is = ${i}`);
  
   
}