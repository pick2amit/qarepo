// alert("Welcome to your bank")
// var deposit = prompt("How much you would like to deposit.")
// alert("You have deposited: Rs." + deposit)
// console.log("You are a cool person");

// var lbs = prompt("Weight in lbs?")
// var kg = lbs*0.454
// alert("That is: " + kg +" kilograms")
// console.log("Conversion Completed");

// var x = 0;
//
// while (x < 11) {
//   //console.log("x is currently: " + x);
//
//   if (x%2 == 0) {
//     console.log("Prime: " + x);
//     }
//
//   x = x+1;
//
// }


//print prime no form 1 to 10
var x = 110;
var flag = 0;

while (x >= 2) {
  //console.log("x is currently: " + x);
  t = x-1;
  while (t >= 2) {
    //console.log("Value of x: " + x + "  REM: " + x%t);
    //console.log("Value of t: " + t);
    if (x%t == 0) {
      flag = flag + 1;
      break;}
    t = t-1;
  }
  //if (flag > 0) { console.log("Flag is set for: " + x); }
  if (flag == 0) { console.log("Prime: " + x); }
  flag =0;
  x = x-1;

}
