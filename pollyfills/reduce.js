// Input
let arr = [1, 2, 3, 4, 5];

// Output
// let arr  = 15;

console.log(arr.reduce((acc, val) => acc));

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue == undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (acc != undefined) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};
console.log(arr.myReduce((acc, val) => acc));
