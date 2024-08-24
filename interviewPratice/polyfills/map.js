const arr = [1,2,3,4,5];
console.log(arr.map((val,i) => val * 2));

Array.prototype.myMap = function(callback) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
}

console.log(arr.myMap((val,i) => val * 3));