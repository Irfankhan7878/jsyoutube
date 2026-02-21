const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Irfan";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const regularUser = {
//     email: "ikan13545@gmail.com",
//     fullname: {
//         userFullname: {
//             firstname: "Irfan",
//             lastname: "khan"
//         }
//     }
// }
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = { obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};   // yha jo ... lgi h inko spread operator bolte h inko us ekrke asani se obj ko assign kr sakte ha 


console.log(obj3);

const User = [
    {
    id: 1,
    name: "ikan13545@gmail.com"
       },
     
         {
    id: 1,
    name: "ikan13545@gmail.com"
       },
]
 User[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));

 const crse ={
      courseName: "js in hindi",
      price: "999",
      courseInstructor: "irfan"
 }
      

 // course.courseInstructor 

  const {courseInstructor} = course;
  console.log(courseInstructor);
 console.log(Instructor);
 

 // api ke bare me 
 {
   "name": "irfan",
   "cousename": "js in hindi",
   " price": "free"
 }

 [
   {},
   {},
   {}
 ]