// o(n**2) complexity

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([37,45,29,8]));

// optimize

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        nowSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                nowSwaps = false;
            }
        }
        if(nowSwaps) break;
    }
    return arr;
}
console.log(bubbleSort([37,45,29,8]));