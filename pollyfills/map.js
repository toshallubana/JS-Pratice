// Input
const arr = [1, 2, 3, 4];

// Output
// const arr = [1,4,9,16];

console.log(arr.map((val, i) => val * val));

// using pollyfills

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
console.log(arr.myMap((val, i) => val * val));
