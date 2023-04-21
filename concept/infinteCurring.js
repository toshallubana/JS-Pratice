
// Infinite Currying 
function curring(a) {
  return function (b) {
    if (b) {
      return curring(a + b);
    }
    return a;
  };
}

console.log(curring(5)(4)(3)(2)(1)());
// Output:- 14

// Requires a function with a fixed number of parameters

const curry = (fn) => {
  return curried = (...args) => {
    if(fn.length !== args.length) {
      return curried.bind(null, ...args); // bind create a new function each time
    }
    return fn(...args);
  }
}

const total = (x,y,z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
// output:- 60