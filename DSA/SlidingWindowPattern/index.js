// function maxSubArray(arr,sum){
//     if(sum > arr.length){
//         return null;
//     }

//     let max = -Infinity;
//     for(let i = 0; i < arr.length - num; i++){
//         temp = 0;
//         for(let j = 0; j < sum; j++){
//             temp += arr[i+j];
//         }
//         if(temp > sum){
//             sum = temp;
//         }
//     }
//     return sum;
// }
// console.log(maxSubArray([1,2,5,2,8,1,5], 2))

// optimize

// function maxSubArray(arr, num){
//     let maxSum = 0;
//     let tempSum = 0;
//     if(arr.length < num) return null;
//     for(let i = 0; i < num; i++){
//         maxSum +=arr[i];
//     }
//     for(let i = num; i < arr.length; i++){
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum,tempSum);
//     }
//     return maxSum;
// }
// console.log(maxSubArray([1,2,5,2,8,1,5], 2))