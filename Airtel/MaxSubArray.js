const maxSum = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let curr = 0;
    for (let j = i; j < arr.length; j++) {
      curr = curr + arr[j];
      res = Math.max(res, curr);
    }
  }
  return res;
};
console.log(maxSum([1, 2, -1, 3, -2]));
