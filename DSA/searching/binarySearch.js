const arr = [25, 8,9, 1,4,10,24];
const key = 9;

arr.sort((a,b) => a - b);

let left = 0;
let right = arr.length - 1;
let mid = Math.round(left + (right - left)/2);

while(left <= right) {
    if(arr[mid] == key) console.log(mid);
    
    if(arr[mid] < key) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
    mid = Math.round(left + (right - left)/2);
}
