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

function solve(a,b,i,j) {
    if(i == a.length) return 0;
    if(j == b.length) return 0;

    let ans = 0;
    if(a[i] == b[j]) {
        ans = 1 + solve(a, b, i + 1, j + 1);
    }else{
        ans = Math.max(solve(a,b,i+1,j), solve(a,b,i,j+1));
    }
    return ans;
}

function longestCommonSubsequence(text1, text2) {
    return solve(text1,text2,0,0);
}
console.log(longestCommonSubsequence('abcde','abc'));

// 3. Longest Palindromic Substring
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.





