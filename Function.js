//  Function with parameters


function myName() {
    console.log("S");
    console.log("o");
    console.log("y");
    console.log("m");
    console.log("y");
    console.log("a");
    console.log("d");
    console.log("i");
    console.log("p");
}
// myName()

// function addtwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// }

function addtwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result 

    return number1 + number2 
}
const result =addtwoNumbers( 3 , 4 )
// console.log( "Result is = ",result);

function loginUserMessage(username) {
    if ( !username ) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

//   console.log(loginUserMessage("Soumyadip"));
// console.log(loginUserMessage());


function calculateCarPrice(...number1) {
    return number1 
}
// console.log(calculateCarPrice(200,300,5000));

const user = {
    username : "Soumyadip" ,
    price : 199
}

function handleObject(anyobject){
    console.log(`Username ${anyobject.username} & price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "djbs" ,
    price :989
})
const myNewArray = [200,900,76,764,97]
function returnSceValue(getArray){
    return getArray[1] ;
}
console.log(returnSceValue(myNewArray));