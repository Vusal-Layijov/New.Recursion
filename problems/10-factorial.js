/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater 
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/

function factorial(num, arr=[]) {
  // Your code here
  if(num<1) return 0;
  arr.push(num)
  factorial(num-1,arr)
  let total =1;
  for(let i=0; i<arr.length; i++) {
    total *=arr[i]
  }
  return total;
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = factorial;
  