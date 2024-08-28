 // For of Loop

// const arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ]
// for (const value of arr) { 
//     console.log(value) ;
// }

// const greeting = "Hello World"

// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps  := Does not enter copy values , Only Unique identity holds as well as in same order.

const map = new Map()
map.set('IND' , "India")
map.set('USA' , "United States Of America")
map.set('FRA' , "France")
map.set('CHI' , "China")

// console.log(map); 
// for (const [key , value] of map) {

//     console.log(key , ":-" , value);
    
// }

// const myObject = {
//     'game1' : 'Cricket' , 
//     'game2' : 'SpiderMan'
// }

// for (const [key, value] of myObject) {
//     console.log(key , ":-" , value);
    
// }

// +++++++++++++++++++ For in loops +++++++++++++++

// const myObject = {
//     js :'javascript' , 
//     cpp : 'C++' ,
//     py :'Python' , 
//     swift : "Swift by apple"
// }

// for (const key in myObject) {
   
//     console.log(`${key} is for ${myObject[key]}`);

// }

const language = [ "Java" , "Python" , "C++" , "JavaScript" , "Ruby"]

// for (const key in language) {
//    console.log(language[key]);
   
        
    
// }
// const map2 = new Map()
// map.set('IND' , "India")
// map.set('USA' , "United States Of America")
// map.set('FRA' , "France")
// map.set('CHI' , "China")

// for (const key in  map2) {
//     console.log(key);
    
// }

const coding = [ "Java" , "Python" , "C++" , "JavaScript" , "Ruby"]

// coding.forEach(function(item){
//     console.log(item);
    
// })

// coding.forEach((item) => {
//      console.log(item);
     
// })

// function print(item){
//     console.log(item);
    
// }


// coding.forEach(print)

coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
    
})

const myCoding = [
    {
        language :"JavaScript" , 
        languageFileName : "js"
    } ,
    {
        language :"Java" , 
        languageFileName : "java"
    } ,
    {
        language :"Python" , 
        languageFileName : "py"
    } ,
]

myCoding.forEach((item) => {
    console.log(item.language);
    
})