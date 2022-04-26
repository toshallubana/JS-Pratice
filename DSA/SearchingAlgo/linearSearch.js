function linearSearch(arr,n){
    if(arr.length == 0) return -1;
    for(let i = 0; i < arr.length; i++){
        if(n == arr[i]) return i;
    }
    return -1;
}
console.log(linearSearch([10,25,30,45,49],25));

// for linear search

// best case complexity:- o(1)
// worst case complexity:- o(n)