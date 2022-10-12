// function sum(a) {
//   return (b) => {
//     return b ? sum(a + b) : a;
//   };
// }
// console.log(sum(2)(4)(5)());

// function debounce(fn, limit) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     let context = this;
//     timer = setTimeout(() => {
//       fn.apply(...args);
//     }, limit);
//   };
// }
// debounce(fn, limit);

// const arrayFn = (input, n) => {
//   if (n == -1) {
//     return
//   }
//   arrayFn(input, n - 1);
//   console.log(input[n]);
// };
// arrayFn([0, 1, 2, 3, 4, 5], 5);

// [0,1,2,3,4,5] , size = 5
// 

const obj = {
  name: "Toshal",
  address: {
    pincode: "134107",
    town: "chandimadir"
  }
};

function deepClone(obj, output) {
  console.log(obj);
  Object.keys(obj).reduce((val) => {
    if (typeof obj[val] === "object" || typeof null === "object") {
      deepClone(obj[val],output);
    } else {
      console.log(val);
      output[val] = val;
    }
  },{});
}
const val = deepClone(obj);

console.log((val.name = "Yogesh"));
console.log(val);
console.log(obj);
