// // pratice
// let sample = [1,2,3,4];

// Array.prototype.myMap = function(callback) {
//     let arr = [];
//     for(let i = 0; i < this.length; i++) {
//         arr.push(callback(this[i], i, this))
//     }
//     return arr;
// }

// Array.prototype.myFilter = function(callback) {
//     let arr = [];
//     for(let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this)){
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// Array.prototype.myReduce = function(callback, initalValue = null) {
//     let acc = initalValue
//     for(let i = 0; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this)
//     }
//     return acc;
// }

// console.log(sample.myMap((val) => val * 2));
// console.log(sample.myFilter((val) => val > 2));
// console.log(sample.myReduce((acc, init) => acc + init));

// // Function

// const obj = {
//     name: "Toshal",
//     lastName: "Lubana",
//     printName: function(sample) {
//         console.log(this.name + ' ' + this.lastName + ' ' + sample);
//     }
// }

// const obj1 = {
//     name: "Billioner",
//     lastName: "start",
// }

// Function.prototype.myCall = function(currentContext={}, ...args) {
//     if(typeof this !== 'function') {
//         throw new Error("it is not applicable")
//     }
//     currentContext.fn = this;
//     currentContext.fn(...args)
// }
// obj.printName.myCall(obj1, 'hello')

// Function.prototype.myApply = function(context={}, args=[]) {
//     if(typeof this !== 'function') {
//         throw new Error("it is not applicable")
//     }
//     context.fn = this;
//     context.fn(...args)
// }
// obj.printName.myApply(obj1,['apply'])

// Function.prototype.myBind = function(...args) {
//     if(typeof this !== 'function') {
//         throw new Error("it is not applicable")
//     }
//     let context = this;
//     let params = args.slice(1);
//     return function(...args2) {
//         context.apply(args[0],[ ...params, ...args2])
//     }
// }
// const newPrintName = obj.printName.myBind(obj1)
// newPrintName('bind')

// // Promise all pollyfill

// Promise.allPollyFill = function(Promises) {
//     return new Promise((resolve, reject) => {
//         let arr = [];

//         if(!Promises.length) return;
//         let pending = Promises.length;

//         for(let i = 0; i < Promises.length; i++ ) {
//             // resolve(Promises[i]);
//             arr.push(resolve(Promises[i]))
//             if(pending === 0) {
//                 return arr;
//             }
//             pending--;
//         }

//     });
// }

// Promise.allPollyFill([new Promise((res) => console.log(res)), setTimeout(() => console.log('hello')), console.log('3')])


// function createSetTimeoutPollyfill() {
//     let InterValId = 0;
//     let interValMap = {};

//     function setIntervalPollyfill(callback, delay = 0, ...args) {
//         const id = InterValId++
//         function repeat() {
//             interValMap[id] = setTimeout(() => {
//                 callback(...args);
//                 if(interValMap[id]){
//                     repeat();
//                 }
//             }, delay);
//         }
//         repeat();
//         return id;
//     }

//     function clearTimeoutPollyfill(InterValId) {
//         clearTimeout(interValMap[InterValId]);
//         delete interValMap[InterValId];
//     }

//     return { setIntervalPollyfill, clearTimeoutPollyfill }
// }
// const { setIntervalPollyfill, clearTimeoutPollyfill } = createSetTimeoutPollyfill()

// let counter = 0;
// let interValId;
// function greeting() {
//     counter++;
//     console.log('hello')
//     if(counter >= 3) {
//         clearTimeoutPollyfill(interValId);
//     }
// }
// interValId = setIntervalPollyfill(greeting, 1);

// function useCustomState(initalValue) {
//     let _val = initalValue;
    
//     function state() {
//         return _val;
//     }

//     function setState(newVal) {
//         _val = newVal
//     }
//     return [state, setState];
// }

// const [state, setState] = useCustomState();


// const debounce = function(fn, limit) {
//     let timer;
//     return function(){
//         let context = this;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, arguments);
//         }, limit);
//     }
// }

// const throttle = function(fn, limit) {
//     let flag = true;
//     return function(){
//         let context = this;
//         if(flag) {
//             flag = false;
//             fn.apply(context, arguments);
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }
//     }
// }


// const obj = {
//     "name": "download",
//     "actionConfig": {
//         "mimeType": "text/csv",
//         "type": "actionWithIcon",
//         "url": {
//             "refId": "actionDownloadClaims",
//             "params": {}
//         }
//     },
//     "type": "callback",
//     "visibility": "downloadClaimsAction",
//     "ariaLabel": {
//         "refId": "displayTextTitleDownload",
//         "value": ""
//     }
// }

// deep clone
// function deepClone(obj, output = {}) {

//     for(let key in obj) {
//         if(typeof obj[key] === 'object' || typeof obj[key] === null) {
//             output[key] = deepClone(obj[key])
//         }else {
//             output[key] = obj[key]
//         }
//     }
//     return output
// }
// console.log(deepClone(obj));

// pipe composition

// const add2 = x => x + 2;
// const subtract1 = x => x - 1;
// const multiplyBy5 = x => x * 5;

// const result = multiplyBy5(subtract1(add2(5)));
// console.log(result)

// const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val)
// const result2 = compose(multiplyBy5, subtract1, add2)(5);
// console.log(result2)

// total

const cal = {
    total: 0,
    add: function(a) {
        this.total += a;
        return this;
    },
    multiply: function(b) {
        this.total *= b;
        return this;
    }, 
    subtract: function(c) {
        this.total -= c;
        return this;
    },
}

const result = cal.add(10).multiply(11).subtract(12).add(10);
console.log(result.total);
