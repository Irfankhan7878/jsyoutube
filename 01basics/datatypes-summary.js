// primitive data types

// 7 types : String, Number, boolean, null, undefined, symbol, BigInt

// ek ek krke niche ha 
const score = 100
const soreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail; // iske aage manualy undefined bhi kr sakte ha pr ese hi chodenge to likha hi aajyeg akyoki emiail define hi nhi kri ha khi phle 
   
 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId);


  // Refrence ( Non - Primitive data types)

  // Array, Objects, Functions

  const heros = ["shaktiman", "naagraj", "kriss"];
  let myobj = {
       name: "Irfan",
       age: "22",

  }
    const myFunction = function(){
        console.log("Hello world");
    }

     console.log(typeof anotherId  );


     // function ka typeoff function hi aata ha or undefined ka undefined hi baki type of jiska dekhna ho check kr sakte h ese hi 