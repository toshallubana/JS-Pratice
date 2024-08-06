const arr = [2,4,6,8, 10];
console.log(arr.filter((val,i) => val > 2));

Array.prototype.myFilter = function(callback) {
    let arr2 = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            arr2.push(this[i]);
        }
    }
    return arr2;
}
console.log(arr.myFilter((val,i) => val > 4));