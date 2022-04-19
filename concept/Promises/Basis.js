const party = true;
new Promise((res,rej) => {
    setTimeout(() => {
        if(party){
            res('done')
        }else{
            rej('not done party')
        }
    })
})
.then( data => console.log(data))
.catch( err => console.log(err))
.finally(() => console.log('hello'))

// Methods

// Promise.all
// It take array as a arguments with promises in it

const promise1 = setTimeout(() => console.log('hello'),1000);
const promise2 = Promise.resolve(2);
const promise3 = 1

Promise.all([promise1, promise2, promise3])
.then( data => console.log(data))
.catch( err => console.log(err))

const promise1 = setTimeout(() => console.log('hello'),1000);
const promise2 = Promise.reject(2);
const promise3 = 1;

// Promise all
Promise.all([promise1, promise2, promise3])
.then( data => console.log(data))
.catch( err => console.log(err))

// Promise allSettled
Promise.allSettled([promise1, promise2, promise3])
.then( data => console.log(data))
.catch( err => console.log(err))

// output
// 0: {status: 'fulfilled', value: 2}
// 1: {status: 'rejected', reason: 2}
// 2: {status: 'fulfilled', value: 1}

// Promise.race
Promise.race([promise1, promise2, promise3])
.then( data => console.log(data))
.catch( err => console.log(err))