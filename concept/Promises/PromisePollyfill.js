const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function customPromise(executor){
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];

    function resolve(result){
        if(state !== PENDING) return;

        state = FULLFILLED;
        value = result;
        handlers.forEach((h) => h(value));
    }

    function reject(err){
        if(state !== PENDING) return;

        state = REJECTED;
        value = err;
        catchers.forEach((c) => c(value));
    }

    this.then = function(SuccessCallback){
        if(state === FULLFILLED){
            SuccessCallback(value);
        }else{
            handlers.push(SuccessCallback);
        }
    }

    this.catch = function(failureCallback){
        if(state === REJECTED){
            failureCallback(value)
        }else{
            catchers.push(failureCallback)
        }
    }

    executor(resolve,reject);
}

const dowork = (res,rej) => {
    if(2==1) {
        setTimeout(() => {res("Promise consume")},1000);
    }
    else { 
        setTimeout(() => {rej("Promise rejected")},1000);
    }
}

let greetMsg = new customPromise(dowork);
greetMsg.then(data => console.log(data));
greetMsg.catch(err => console.log(err));