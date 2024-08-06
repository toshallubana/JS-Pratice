const arr = [2,4,6,8];
console.log(arr.reduce((acc,val) => acc + val));


Array.prototype.myReduce = function(callback, initialValue = null) {
    let acc = initialValue;
    for(let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc;
}

console.log(arr.myReduce((acc, val) => acc + val, 2));