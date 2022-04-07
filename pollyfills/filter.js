// Input
let arr = [1, 2, 3, 4];

// Output
// let arr = [3, 4];

console.log(arr.filter((val, i) => val > 2));

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
console.log(arr.myFilter((val, i) => val > 2));
