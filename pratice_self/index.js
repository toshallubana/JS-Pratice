// debounce

// function debounce(fn,limit){
//   let timer;
//   return function (...args){
//     if(timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn(...args)
//     },limit)
//   }
// }
// console.log(debounce(fn,3000))

// throttle

// function throttle(fn,limit){
//   let flag = true;
//   return function(...args){
//     let context = this;
//     if(flag){
//       flag = false;
//       fn.apply(context,...args)
//       setTimeout(() => {
//         flag = true;
//       },limit)
//     }
//   }
// }
// console.log(fn,limit)

// map pollyfill

// let arr = [1,2,3,4];

// console.log(arr.map((val,i) => val * 2));

// Array.prototype.myMap = function(callback){
//     let arr = [];
//     for(let i = 0; i < this.length; i++){
//       arr.push(callback(this[i]));
//     }
//     return arr;
// }
// console.log(arr.myMap((val,i) => val * 2));

// filter pollyfill

// console.log(arr.filter((val,i) => val > 2));

// Array.prototype.myFilter = function(callback){
//   let arr = [];
//   for(let i = 0; i < this.length; i++){
//     if(callback(this[i])){
//       arr.push(this[i])
//     }
//   }
//   return arr;
// }
// console.log(arr.myFilter((val,i) => val > 2));

// reduce

// console.log(arr.reduce((acc,i) => acc + i));

// Array.prototype.myReduce = function(callback,initival){
//    let acc = initival === undefined ? undefined : initival;
//     for(let i = 0; i < this.length; i++){
//       if(acc != undefined){
//         acc = callback.call(undefined,acc,this[i],i,this)
//       }else{
//         acc = this[i]
//       }
//     }
//     return acc
// }
// console.log(arr.myReduce((acc,i) => acc + i));


// const obj = {
//   name: "Hello",
//   foo: function(...args){
//     console.log(this.name,...args)
//   }
// }

// const obj2 = {
//   name:"Lubana"
// }

// call

// obj.foo.call(obj2,'kkkk')

// call Pollfill

// Function.prototype.myCall = function(context,...args){
//   context.fn = this;
//   context.fn(...args)
// }
// obj.foo.myCall(obj2,'llll')

// apply pollyfill

// obj.foo.apply(obj2,['hello']);

// Function.prototype.myApply = function(context, args = []){
//   context.fn = this;
//   context.fn(...args)
// }
// obj.foo.myApply(obj2,['helloa']);

// Bind

// Function.prototype.myBind = function(...args){
//   let context = this;
//   let params = args.slice(1);
//   return function(...args2){
//     context.apply(args[0], [...args2,...params])
//   }
// }

// const b = obj.foo.myBind(obj2);
// b()

// caching

// const memo = func => {
//   let cache = {};
  
//   return (input) => {
//     return cache[input] || (cache[input] = func(input))
//   }
// }

// const findFactorial = memo(factorial)
// function factorial(num) {
//   // termination case
//   if (num < 0) {
//     throw new Error("Number must be positive.");
//   };
//   // base case
//   if (num === 0 || num === 1) {
//     return 1;
//   };
//   // recursive case
//   return num * findFactorial(num - 1);
// }


// console.log(findFactorial(3));

// Producer and consumer problem

// let data = [];

// function Consumer(){
//   this.consume = false
//   this.notify = function(){
//     if(this.consume) return;
//     this.consumenext()
//   }

//   this.consumenext = function(){
//     this.consume = true;
//     if(data.length > 0){
//       console.log(this.consumer(data.shift()))
//       this.consumenext()
//     }else{
//       this.consume = false;
//     }
//   }

//   this.consumer = function(datanum){
//     return datanum * datanum
//   }

// }
// const con = new Consumer();
// data.push(1,2,3,4,5);
// con.notify()


// Flatten Array
const arr = [[1, 2], [3, 4], [5, 6, 7], [8, 9], [[10]]];
let flat = [];
function flatten(arr){
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      console.log(arr[i])
      flatten(arr[i])
    }else{
      console.log(arr[i])
      flat.push(arr[i])
    }
  }
  return flat;
}
console.log(flatten(arr))








