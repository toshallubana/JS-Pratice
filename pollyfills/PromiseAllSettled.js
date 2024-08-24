// const Promise1 = Promise.resolve(10);
// const Promise2 = "11";
// const Promise3 = new Promise((res, rej) =>
//   setTimeout(() => {
//     res(20);
//   }, 1000)
// );

console.log(Promise3.then((val) => console.log(val)).catch(err => console.log(err)), 'Promise3');

// Promise.allSettled([Promise1, Promise2, Promise3]).then((val) => console.log(val)).catch(err => console.log(err)); 


const Promise1 = Promise.resolve(10);
const Promise2 = "11";
const Promise3 = new Promise((res, rej) =>
  setTimeout(() => {
    res(20);
  }, 1000)
);

Promise.Settled = function(array = []) {
    return new Promise((resolve, reject) => {
        if(array.length == 0) {
            resolve(array);
        }

        const obj = [];
        let pending = array.length;

        array.forEach((val, idx) => {
            Promise.resolve(val).then((res) => {
                obj[idx] = {status: 'fullfilled', value: res};
                pending--;
                if(pending == 0) {
                    resolve(obj);
                }
            }).catch((err) => {
                obj[idx] = {status: 'rejected', value: err};
                pending--;
                if(pending == 0) {
                    reject(obj);
                }
            })

        })
    })
}
Promise.Settled([Promise1, Promise2, Promise3]).then((val) => console.log(val,'val')).catch(err => console.log(err, 'err')); 
