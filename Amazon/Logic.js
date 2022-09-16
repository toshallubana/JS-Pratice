// 1. Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function TwoSum(arr,n){
//     let i = 0, j = i + 1;
//     while(i  < j) {
//         if(arr[i] + arr[j] == n) {
//             return [i,j];
//         }
//         if(j == arr.length - 1) {
//             i++;
//             j = i + 1;
//         }else{
//             j++;
//         }
//     }
//     return false;
// }
// console.log(TwoSum([2,7,11,4,15],11));

// 2. Median of Two Sorted Arrays
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = [...nums1,...nums2].sort((a,b) => a - b);
//     if(arr.length % 2 == 0) {
//         let mid1 = Math.floor(arr.length / 2);
//         let median = (arr[mid1] + (arr[mid1 - 1])) / 2
//         return median;
//     }else{
//         let mid = Math.floor(arr.length / 2);
//         return arr[mid];
//     }
// };

// 3. Longest comman subsequence

// function solve(a,b,i,j) {
//     if(i == a.length) return 0;
//     if(j == b.length) return 0;

//     let ans = 0;
//     if(a[i] == b[j]) {
//         ans = 1 + solve(a, b, i + 1, j + 1);
//     }else{
//         ans = Math.max(solve(a,b,i+1,j), solve(a,b,i,j+1));
//     }
//     return ans;
// }

// function longestCommonSubsequence(text1, text2) {
//     return solve(text1,text2,0,0);
// }
// console.log(longestCommonSubsequence('abcde','abc'));

// 4. count Palindromic Substring
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// console.log(Array(9).fill().map(()=>Array(9).fill()));

// function longestPlaindrome(string) {
//     let arr = Array(string.length).fill().map(()=>Array(string.length).fill());
//     let count = 0;

//     for(let g = 0; g < string.length; g++) {
//         for(let i = 0, j = g; j < arr.length; i++, j++) {
//             if(g == 0) {
//                 arr[i][j] = true;
//             }else if(g == 1) {
//                 if(string.charAt(i) == string.charAt(j)) {
//                     arr[i][j] = true;
//                 }else {
//                     arr[i][j] = false;
//                 }
//             }else {
//                 if(string.charAt(i) == string.charAt(j) && arr[i + 1][j - 1] == true) {
//                     arr[i][j] = true;
//                 }else{
//                     arr[i][j] = false;
//                 }
//             }
//             if(arr[i][j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(longestPlaindrome("abccbc"));

// 5. Longest Palindromic Substring
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// function longestPlaindrome(string) {
//         let arr = Array(string.length).fill().map(()=>Array(string.length).fill());
//         let count = 0;
    
//         for(let g = 0; g < string.length; g++) {
//             for(let i = 0, j = g; j < arr.length; i++, j++) {
//                 if(g == 0) {
//                     arr[i][j] = true;
//                 }else if(g == 1) {
//                     if(string.charAt(i) == string.charAt(j)) {
//                         arr[i][j] = true;
//                     }else {
//                         arr[i][j] = false;
//                     }
//                 }else {
//                     if(string.charAt(i) == string.charAt(j) && arr[i + 1][j - 1] == true) {
//                         arr[i][j] = true;
//                     }else{
//                         arr[i][j] = false;
//                     }
//                 }
//                 if(arr[i][j]){
//                     count = g + 1;
//                 }
//             }
//         }
//         return count;
//     }
//     console.log(longestPlaindrome("abccbc"));

// Integer to Roman

// function romanize(num) {
//     let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
//     let roman = '';
//     for(let i in lookup) {
//         while(num >= lookup[i]) {
//             roman += i;
//             num -= lookup[i];
//             console.log(num,roman);
//         }
//     }
//     return roman;
// }
// console.log(romanize(107));

// Roman to integer
// const values = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000]
// ]);

// function romanToInteger(roman) {
//     let result = 0, current = 0, previous = 0
//     for(let char of roman.split("").reverse()) {
//         current = values.get(char);
//         console.log(current)
//         if(current >= previous) {
//             result += current;
//         }else {
//             result -= current;
//         }
//         previous = current;
//     }
//     return result;
// }
// console.log(romanToInteger('MII'));

// 7. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()[]{}"
// Output: true

function validParanthesis(string) {
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] == '{' || string[i] == '[' || string[i] == '(') {
            stack.push(string[i]);
        }else {
            if(stack.length != 0) {
                let val = stack.slice(-1);
                if((string[i] == ')' && val == '(') || (string[i] == '}' && val == '{') || (string[i] == ']' && val == '[')) {
                    stack.pop();
                }else{
                    return false
                }
            }else{
                return false;
            }
        }
    }
    if(stack.length == 0)
    {
        return true;
    }else {
        return false;
    }
    
}
console.log(validParanthesis('{[]{}}'));




