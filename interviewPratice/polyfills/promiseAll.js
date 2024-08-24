const promise1 = Promise.resolve(3)
const promise2 = Promise.resolve(5);

// const value = Promise.all([promise1, promise2]).then((res) => console.log(res)).catch((err) => console.log(err));


Promise.allPollyfill = function(promises = []) {

    return new Promise((resolve, reject)=>{
        let result = [];
        if(promises.length == 0) {
            resolve(result)
            return
        }
        
        let idx = promises.length;
        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((res) => {
                result[i] = res;
                idx--;
                if(idx == 0) {
                    resolve(result)
                    return
                }
            }, reject)
        }
    })
}

Promise.allPollyfill([promise1, promise2]).then((res) => console.log(res, 'res')).catch((err) => console.log(err,'err'));