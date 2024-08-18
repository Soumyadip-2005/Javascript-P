//  Singleton or Constructor type

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123sds"
tinderUser.name ="Soumyadip"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email : "dsndj@gmail.com",
    fullName : {

        userFullName :{

            firstname :"Soumya",
            lastname : "Paul"
        }
    }
}
// console.log( regularUser.fullName.userFullName.firstname);

const obj1 = {
    1:"a", 
    2: "b" ,
    3 : "c",
    4:"h" 
}

const obj2 = {
    5:"a", 
    6: "b" ,
    7 : "c",
    8:"h" 
}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);
const users=[
   {
    id:1 ,
    email : "snbdsh@gmail.com"
   } , 
   {
    id:1 ,
    email : "snbdsh@gmail.com"
   } , 
   {
    id:1 ,
    email : "snbdsh@gmail.com"
   } , 
   {
    id:1 ,
    email : "snbdsh@gmail.com"
   } 

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnproperty("isLoggedIn")); return true

// +++++++++++++++++++ Object de-structured & JSON api introduction++++++++

const course ={
    courseName : "Js in native lang" ,
    coursePrice :"9900" ,
    courseTeacher :" Soumyadip Paul"
}

// course.courseTeacher
const {courseTeacher : instructor} = course
console.log(instructor);

