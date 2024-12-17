const curriedSum = function (...args) {
console.log("arg:", args)
  let total = args.reduce((acc, num) => acc + num, 0);

  const sumNext = function (...nextArgs) {
    console.log(nextArgs)
    total += nextArgs.reduce((acc, num) => acc + num, 0);
    return sumNext;
  };

 
  // Directly return the sum when no further arguments are provided
  sumNext.value = function () {
    return total;
  };

  return sumNext;
};

console.log(curriedSum(1, 2)(3, 4).value()); // Output: 10
console.log(curriedSum(1)(3,4)(2).value()); // Output: 50
console.log(curriedSum(1,2,3)(4).value())
