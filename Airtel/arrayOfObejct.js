// [1,2] -> [{1:1,2:2}]

function changeToObj(arr) {
  let array = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }
  array.push(obj);
  return array;
}
console.log(changeToObj([1, 2]));
