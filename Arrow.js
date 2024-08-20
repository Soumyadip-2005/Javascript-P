const user = {
    userName : "Soumyadip" ,
    price : 999 ,
    welcomeMsg :  function(){
        // 
        
    }
   
}
// user.welcomeMsg()
// user.userName = "Ram"
// user.welcomeMsg()

console.log(this);

// function chai(){
//     let userName = "Soumyedip"
//     console.log(this.userName);
// }
// chai()

const chai = () => {
    let username = "Soumyadip"
    console.log(this);
    
}
// chai()


 const addTwo = (num1 , num2 ) => {
    return num1 + num2

}
console.log(addTwo(3 , 4 ));


// const addTwo = (num1 , num2 ) =>  (num1 + num2)


// const addTwo = (num1 , num2 ) =>  ({username : "Soumyadip"})


// console.log(addTwo());

