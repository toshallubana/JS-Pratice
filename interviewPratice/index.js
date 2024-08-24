// console.log('a')

// factorial

// function fact(n) {

//     if(n == 0) {
//         return 1;
//     }
//     let a = n * fact(n-1)
//     return a
// }
// console.log(fact(5))


// power
// function power(n) {
//     if(n==0){
//         return 1
//     }

//     return 2 * power(n-1)
// }
// console.log(power(4))


// Fibonnaci number

// function fibonnaci(n) {
//     if(n == 0) {
//         return 0;
//     }
//     if(n == 1) {
//         return 1;
//     }
//     return fibonnaci(n-1) + fibonnaci(n-2)
// }
// console.log(fibonnaci(8));

// Stair case

// function stairCase(n) {

//     if(n < 0) {
//         return 0
//     }

//     if(n == 0) {
//         return 1
//     }

//     return stairCase(n - 1) + stairCase(n - 2);
// }
// console.log(stairCase(5));


// say digit

// approch 1
const words = ['zero','first','second', 'third', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// function sayDigit(number) {
//     const arr = number.split('')
//     let str = ' ';

//     for(let i = 0; i < arr.length; i++) {
//         str += words[arr[i]];
//         str += " "
//     }
//     return str;
// }
// console.log(sayDigit("412"));

// function sayDigit(number, words) {

//     if(number == 0) {
//         return
//     }

//     let digit = number % 10;
//     number = Math.round(number / 10)
//     sayDigit(number, words)
//     console.log(words[digit])
    
// }
// sayDigit(412, words)


/// sorted array
// let sorted = [3,4,9,9]
// console.log(sorted.length)
// function sortedArray(arr, index = 0) {
    
//     if(index == arr.length - 1) {
//         return true
//     }
//     // console.log(arr, 'arr')
//     if(arr[index] > arr[index + 1]) {
//         return false
//     }

//     return sortedArray(arr, index + 1)
// }
// console.log(sortedArray(sorted))

// summ of array
// let arr = [3,2,5,1,6];
// function SumArray(sumArray) {
//     if(sumArray.length == 0) {
//         return 0
//     }
//     let remaningpart = SumArray(sumArray.slice(1))
//     return sumArray[0] + remaningpart;
// }
// console.log(SumArray(arr));

// linear search

// function linearSearch(arr, element,index = 0) {

//     if(index == arr.length) {
//         return false
//     }

//     if(arr[index] == element) {
//         return true;
//     }

//     return linearSearch(arr, element, index + 1);
// }
// console.log(linearSearch([3,2,5,1,6], 6));


// binary search

function binarySearch(arr, s, e, k) {

    if(s > e) {
        return -1
    }
    mid = s + Math.round((e-s/2));

    // if mid is equal to k
    if(arr[mid] == k) {
        return mid
    }

    // search in right part
    if(k > arr[mid]) {
        return binarySearch(arr, mid + 1, e, k)
    } else {
        return binarySearch(arr, s, mid - 1, k)
    }
}
console.log(binarySearch([3,2,5,1,6,7], 0, 6, 7));





// var a = 10; // 2015 

// {
//     var a = 10
// }
// console.log(a)
// let b;
// let b = 20; // Es6 2015

// {
//     b = 20; 
// }
// console.log(b)
// const c = 30; // Es6 

// Data type

// primitve and non-primitive

// 1. String
// 2. Number
// 3. boolean






























