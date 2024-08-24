
const promise2 = Promise.reject(5);
const promise1 = Promise.resolve(3)
const promise3 = Promise.reject(8);

// Promise.allSettled([promise1, promise2]).then((res) => console.log(res)).catch((err) => console.log(err));

Promise.allSettledPollyfill = function(promises = []) {

    return new Promise((resolve, reject) => {
        let result = [];

        if(!promises.length){
            resolve(result)
            return;
        }

        let idx = promises.length;

        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((res) => {

                result[i] = {"status" : "fulfilled", value: res};
                idx--;
                if(idx == 0) {
                    resolve(result)
                    return;
                }

            }).catch((err) => {
                result[i] = {"status" : "fulfilled", reason: err};
                idx--
                if(idx == 0) {
                    resolve(result)
                    return;
                }
            })
        }
    })
}

Promise.allSettledPollyfill([promise1, promise2, promise3]).then((res) => console.log(res)).catch((err) => console.log(err));