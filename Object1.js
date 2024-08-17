// There are two ways to create / declear objects :- (1) Object Literas (2) Object Constructor 

const mySym = Symbol("Key1")

const jsUser = {
    name : "Soumyadip" ,
    age : "18",
    email:"abc@outlook.com" ,
    location :"kalna" ,
    isLoggedIn : false ,
    lastlogginDays : ["monday" , "Saturday"],
    [mySym] : "mykey1"
};

// console.log(jsUser.email);

// console.log(jsUser["email"]);

// console.log(jsUser[mySym]);

// console.log( jsUser.mySym);

jsUser.email = "Soumyadippal97@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "Soumyadjdfhd@12.com"
// console.log(jsUser);
 jsUser.greeting = function(){
console.log("Hello JS user...!!!")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








