// it only works on a sorted arrays
// it is way way faster then form of search

// a function accept a array and value

function binarySearch(arr,num){
    if(arr.length == 0) return -1;
    let left = 0;
    let right = arr.length - 1;
    let pivot = (arr[left] + arr[right]) / 2;
    while(arr[pivot] !== num && left <= right){
        
        if(num < arr[pivot]){
            right = pivot - 1;
        }else{
            left = pivot + 1;
        }
        pivot = Math.floor((left + right) / 2);
    }
    return arr[pivot] == num ? pivot: -1;
}
console.log(binarySearch([1,2,3,4,5],4));