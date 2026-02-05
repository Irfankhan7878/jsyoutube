const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";   //var ko use nhi krte ha hm kyoki block scope of function scope me problem hojati ha {} in brackets me nhi chalta or jha ek bar kuch chnages krdiya to sbhi jagha chnages hoajte the kyoki block scope m ekam ni krta 
 accountCity = "Jaipur";
 let accountState;


// accountId = 2455;    yha pr hm accountId ko change nhi kr skte kyuki hmne usko const se declare kiya hai or
//  const ka mtlb hota hai ki uski value ko change nhi kr skte
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});
