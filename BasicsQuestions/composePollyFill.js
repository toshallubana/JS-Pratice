// Question:- composition Pollyfill

function addFive(a) {
  return a + 5;
}

function subtractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const evalute = compose(addFive, subtractTwo, multiplyFour);
console.log(evalute(5));
