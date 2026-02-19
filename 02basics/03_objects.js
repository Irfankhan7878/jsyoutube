// Singleton 
// object.create

//m objects literals

const mySym = Symbol("key1")

 const JsUser = {
    name: "Irfan ",
    "full name": "Irfan khan",
    [mySym]: "mykey1",
    age: 23,
    location: "Jaipur",
    email: "ikan13545@gmail.com",
    isLoggedIn : false
    // lastLoginDays: ["Monday", "saturday"]
 }
//   console.log(JsUser.email)
//   console.log(JsUser["email"])
//   console.log(JsUser["full name"])
//   console.log(JsUser[mySym])

//   JsUser.email = "ikan13545@gmail.com"

  Object.freeze(JsUser)
//   JsUser.email = "ikankhan13545@gmail.com"
  console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}  

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

    console.log(JsUser.greeting);
      console.log(JsUser.greetingTwo);