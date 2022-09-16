Promise.allPolyFill = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];

        if(!promises.length) {
            resolve(result);
            return;
        }
        const pending = promises.length;

        promises.forEach((promise,idx) => {
            Promise.resolve(promise).then((res) => {
                result[idx] = res;
                pending--;
                if(pending === 0) {
                    resolve(result);
                }
            }, reject);
        });
    });
}