// pratice
let sample = [1,2,3,4];

Array.prototype.myMap = function(callback) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr;
}

Array.prototype.myFilter = function(callback) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.myReduce = function(callback, initalValue = null) {
    let acc = initalValue
    for(let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc;
}

console.log(sample.myMap((val) => val * 2));
console.log(sample.myFilter((val) => val > 2));
console.log(sample.myReduce((acc, init) => acc + init));

// Function

const obj = {
    name: "Toshal",
    lastName: "Lubana",
    printName: function(sample) {
        console.log(this.name + ' ' + this.lastName + ' ' + sample);
    }
}

const obj1 = {
    name: "Billioner",
    lastName: "start",
}

Function.prototype.myCall = function(currentContext={}, ...args) {
    if(typeof this !== 'function') {
        throw new Error("it is not applicable")
    }
    currentContext.fn = this;
    currentContext.fn(...args)
}
obj.printName.myCall(obj1, 'hello')

Function.prototype.myApply = function(context={}, args=[]) {
    if(typeof this !== 'function') {
        throw new Error("it is not applicable")
    }
    context.fn = this;
    context.fn(...args)
}
obj.printName.myApply(obj1,['apply'])

Function.prototype.myBind = function(...args) {
    if(typeof this !== 'function') {
        throw new Error("it is not applicable")
    }
    let context = this;
    let params = args.slice(1);
    return function(...args2) {
        context.apply(args[0],[ ...params, ...args2])
    }
}
const newPrintName = obj.printName.myBind(obj1)
newPrintName('bind')

// Promise all pollyfill

Promise.allPollyFill = function(Promises) {
    return new Promise((resolve, reject) => {
        let arr = [];

        if(!Promises.length) return;
        let pending = Promises.length;

        for(let i = 0; i < Promises.length; i++ ) {
            // resolve(Promises[i]);
            arr.push(resolve(Promises[i]))
            if(pending === 0) {
                return arr;
            }
            pending--;
        }

    });
}

Promise.allPollyFill([new Promise((res) => console.log(res)), setTimeout(() => console.log('hello')), console.log('3')])

