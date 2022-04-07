const arr = [[1, 2], [3, 4], [5, 6, 7], [8, 9], [[10]]];

console.log([].concat(...arr)); // it works on one level
console.log(arr.flat(2));

// Using custom methods
function FlattenArray(arr, depth) {
  let result = [];

  arr.forEach((val, i) => {
    if (Array.isArray(val) && depth > 0) {
      result.push(...FlattenArray(val, depth - 1));
    } else result.push(val);
  });
  return result;
}
console.log(FlattenArray(arr, 2));
