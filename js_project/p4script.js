// PROBLEM 4: LUCKY SUM

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){

  //Code Goes Here
  var sum =a+b+c;

  if (a == 13) {
    sum=0;
    }
  else if (b == 13) {
    sum =a;

  }
  else if (c == 13) {
    sum = a+b;

  }

  return sum;

}
