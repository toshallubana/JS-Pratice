// anonymous
(() => {

})();

// with the function keyword
(function() {

})();

// with the function name (allows for recursion):

(function myIIFE() {
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log('finished');
})(num = 0);

// Reason to use IIFE

// 1) Does not pollute the global object namespace

const x = 'whatever';
const helloWorld = () => "Hello World";

// isolate declartion within the function
(() => {
    const x = 'life whatever';
    const helloWorld = () => "Hello IIFE";
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

// 2) Private variable and methods from closure

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credits(s)`);
    return () => {counter++, credits(counter)}
})();
increment();
increment();

// 3) The module Pattern

const Score = (() => {
    let count = 0;

    return {
        current: () => { return count },
        increment: () => { count++ },
        reset: () => { count = 0 }
    }
})();

Score.increment();
console.log(Score.current());

// The Revealing pattern is a variation of the module pattern
// only pointer is using

const Game = (() => {

    let count = 0;
    const current = () => { return `Game score is ${count}`};
    const increment = () => { count++ };
    const reset = () => { count = 0 };

    return {
        current: current,
        increment: increment,
        reset: reset
    }
})();

Game.increment();
console.log(Game.current());

// Injection a namespace object

((namespace) => {
    namespace.count = 0;
    namespace.current = function () { return `App count is ${this.count}.`};
    namespace.increment = function () { this.count++ };
    namespace.reset = function () { this.count= 0 };
})(window.App = window.App || {});
App.increment();
console.log(App.current());