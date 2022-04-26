// using bind

function sum(...nums){
    let result = 0;
    if(this.total) result = this.total;
    if(nums.length){
        result += nums.reduce((acc,num) => acc += num,0);
        return sum.bind({total: result});
    }
    return result;
}
const total = sum(1,2,3)(4,5)(6)(7,8)(9)(10)();
console.log(total);

///////////////////////////////////////////////////////////////

// using closures

function sumClosure(...nums){
    let result = 0;
    function innerSum(...args){
        if(args.length){
            result += args.reduce((acc,num) => acc += num,0);
            return innerSum;
        }
        return result;
    }
    return innerSum(...nums)
}
const totalClosure = sumClosure(1,2,3)(4,5)(6)(7,8)(9)(10)();
console.log(total);