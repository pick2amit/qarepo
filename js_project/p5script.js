//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed, is_birthday){
 //Code Goes Here

 if (is_birthday) {
   speed = speed-5;
 }

 var ticketSize = 0;
 var cond0 = (speed <= 60);
 var cond1 = (speed >= 61 && speed <= 80);
 //var cond2 = speed >=81;

 if (cond0) {
   ticketSize = 0;

 }
 else if (cond1) {
   ticketSize = 1;
 }
 else {
   ticketSize = 2;
 }
return ticketSize;

}
