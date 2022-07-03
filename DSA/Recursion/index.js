// recursion

// function fact(n){
//     if(n <=1 ) {
//         return n
//     }
//     return fact(n-1) * n;
// }
// console.log(fact(5));

// reverse

// function reverse(n){
//     if(n == 0) return;
//     console.log(n)
//     reverse(n-1);
    
// }
// console.log(reverse(10));

// fibonacci value

// function fib(n) {
//     if(n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(6));

// exp list

// function expo(n){
//     if(n == 0) return 1;
//     return 2*expo(n-1);
// }
// console.log(expo(7));

// optimize expo

// function expoOptimize(n){
//     if(n == 0) return 1;
//     let ans = expoOptimize(n/2);
//     if(n&1) return 2*ans*ans;
//     else return ans*ans;
// }
// console.log(expoOptimize(5));

// sorted or unsorted

// function sortedUnsorted(arr,index) {
//     if(index >= arr.length - 1) return true;
//     if(arr[index] < arr[index - 1]){
//         return false;
//     }else{
//        return sortedUnsorted(arr, index + 1)
//     }
// }
// console.log(sortedUnsorted([1,2,5,3,7,9],0));

// subset

// [1,2,3] => [1],[2],[3],[1,2],[2,3],[1,3],[1,2,3],[3]
// function printSubSet(input, output,idx){

//     if(idx == input.length) {
//         console.log(output);
//         return;
//     }

//     // not include case
//     printSubSet(input,[...output],idx + 1);

//     // include
//     output.push(input[idx]);
//     printSubSet(input,[...output],idx+1);
// }
// printSubSet([1,2,3],[],0);

// stair case problem

// function stairCase(n){
//     if(n < 0) return 0;
//     if(n == 0) return 1;
//     return stairCase(n - 1) + stairCase(n - 2) + stairCase(n - 3);
// }
// console.log(stairCase(4));

// subSequence

// function subSequence(str,output,idx){
//     if(idx >= str.length ){
//         console.log(output);
//         return
//     } 
//     subSequence(str,output,idx + 1);
//     subSequence(str,output+str[idx],idx + 1);
// }
// console.log(subSequence('abc','',0));

// Palindrome

// abcba

// function Plaindrome(str,l,idx){

//     if(l>=idx) return true;
//     if(str[l] != str[idx]) return false;
//     return Plaindrome(str,l+1,idx-1);
// }
// console.log(Plaindrome('abcba',0,4))


// Permutation

// i/p => abc
// o/p => abc,acb,bac,bca,cab,cba

function Permutation(str,l,r){
    
    if(l == r){
        console.log(str)
        return;
    }

    for(let i = l; i <= r; i++) {
        str = swap(str,l,i);
        Permutation(str,l+1,r);
        str = swap(str,l,i);
    }
}

function swap(a,i,j){
    let temp;
    let charArray = a.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}

console.log(Permutation('ABC',0,2));


