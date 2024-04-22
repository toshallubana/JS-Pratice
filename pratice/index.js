// const arr = [1,2,3,4];

// // console.log(arr.map((val) => 2 * val));

// Array.prototype.myMap = function(callback) {
//     let output = [];
//     for(let i = 0; i < this.length; i++) {
//         output.push(callback(this[i], i, this));
//     }
//     return output
// }

// // console.log(arr.myMap((val) => 2 % val));

// // console.log(arr.filter((val) => val > 2));

// Array.prototype.myFilter = function(callback) {
//     let output = [];

//     for(let i = 0; i < this.length; i++) {
//         if(callback(this[i])){
//             output.push(this[i])
//         }
//     }
//     return output
// }

// // console.log(arr.myFilter((val) => val > 2));

// // console.log(arr.reduce((acc, val) => acc + val));

// Array.prototype.myReduce = function(callback, initalValue = null) {
//     let val = initalValue;
//     for(let i = 0; i < this.length; i++) {
//         val = callback(val,this[i], i, this);
//     }
//     return val;
// }

// // console.log(arr.myReduce((acc, val) => acc + val));

// const obj = {
//     name: "Toshal",
//     lastName: "Lubana",
//     fullName: function(...args) {
//         console.log(this.name, this.lastName, ...args)
//     }
// }

// const obj2 = {
//     name: "Yogesh",
//     lastName: "vats"
// }

// obj.fullName.call(obj2);

// Function.prototype.myCall = function(context, args) {
//     if(typeof this !== 'function') {
//         new Error('Not a function');
//     }
//     context.fn = this;
//     context.fn(args)
// }

// obj.fullName.myCall(obj2);

// obj.fullName.apply(obj2, ['hello', 'yellow']);

// Function.prototype.myApply = function(context, args) {
//     context.fn = this;
//     context.fn(...args)
// }

// obj.fullName.myApply(obj2, ['hello', 'yellow']);

// const newFn = obj.fullName.bind(obj2);
// newFn();


// Function.prototype.myBind = function(context, ...restArgs) {
//     context.fn = this;
//     return function() {
//         context.fn.apply(context, [...restArgs, ...arguments])
//     }
// }

// const newFn2 = obj.fullName.myBind(obj2, 'hello', 'yellow');
// newFn2();

// const obj = {
//     name: "Toshal",
//     lastName: "Lubana",
//     fullAddress: {
//         pincode: '134107',
//         sample: {
//             street: "west",
//             area: "isiki"
//         }
//     }
// }

// const deepClone = function(obj) {

//     let output = {};
//     for(let key in obj) {
//         if(typeof obj[key] !== 'object' || typeof obj[key] !== null) {
//             output[key] = obj[key];
//         } else {
//             output[key] = deepClone(obj[key]);
//         }
//     }
//     return output;
// }
// const obj2 = deepClone(obj);

// console.log(obj2 == obj);

// const obj = {
//     name: "Toshal",
//     lastName: "Lubana",
//     fullAddress: {
//         pincode: '134107',
//         sample: {
//             street: "west",
//             area: "isiki"
//         }
//     }
// }

// const output = {
//     name: "Toshal",
//     lastName: "Lubana",
//     "fullAddress.pincode": '134107',
//     "fullAddress.sample.street": 'west',
//     "fullAddress.sample.area": 'isiki',
// }


// const flattenObj = function(obj, newKey = '', newObj = {}) {
//     let output = newObj;

//     for(let key in obj) {
//         let refrenceKey = newKey ? `${newKey}.${key}` : key
//         if(typeof obj[key] !== 'object' || typeof obj[key] == null) {
//             newObj[refrenceKey] = obj[key]; 
//         } else {
//             flattenObj(obj[key], refrenceKey,output );
//         }
//     }
//     return output;
// }

// console.log(flattenObj(obj));


const obj = {
    name: "Toshal",
    lastName: "Lubana",
    fullAddress: {
        pincode: '134107',
        sample: {
            street: "west",
            area: "isiki"
        }
    }
}

const obj2 = {
    name: "Toshal",
    lastName: "Lubana",
    fullAddress: {
        pincode: '134107',
        sample: {
            street: "west",
            area: "isiki"
        }
    }
}

let result = true;
const objectComparison = function(obj, obj2) {

    for(let key in obj) {
        if(typeof obj[key] !== "object" || typeof obj[key] == null) {
            if(obj[key] !== obj2[key]) {
                result = false;
            }
        } else {
            objectComparison(obj[key], obj2[key])
        }
    }
    return result;
}

console.log(objectComparison(obj, obj2));




