// Dates 

let mydate = new Date() ;
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log( typeof mydate);


let myCreatedDate = new Date("01-19-2028")
// let myCreatedDate = new Date(2023 , 0 , 23 ,5 ,9)

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let  newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default' , {
    weekday : "long" ,
})






