// not optimize
// function moveZero(arr) {
//   let array = [];
//   let zeroArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       zeroArray.push(arr[i]);
//     } else {
//       array.push(arr[i]);
//     }
//   }
//   return [...array, ...zeroArray];
// }
// console.log(moveZero([8, 5, 10, 20, 0, 0]));

// optimize
// function moveZero(arr) {
//   let c = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[c]] = [arr[c], arr[i]];
//       c++;
//     }
//   }
//   return arr;
// }
// console.log(moveZero([8, 5, 10, 20, 0, 0]));

// ****************************************************

// Pair of given sum is there

// function givenSum(arr, n) {
//   let set = new Set();
//   for (let el of arr) {
//     if (set.has(n - el)) {
//       return true;
//     } else {
//       set.add(el);
//     }
//   }
//   return false;
// }
// console.log(givenSum([2, 1, 3, 6], 3));

// *******************************************************

// 1) How to solve a cross browser issues
// 2) what is micro frontend
// 3) Render to string
//  ReactDomServer.renderToString(); ? for SSR give client html as a string
// 4) React.hydrate()
//   is used to attach the event handlers and makes a page responsive

// 5) Progressive Rehydration

// 6) what is Ouoth2.0? Authorization (sign in with google)
