function caching(fn, context) {
  let result = {};
  return function (...args) {
    var agrsCache = JSON.stringify(args);
    if (!result[agrsCache]) {
      result[agrsCache] = fn.call(context || this, ...args);
    }
    console.log(result)
    return result[agrsCache];
  };
}

const abc = (num1, num2) => {
  for (let i = 0; i <= 100000000; i++) {}
  return num1 * num2;
};

const myFunc = caching(abc);
console.log(myFunc());

// console.time("first call");
console.log(abc(123, 123));
// console.lastTime("lastTime");
