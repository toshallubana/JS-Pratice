// // minimum cost to make a string valid

// function findMinimumCost(str) {

//     if(str.length % 2 == 1) return -1;
//     let stack = [];
//     for(let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         if(ch == '(') {
//             stack.push(ch);
//         }else {
//             // ch is closed brace
//             if(stack.length != 0 && stack[stack.length - 1] == '(') {
//                 stack.pop();
//             }else{
//                 stack.push(ch);
//             }
//         }
//     }

//     // stack contain invalid expression

//     let a = 0, b = 0;
//     while(stack.length != 0) {
//         if(stack[stack.length - 1] == '(') {
//             b++;
//         }else{
//             a++;
//         }
//         stack.pop();
//     }

//     let ans = Math.floor((a+1)/2) + Math.floor((b+1)/2);
//     return ans;

// }
// console.log(findMinimumCost('(((((('))


// **************************************************************

// Next smaller element

// i/p -> [2,1,4,3]

function nextSmaller(arr) {
    let stack = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i + 1] < arr[i] ) {
            stack.push(arr[i+1])
        }else{
            stack.push(-1);
        }
    }
    return stack;
}
// console.log(nextSmaller([2,1,4,3]));

// function nextSmaller(arr) {
//     let stack = [];
//     stack.push(-1);
//     let ans = [];
//     for(let i = arr.length - 1; i >=0 ; i--) {
//         let curr = arr[i];
//         while(stack[stack.length - 1] != -1 && arr[stack.length - 1] >= curr) {
//             stack.pop();
//         }
//         ans[i] = stack[stack.length - 1];
//         stack.push(i)
//     }
//     return ans;
// }
console.log(nextSmaller([2,1,4,3]));

function prevSmaller(arr) {
    let stack = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i - 1] < arr[i] ) {
            stack.push(arr[i - 1])
        }else{
            stack.push(-1);
        }
    }
    return stack;
}

// function prevSmaller(arr,n) {
//     let stack = [];
//     stack.push(-1);
//     let ans = [];
//     for(let i = 0; i < arr.length; i++) {
//         let curr = arr[i];
//         while(stack[stack.length - 1] != -1 && arr[stack.length - 1] >= curr) {
//             stack.pop();
//         }
//         ans[i] = stack[stack.length - 1];
//         stack.push(i)
//     }
//     return ans;
// }
console.log(prevSmaller([2,1,5,6,2,3]));