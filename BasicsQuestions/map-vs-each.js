// Question:- map vs forEach

const arr = [1, 2, 3, 4, 5];

// it gives us a new array instead changes into actually array
// we also attach the chaining to the map methed like filter or any other method
const a = arr.map((val, i) => val * val);
console.log(arr);

// it changes into the actually array
arr.forEach((val, i) => {
  arr[i] += val;
});
console.log(arr);
