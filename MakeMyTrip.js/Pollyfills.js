// [1,2,3,4,5] greater then 3
let arr = [1, 2, 3, 4, 5];

Array.prototype.myfilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
console.log(arr.myfilter((val, i) => val > 3));
