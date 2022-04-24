// sum zero

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }
// console.log(sumZero([-4,-3,-1,0,1,3,2]));

// optimize code

// function sumZero(arr){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum === 0){
//             return [arr[left],arr[right]];
//         }else if(sum > 0){
//             right--;
//         }else{
//             left++;
//         }
//     }
//     return [arr[left],arr[right]];
// }
// console.log(sumZero([-4,-3,-1,0,1,3,2]));

////////////////////////////////////////////////

// countUnique values

// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1;
// }
// console.log(countUniqueValues([1,2,2,5,6,7,7,99,3]));

//////////////////////////////////////////////////

