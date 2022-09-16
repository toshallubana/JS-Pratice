// Decorator wrap a function into another function

// These wrapper 'decorate' the original function with new capabilites

// The concept of decorators is not exclusive to javascript

// Benefits: D.R.Y. and clean code through composition


// Example 1:

// using closure to log how many times a function is called

// let sum = (...args) => {
//     return [...args].reduce((acc,num) => acc + num);
// }

// const callCounter = (fn) => {
//     let count = 0;

//     return (...args) => {
//         console.log(`sum has been called ${count +=1} times`);
//         return fn(...args);
//     }
// }

// sum = callCounter(sum);

// console.log(sum(2,3,5));
// console.log(sum(1,5));
// console.log(sum(14,5));

// check for valid data and number of params

let rectangleArea = (length, width) => {
    return length * width;
}

let countParams = (fn) => {
    return (...params) => {
        if(params.length !== fn.length) {
            throw new Error(`incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

const requireIntegers = (fn) => {
    const name = fn.name;
    return (name, ...params) => {
        params.forEach(param => {
            if(!Number.isInteger(param)) {
                throw new TypeError(`Params for ${name} must be integer`);
            }
        });
        return fn(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20,30));