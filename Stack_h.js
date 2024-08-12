// Stack(primitive) & Heap (Non-primitive)
let myName ="SoumyadipPaul"
let anothername = myName
anothername = "JeetPaul"
console.log(anothername);
console.log(myName);


let userOne = {
    email : "user@gmail.com",
    upi :"user123@ybl"
}
let userTwo = userOne 

userTwo.email = "xyz123@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)