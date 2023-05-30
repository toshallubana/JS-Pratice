console.log('jai sree ram')

//// --------------------- variables ------------------------------------////

// console.log(a)
// var a = 10;
// console.log(a);
// const a = 30;
// {
//     a = 20;
//     console.log(a)
// }
// console.log(a)

// TDZ zone


//// -------------------- type of functions ----------------------------/////

// function declaration
// function abc() {}

// arrow function
// const abc = () => {}

// function expression
// const abc = function() {}

// IFEE
// (funtion())()

//// ------------------ loops and methods -------------------------- ////

// let obj = {
//     a: 10,
//     b: function() {
//         console.log(this)
//     }
// }

// let arr = [1,2,3]

//// for in loop works on the arrays and objects
// for(let key in obj) {
//     console.log(obj[key]);
//     console.log(obj.k);
// }

//// for of loop work on the array only
// for(let key of arr) {
//     console.log(key)
// }

/////// Array Methods

// let arr = [1,2,3,4];

// console.log(arr.map((val) => ( val * 2)));

// console.log(arr.filter((val) => val > 2));

// console.log(arr.reduce((acc , val) => acc + val));

///// --------------------- call, apply and bind --------------------- /////

let obj = {
    name: "toshal",
    lastName: "lubana",
    printName: function(x,y) {
        console.log(this.name + ' ' + this.lastName + ' ' + x, + ' ' + y);
    }
}

let obj2 = {
    name: "Simran",
    lastName: "Lubana"
}

// method borrowing using call
// obj.printName.call(obj2, 10,20);

// method borrowing using parameters as a array
// obj.printName.apply(obj2,[10,20]);

// const pritnName2  = obj.printName.bind(obj2);
// pritnName2(10,20)

///// ----------------- pollyfills --------------------/////

//call
// Function.prototype.myCall = function(context = {} , ...args) {
//     context.fn = this;
//     context.fn(...args);
// }

// obj.printName.myCall(obj2, 10,20);

// bind
// Function.prototype.myApply = function(context = {}, args = []) {
//     context.fn = this;
//     context.fn(...args)
// }
// obj.printName.myApply(obj2, [10,20]);

// Bind
// Function.prototype.myBind = function(...args) {
//     let obj = this;
//     params = args.slice(1);
//     return function(){
//         obj.apply(args[0],[...params,...arguments]);
//     }
// }
// const printName1 = obj.printName.myBind(obj2);
// printName1(10,20);

// map
// let array = [1,2,3,4];
// Array.prototype.myMap = function(callback) {
//     if(!Array.isArray(this)){
//         throw new Error(this + 'it is not valid')
//     }
//     let arr = [];
//     for(let i = 0; i < this.length; i++) {
//         arr.push(callback(this[i]))
//     }
//     return arr;
// }

// console.log(array.myMap(val => val * 2));

// Array.prototype.myFilter = function(callback) {
//     if(!Array.isArray(this)){
//         throw new Error(this + 'it is not valid')
//     }
//     let arr = [];
//     for(let i = 0; i < this.length; i++) {
//         if(callback(this[i])){
//             arr.push(this[i])
//         }
//     }
//     return arr;
// }
// console.log(array.myFilter(val => val > 2));

// Array.prototype.myReduce = function(callback, initalValue = null) {
//     if(!Array.isArray(this)){
//         throw new Error(this + 'it is not valid')
//     }
//     let acc = initalValue;
//     for(let i = 0; i < this.length; i++) {
//         acc = callback(acc, this[i], i , this)
//     }
//     return acc;
// }
// console.log(array.myReduce((acc , val) => {
//    return acc + val
// }));


//// ------------------------ Promises ----------------------- ////
// let party = true
// new Promise((res, rej) => {
//     setTimeout(() => {
//         if(party) {
//             res(true)
//         }else{
//             rej(false)
//         }
//     })
// })
// .then((val) => console.log(val))
// .catch((e) => console.log(e))
// .finally(() => console.log('hello'))

const promise1 = new Promise((res) => res(1));
const promise2 = setTimeout(() => console.log('2'));
const promise3 = new Promise((res,rej) => rej(3));
// Promise.all([promise1,promise2,promise3]);
// console.log(Promise.allSettled([promise1,promise2,promise3]));

//// --------------- Pollyfill for promise ------------------- ////

Promise.myPromiseAll = function(promises) {

    return new Promise((resolve, reject) => {
        let result = [];
        if(!promises.length) {
            resolve(result);
            return;
        }
        let pending = promises.length;
        promises.forEach((promise,idx) => {
            Promise.resolve(promise).then((res) => {
                result[idx] = res;
                pending--;
                if(pending === 0) {
                    resolve(result);
                }
            }, reject)
        });
    })
};
console.log(Promise.myPromiseAll([promise1,promise2,promise3]));

// promise allSettled

Promise.myAllSettled = function(promises) {
    return Promise.all(
        promises.map(promise => 
            Promise.resolve(promise)
            .then((val) => (
                {
                    status: "Fullfiled",
                    value: val
                }
            ))
            .catch((response) => (
                {
                    status: "rejected",
                    response: response
                }
            ))
        )
    )
}
// console.log(Promise.myAllSettled([promise1,promise2,promise3]));









