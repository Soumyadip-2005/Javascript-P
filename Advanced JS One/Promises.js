// const promiseOne = new Promise(function (reslove, reject) {
//   //  Do an async task
//   //  Db calls , cryptography , network

//   setTimeout(() => {
//     console.log('Async Task is completed');
//     reslove()

//   }, 1000);

// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");

// })
// new Promise(function (reslove , reject) {
//     setTimeout(() => {
//         console.log('Async Task 2 ');
//         reslove()

//     },1000);
// }).then( () => {
//     console.log('Async 2 Resloved');

// })

// const promiseThree = new Promise(function (reslove, reject) {
//     setTimeout(() => {
//         // console.log("Async Task 3");
//         reslove({userName :"Soumyadip" , email:"Asdffjhf@678gmail.com"})

//     }, 1000);
// })

// promiseThree.then(function (userName) {
//     console.log(userName);
// })

const promiseFour = new Promise(function (reslove, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      reslove({ userName: "Punneth Superstar", password: " Dipak123dalal" });
    } else {
      reject("Error : Something went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((userName) => {
    console.log(userName);
    return userName.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The Promises is either resloved or rejected"));

const promiseFive = new Promise(function (reslove, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      reslove({ userName: "Punneth Superstar", password: " Dipak123dalal" });
    } else {
      reject("Error : Something went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const reposponse = await promiseFive;
    console.log(reposponse);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//  async function getAllUsers() {
//    try {
//     const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//    const data = response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E :" , error);

//    }

//  }
//  getAllUsers()

fetch("https://api.github.com/users/Soumyadip-2005")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
