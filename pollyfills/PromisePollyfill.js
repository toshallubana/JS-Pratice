// const PENDING = 0;
// const FULLFILLED = 1;
// const REJECTED = 2;

// function customPromise(executor){
//     let state = PENDING;
//     let value = null;
//     let handlers = [];
//     let catchers = [];

//     function resolve(result){
//         if(state !== PENDING) return;

//         state = FULLFILLED;
//         value = result;
//         handlers.forEach((h) => h(value));
//     }

//     function reject(err){
//         if(state !== PENDING) return;

//         state = REJECTED;
//         value = err;
//         catchers.forEach((c) => c(value));
//     }

//     this.then = function(SuccessCallback){
//         if(state === FULLFILLED){
//             SuccessCallback(value);
//         }else{
//             handlers.push(SuccessCallback);
//         }
//     }

//     this.catch = function(failureCallback){
//         if(state === REJECTED){
//             failureCallback(value)
//         }else{
//             catchers.push(failureCallback)
//         }
//     }
//     executor(resolve,reject);
// }

// const dowork = (res,rej) => {
//     if(2==1) {
//         setTimeout(() => {res("Promise consume")},1000);
//     }
//     else { 
//         setTimeout(() => {rej("Promise rejected")},1000);
//     }
// }

// let greetMsg = new customPromise(dowork);
// greetMsg.then(data => data)
// greetMsg.catch(err => console.log(err));

// Output:- Promise rejected

// One more approch

// function MyPromise(executor){
//     let onResolve;
//     let onReject;
//     let isFulfilled = false;
//     let isRejected = false;
//     let isCalled = false;
//     let value;
//     let error;

//     function resovle(val){
//         isFulfilled = true;
//         value = val;
//         if(typeof onResolve == 'function' && !isCalled){
//             onResolve(val);
//             isCalled = true;
//         }
//     }

//     function reject(err){
//         isRejected = true;
//         error = err;
//         if(typeof onReject == 'function' && !isCalled){
//             onReject(err);
//             isCalled = true;
//         }
//     }

//     this.then = function(thenhandler){
//         onResolve = thenhandler;
//         if(!isCalled && isFulfilled){
//             onResolve(value);
//             isCalled = true;
//         }
//         return this;
//     }

//     this.catch = function(catchHandler){
//         onReject = catchHandler;
//         if(!isCalled && isRejected){
//             onReject(error);
//             isCalled = true;
//         }
//         return this;
//     }
//     executor(resovle,reject)
// }

// const dowork = (res,rej) => {
//     if(1==1) {
//         setTimeout(() => {res(2)},1000);
//     }
//     else { 
//         setTimeout(() => {rej(-1)},1000);
//     }
// }
// let greetMsg = new MyPromise(dowork);
// greetMsg.then(data => data)
// .then(res => 2 * 2)
// .then(val => console.log(val))
// .catch(err => console.log(err));

//////////////////////////////////////



function promisePolyFill(executor) {
    let onResolve, onReject, isFulfilled = false, isRejected = false, isCalled = false,value;

    function resolve(val) {
        isFulfilled = true;
        value = val;

        if(typeof onResolve === "function") {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(value) {
        isRejected = true;
        value = val;
        if( typeof onReject === "function") {
            onReject(value);
            isCalled = true;
        }
    }

    this.then = function(callback) {
        onResolve = callback;

        if(isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function (callback) {
        onReject = callback;

        if(isFulfilled && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject);
    } catch(error) {
        reject(error);
    }
    
}

const examplePromise = new promisePolyFill((resolve,reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise.then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

// Promise resolve

promisePolyFill.resolve = (val) => {
    return new promisePolyFill(function executor(resolve, reject) {
        resolve(val);
    });
}

promisePolyFill.reject = (val) => {
    return new promisePolyFill(function executor(resolve, reject) {
        reject(val);
    });
}



