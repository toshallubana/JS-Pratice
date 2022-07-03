// faltten the array

// let arr = [[1,2],[[3],4],[5,6,7,8,9],[10,11,12]];
// let newArr = [];
// function flattenArray(arr) {
//     for(let value of arr) {
//         if(Array.isArray(value)) {
//             flattenArray(value);
//         }else{
//             newArr.push(value);
//         }
//     }
//     return newArr;
// }
// console.log(flattenArray(arr));

// Composition pollyfill

// function addFour(a) {
//     return a + 5;
// }

// function subtractOne(a) {
//     return a - 2;
// }

// function multiplyFive(a) {
//     return a * 4;
// }

// const compose = (...functions) => {
//     return (args) => {
//         return functions.reduceRight((arg,fn) => fn(arg), args)
//     }
// }
// const evaluate = compose(addFour,subtractOne,multiplyFive);
// console.log(evaluate(5));

// Implement Promise.all
// function myPromiseAll(promises) {
//     let result = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach((p, idx) => {
//             p.then((res) => {
//                 result.push(res);
//                 if(idx === promises.length - 1) {
//                     resolve(result);
//                 }
//             }).catch((err) => reject(err));
//         });
//     });
// }

// myPromiseAll([
//     Promise.resolve('hello'),
//     Promise.resolve('bye')
// ]).then((value)=> console.log(value));

// debounce

function myDebounce(cb,interval) {
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        },interval);
    }
}

console.log(myDebounce())

