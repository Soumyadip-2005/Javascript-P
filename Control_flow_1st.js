//  If statement 
//  const userLoggedIn = true

// const temperature  = 45

// if ( temperature === 47 ) {

//     console.log("Hai Garmi...!!!");

// } else {

//     console.log("Thandaaaaa lagaaah ...!!!");
// }

//  < , > , <= , >= , == , != , === , !==

// const score = 200 
// if (score > 100 )  {
//     var power = " fly "
//     console.log(`USer power= ${power}`);
// }

// console.log(`USer power ${power}`);

// const balance = 1000 
// // if (balance > 500) console.log("Test"); 

// if (balance < 340 ) {

//     console.log("Less than 1000");
// } else if (balance < 750 ) {

//     console.log("less than 750");
// }
//  else if (balance < 990) {
//     console.log("less than 990");
//  } else{

//     console.log("Less Than 9000");
//  }

const userLoggedIn = true 
const debtcard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debtcard ) {  // "&&" and statement  , execute both
    console.log("Allow to buy courses..!!");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user Logged in ");
    
}
