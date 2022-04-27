// Instead of sorting large value sort the small values first

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lower = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lower]){
                lower = j;
            }
        }
        [arr[i],arr[lower]] = [arr[lower],arr[i]];
    }
    return arr;
}
console.log(selectionSort([37,29,8,45]));