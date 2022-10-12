// Functional programing

// Often uses pipe and compose = higher order functions

/* A higher order funtion is any function which takes a function as an argument, returns a function, or both */

// Here's how a "compose" function works:-

// Strt with small unary (one parameter) function

const add2 = x => x + 2;
const subtract1 = x => x - 1;
const multiplyBy5 = x => x * 5;

// Notice how the functions execute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4)));
console.log(result);

// Making our own compose function

// To get the compose order right to left as we see with nested function calls in our example above, we need reduceRight...
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult);

// To do the same, but read from left to right... we use "pipe"
// it is the same expect uses reduce instead of reduceRight

const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val);
const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);

/* This is a "pointer" style where you do not see the unary parameter passed between each function */

// example with a 2nd parameter

const divideBy = (divisor, num) => num / divisor;

const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    x => divideBy(2, x)
)(5);
console.log(pipeResult2);


// Clone / Copy function within a pipe or compose function

// 3 approches:

// 1) Clone the object before an impure function mutates it
const scoreobj = { home: 0, away: 0 };

const shallowClone = obj => Array.isArray(obj) ? [...obj] : { ...obj };

const incrementHome = obj => {
    obj.home += 1; // mutation
    return obj;
};

const homeScore = pipe(
    shallowClone,
    incrementHome
)
console.log(homeScore(scoreobj));
console.log(scoreobj)

console.log(homeScore(scoreobj) === scoreobj);

// 2) Curry the function to create a partial that is unary

let incrementHomeB = cloneFn => obj => {
    const newObj = cloneFn(obj);
    newObj.home += 1; //mutation
    return newObj;
}

// Creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
    incrementHomeB
);

console.log(homeScoreB(scoreobj));
console.log(scoreobj);

// positive: Pure function with clear dependencies
// Negative: more calls to the cloning function

// 3) Insert the clone function as dependency

const incrementHomeC = (obj, cloneFn) => {
    const newobj = cloneFn(obj);
    newobj.home += 1; // mutation
    return newobj;
}

const homeScoreC = pipe(
    x => incrementHomeC(x, shallowClone)
)

console.log(homeScoreC(scoreobj));
console.log(scoreobj)

// Positive: pure function with clear dependiences
// Negative: Non-unary function in your pipe / compose chain
