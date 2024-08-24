const arr = [1,[2,3], [4,5,[6,7]]];

// output
// [1,2,3,4,5,6,7]

const flatten = (array, newArray = []) => {
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            flatten(array[i], newArray);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(flatten(arr))