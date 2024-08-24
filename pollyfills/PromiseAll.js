const promise1 = Promise.resolve(3)
const promise2 = Promise.reject(5);

Promise.allPollyFill = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];

        if(!promises.length) {
            resolve(result);
            return;
        }
        let pending = promises.length;

        promises.forEach((promise,idx) => {
            Promise.resolve(promise).then((res) => {
                result[idx] = res;
                pending--;
                if(pending === 0) {
                    resolve(result);
                    return
                }
            }, reject);
        });
    });
}

Promise.allPolyFill([promise1, promise2]).then((res) => console.log(res)).catch((err) => console.log(err));