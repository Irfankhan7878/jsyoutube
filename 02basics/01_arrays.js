// arrays 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman ", "krish"]

 const myArr2 = new Array(1, 2, 3, 4,)
//  console.log(myArr[0]);
  // array methods 

//   myArr.push(10);
//   myArr.push(9);
//   myArr.pop()



  // myArr.unshift(9) // array ke aage jo elemnt add krna hota h vo ad dhoajta ha or shift se vhi elemnt ht jata ha lekin ye optimize nhi h kyoki jitne bhi array ke elments rhte h un sbko aage shift krna padega to load hoga pc pr 
  //  myArr.shift()
  //   console.log(myArr);
    
    const newArr = myArr.join() // ye array  ko string me convert krdeta ha join krke bina brcakets ke ans aata ha array ke elements

    console.log(myArr);
    console.log( newArr);
    console.log(typeof newArr)

    //,,,,, slice , and splice 

    console.log("A", myArr);

    const myn1 = myArr.slice(1, 3) // last limit elemnt nhi print hota ha slice me
                                   //isme puri range include nhi hoti ha 
    console.log(myn1);
    console.log("B", myArr);

    
    const myn2 = myArr.splice(1, 3) // pure elements print hote h jitni limits lete ha 1 se 3 tk splice me 
     console.log("C", myArr);     // puri range ke elements print hote ha 
        console.log(myn2);                   
    //  console.log(myn1);

    // slice me array changev nhi hota ha 
    // splice me arrya me add delete or remove kr sakte ha or jb koi bhi operation perform hojata h to uske bad changed arry bhi return krtab ha ..
    // jase 1 se 3 tk kra to jo bcega 0 se lekr bakui elments unko  bhi retunr krega 