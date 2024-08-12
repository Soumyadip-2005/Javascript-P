const name = "Soumyadip"
const repoCount = 50

// console.log(name + repoCount + " Value")
                    //    Using String Interpolation

//  Interpolation :- String Interpolation is the process of substituting values of variables into placeholders in a string .
// console.log(`Hello my name is ${name} & My Github Repo number is ${repoCount}`);


// String {'Soumya'}
// 0: "S"
// 1: "o"
// 2: "u"
// 3: "m"
// 4: "y"
// 5: "a"
// length: 6



const gameName = new String ('Soumya-dip-Paul')
console.log(gameName[0]); // Output :- S
 console.log(gameName[1]);  //Output :- o
console.log(gameName[2]);  //Output :- u
console.log(gameName[3]);  //Output :- m
console.log(gameName[4]);  //Output :- y
console.log(gameName[5]);  //Output :- a
console.log(gameName[6]);  //Output :- undefined

console.log(gameName.__proto__);


console.log( "The length is " + gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-4 , 5)
console.log(anotherString);


const newStringOne =  "      Soumyadip               "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Soumya.com//Soumyadip%20Paul"

console.log(url.replace('%20', '-')) ;


console.log(url.includes('Soumya'))

console.log(url.includes('Abvdsdsm'))

//  Now its time to convert string into array 

console.log(gameName.split('-'))

