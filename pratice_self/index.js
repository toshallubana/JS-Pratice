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
// const arr = [[1, 2], [3, 4], [5, 6, 7], [8, 9], [[10]]];
// let flat = [];
// function flatten(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//       console.log(arr[i])
//       flatten(arr[i])
//     }else{
//       console.log(arr[i])
//       flat.push(arr[i])
//     }
//   }
//   return flat;
// }
// console.log(flatten(arr));

/////////////////////////////////////////////////////
// Object flatten
// const obj = {
//     name:"Toshal",
//     val:{
//       address:"chandimandir",
//       lastName:"Lubana",
//       xyz:{
//         yzx: "dasdsd"
//       }
//     }
// }

// const flattenObject = (obj) => {
//   const flattened = {}

//   Object.keys(obj).forEach((key) => {
//     const value = obj[key]

//     if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
//       Object.assign(flattened, flattenObject(value))
//     } else {
//       flattened[key] = value
//     }
//   })

//   return flattened
// }

// {
//   name: 'Toshal',
//   address: 'chandimandir',
//   lastName: 'Lubana',
//   yzx: 'dasdsd'
// }

// const flatten = (obj, prefix = '', res = {}) => 
//   Object.entries(obj).reduce((r, [key, val]) => {
//     const k = `${prefix}${key}`
//     console.log(r)
//     if(typeof val === 'object'){ 
//       flatten(val, `${k}.`, r)
//     } else {
//       res[k] = val
//     }
//     return r
//   }, res)
 
// flatten(obj)

// {
//   name: 'Toshal',
//   'val.address': 'chandimandir',
//   'val.lastName': 'Lubana',
//   'val.xyz.yzx': 'dasdsd'
// }

// console.log(flattenObject(obj));

///////////////////////////////////

// singly linked list

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){
      this.head = 0;
      this.tail = 0;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length == 0){
      this.head = 0;
      this.tail = 0;
    }
    return currentHead;
  }
  unshift(val){
    if(!this.head) return this.push(val);
    let newNode = new Node(val);
    let currentHead = this.head;
    this.head = newNode;
    this.head.next = currentHead;
    this.length++;
    return this; 
  }
  get(index){
    if(index < 0 || index > this.length) return false;
    if(index == 0) return this.head;
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  set(val,index){
    let foundNode = this.get(index);
    while(foundNode){
      foundNode.val = val
      return true;
    }
    return false;
  }
  insert(val,index){
    if(index < 0 || index > this.length) return false;
    if(index == this.length) return this.push(val);
    if(index == 0) return this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode = temp;
    this.length++;
    return this;

  }
}

const list = new singlyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.pop(30);
list.shift();
list.unshift(30);












