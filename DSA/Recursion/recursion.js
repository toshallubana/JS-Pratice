// Sum of number from 1 to n

// function sum(n) {
//   if (n == 0) return 0;
//   return sum(n - 1) + n;
// }
// console.log(sum(10));

// Sum of digit of number

// function sumOfNum(n) {
//   if (n == 0) {
//     return 0;
//   }
//   var lastDigit = n % 10;
//   var remaningDigit = Math.floor(n / 10);
//   return sumOfNum(remaningDigit) + lastDigit;
// }
// console.log(sumOfNum(236));

// Factorial of number

// function Fact(n) {
//   if (n == 0) {
//     return 1;
//   }
//   return n * Fact(n - 1);
// }
// console.log(Fact(6));

// Pattern print

// function printNumbers(n) {
//   var result;
//   if (n <= 1) {
//     result = "1";
//   } else {
//     result = printNumbers(n - 1) + n;
//     console.log(n, result);
//   }
//   // console.log(result);
//   return result;
// }
// printNumbers(6);

// Fibonacci

// program to display fibonacci sequence using recursion
// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// // take nth term input from the user

// for (let i = 0; i < 5; i++) {
//   console.log(fibonacci(i));
// }

// Counting
// function count(n) {
//   if (n == 0) return;

//   count(n - 1);
//   console.log(n);
// }
// count(5);

// Convert number into digits
// let array = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];
// function numToWord(n) {
//   if (n == 0) return;
//   numToWord(Math.floor(n / 10));
//   console.log(array[n % 10]);
// }
// numToWord(432);

// Exponent

// function exponent(n) {
//   if (n == 0) return 1;
//   let ans = exponent(n / 2);

//   if (n & 1) {
//     return 2 * ans * ans;
//   } else {
//     return ans * ans;
//   }
// }
// console.log(exponent(6));

// Sorted or unsorted

// function sortunsort(arr, index) {
//   if (index >= arr.length) {
//     return true;
//   }

//   if (arr[index] < arr[index - 1]) {
//     return false;
//   }
//   return sortunsort(arr, index + 1);
// }
// console.log(sortunsort([1, 2, 3, 4, 5], 1));

// Subset
// function PowerSet(str) {
//   let result = [];

//   function constructSubSet(subSet, index) {
//     if (index >= str.length) {
//       result.push(subSet);
//       return;
//     }
//     constructSubSet(subSet, index + 1);
//     constructSubSet(subSet + str[index], index + 1);
//   }

//   constructSubSet("", 0);
//   return result;
// }
// console.log(PowerSet([1, 2, 3], [], 0));

// Number of jumps

// function jumps(n) {
//   if (n < 0) {
//     return 0;
//   }
//   if (n == 0) {
//     return 1;
//   }
//   return jumps(n - 1) + jumps(n - 2) + jumps(n - 3);
// }
// console.log(jumps(4));

// function permute(str, l, r) {
//   if (l == r) console.log(str);
//   else {
//     for (let i = l; i <= r; i++) {
//       str = swap(str, l, i);
//       permute(str, l + 1, r);
//       str = swap(str, l, i);
//     }
//   }
// }

// function swap(a, i, j) {
//   let temp;
//   let charArray = a.split("");
//   temp = charArray[i];
//   charArray[i] = charArray[j];
//   charArray[j] = temp;
//   return charArray.join("");
// }

// let str = "ABC";
// let n = str.length;
// permute(str, 0, n - 1);

// print from 5 to 1

// function num(n) {
//   if (n == 0) return;
//   console.log(n);
//   num(n - 1);
// }
// console.log(num(5));

// sum of n numbers
// function sum(n) {
//   if (n == 0) return 0;
//   return sum(n - 1) + n;
// }
// console.log(sum(4));

// factorial of n

// function fact(n) {
//   if (n == 1) return 1;
//   return fact(n - 1) * n;
// }
// console.log(fact(4));

// fibonacci series

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// for (let i = 0; i < 10; i++) {
//   console.log(fib(i));
// }

// x^n

// function calc(x, n) {
//   if (n == 0) return 1;
//   if (x == 0) return 0;
//   let pow1 = calc(x, n - 1);
//   let pow = x * pow1;
//   return pow;
// }
// console.log(calc(2, 5));

// x^n using logn

// function powerN(x, n) {
//   if (n == 0) return 1;
//   if (x == 0) return 0;
//   if (n % 2 == 0) {
//     return powerN(x, n / 2) * powerN(x, n / 2);
//   } else {
//     return powerN(x, n / 2) * powerN(x, n / 2) * x;
//   }
// }
// console.log(powerN(2, 5));

// print a string in reverse

// function reverse(str, idx) {
//   if (idx == 0) {
//     console.log(str[idx]);
//     return;
//   }
//   console.log(str[idx]);
//   reverse(str, idx - 1);
// }
// reverse("abcd", 3);

// Find first and last occurence
// let first = -1;
// let last = -1;
// function occurence(str, idx, element) {
//   if (idx == str.length) {
//     console.log(first, last);
//     return;
//   }
//   let val = str[idx];
//   if (val == element) {
//     if (first == -1) {
//       first = idx;
//     } else {
//       last = idx;
//     }
//   }
//   occurence(str, idx + 1, element);
// }
// occurence("abaacdax", 0, "a");

// check if array is sorted

// function sorted(arr, idx) {
//   if (idx == arr.length - 1) {
//     return true;
//   }
//   if (arr[idx] < arr[idx + 1]) {
//     return sorted(arr, idx + 1);
//   } else {
//     return false;
//   }
// }
// console.log(sorted([1, 2, 5, 4], 0));

// move All x

// function moveX(str, idx, count, newString) {
//   if (idx == str.length) {
//     for (let i = 0; i < count; i++) {
//       newString += "x";
//     }
//     console.log(newString);
//     return;
//   }
//   let val = str[idx];
//   if (val == "x") {
//     count++;
//     moveX(str, idx + 1, count, newString);
//   } else {
//     newString += val;
//     moveX(str, idx + 1, count, newString);
//   }
// }
// moveX("axbcdxnx", 0, 0, "");

// Remove all duplicate
// let newString = "";
// function duplicate(str, idx) {
//   if (idx == str.length - 1) {
//     console.log(newString);
//     return;
//   }

//   let val = str[idx];
//   if (!newString.includes(val)) {
//     newString += val;
//     duplicate(str, idx + 1);
//   } else {
//     duplicate(str, idx + 1);
//   }
// }
// duplicate("abbccdasssaadd", 0);

// subsequnce abc
// let set = new Set();
// function sub(str, idx, newString, set) {
//   console.log(set);
//   if (idx == str.length) {
//     if (set.has(newString)) {
//       return;
//     } else {
//       console.log(newString);
//       set.add(newString);
//       return;
//     }
//   }

//   let val = str[idx];

//   // include
//   sub(str, idx + 1, newString + val);

//   //exclude
//   sub(str, idx + 1, newString);
// }
// sub("aaa", 0, "", set);

// print keyword combination

// let hashTable = [
//   "",
//   "",
//   "abc",
//   "def",
//   "ghi",
//   "jkl",
//   "mno",
//   "pqrs",
//   "tuv",
//   "wxyz",
// ];

// function printWordsUtil(number, curr, output, n) {
//   if (curr == n) {
//     // console.log(output.join(""));
//     return;
//   }

//   for (let i = 0; i < hashTable[number[curr]].length; i++) {
//     console.log(hashTable[number[curr]]);
//     output.push(hashTable[number[curr]][i]);
//     printWordsUtil(number, curr + 1, output, n);

//     output.pop();
//   }
// }
// printWordsUtil([2, 3, 4], 0, [], 2);

// Find all permutation

// function permutation(str, per) {
//   if (str.length == 0) {
//     // console.log(per);
//     return;
//   }
//   for (let i = 0; i < str.length; i++) {
//     let val = str[i];
//     let newString = str.substring(0, i) + str.substring(i + 1);
//     console.log(newString);
//     permutation(newString, per + val);
//   }
// }
// permutation("abc", "");

////////////////////////////////////////////////////

// using helper function
// function collectOddValues(arr){
//     let result = [];
//     function helper(inputValue){
//         if(inputValue.length == 0){
//             return;
//         }
//         if(inputValue[0] % 2 != 0){
//             result.push(inputValue[0]);
//         }
//         helper(inputValue.slice(1));
//     }
//     helper(arr)
//     return result;
// }
// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

// using Pure recursion

// function collectOddValuesRecursion(arr){
//     let result = [];
//     if(arr.length == 0){
//         return result;
//     }

//     if(arr[0] % 2 !== 0){
//         result.push(arr[0]);
//     }
//     result = result.concat(collectOddValuesRecursion(arr.slice(1)));
//     return result;
// }
// console.log(collectOddValuesRecursion([1,2,3,4,5,6,7,8,9]));

///////////////////////////////////////////////////////////////////////

// power
// function power(num,pow){
//     if(pow == 0) return 1;
//     return num * power(num,pow - 1)
// }
// console.log(power(2,4));

///////////////////////////////////////////////////////////////////////

// Factorial

// function factorial(num){
//     if(num == 1) return 1;
//     return num * factorial(num - 1);
// }
// console.log(factorial(7));

///////////////////////////////////////////////////////////////////////

// Product of array
// let result = 0;
// function Product(arr){
//     if(arr.length == 0) return 1;
//     result = arr[0] * Product(arr.slice(1));
//     return result; 
// }
// console.log(Product([1,2,3,4]));

///////////////////////////////////////////////////////////////////////

// Recursive range

// function Recursive(num){
//     if(num == 0) return 0;
//     return num + Recursive(num - 1);
// }
// console.log(Recursive(10));

///////////////////////////////////////////////////////////////////////

// Fib

// function Fib(num){
//     if(num == 1 || num == 2) return 1
//     return Fib(num - 1) + Fib(num - 2);
// }
// console.log(Fib(35));

///////////////////////////////////////////////////////////////////////

// reverse
// function reverse(string){
//     if(string.length == 0) return string;
//     return reverse(string.slice(1)) + string[0];
// }
// console.log(reverse('awesome'));

///////////////////////////////////////////////////////////////////////

// isPalindrome
// function isPalindrome(string){
//     if(string.length == 0) return true;
//     if(string[0] == string[1]) return string[0] == string[1];
//     if(string[0] == string.slice(-1)) return isPalindrome(string.slice(1,-1));
//     return false;
// }
// console.log(isPalindrome('amanaplanacanalpanama'));

/////////////////////////////////////////////////////////////////////

// Flatten
// let result = [];
// function flatten(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result = flatten(arr[i]);
//         }else{
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(flatten([1,2,3,[4,5],6,7,8]));

/////////////////////////////////////////////////////////////////////

// captilize words
// function capitalizeFirst(arr){
//     if(arr.length == 1) return [arr[0].toUpperCase()];
//     let res = capitalizeFirst(arr.slice(0,-1));
//     res.push(arr.slice(arr.length - 1)[0].toUpperCase());
//     return res;
// }
// console.log(capitalizeFirst(['car','tar','hello']));

/////////////////////////////////////////////////////////////////////
// nestedEvenSum

// const obj1 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };


// let sum = 0;
// function nestedEvenSum(obj){

//     for(let key in obj){
//         if(typeof obj[key] == 'object' && typeof obj[key] != null){
//             nestedEvenSum(obj[key]);
//         }else{
//             if(typeof obj[key] == 'number'){
//                 sum += obj[key];
//             }
//         }
//     }
//     return sum;
// }
// console.log(nestedEvenSum(obj1));

/////////////////////////////////////////////////////////////////////
// stringifyNumbers

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// function stringifyNumbers(object){
//     const newobj = {};
//     for(let key in object){
//         if(typeof object[key] == 'object' && typeof object[key] != null && !Array.isArray(obj[key])){
//             newobj[key] = stringifyNumbers(object[key]);
//         }else if(typeof object[key] == 'number'){
//             newobj[key] = object[key].toString();
//         }else{
//             newobj[key] = object[key];
//         }
//     }
//     return newobj;
// }
// console.log(stringifyNumbers(obj));

/////////////////////////////////////////////////////////////////////
// collectStrings

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }
// let collectArray = [];
// function collectStrings(obj){
//     for(let key in obj){
//         if(typeof obj[key] == 'object' && typeof obj[key] != null){
//             collectStrings(obj[key]);
//         }else{
//             if(typeof obj[key] == 'string'){
//                 collectArray.push(obj[key]);
//             }
//         }
//     }
//     return collectArray;
// }
// console.log(collectStrings(obj));


// Fibonacci

// iterative

// const fibonacci = (num, array = [0,1]) => {
//     while(num > 2) {
//         const [nextToLast, Last] = array.slice(-2);
//         array.push(nextToLast + Last);
//         num -=1;
//     }
//     return array;
// }
// console.log(fibonacci(12));

// recursion

// const fibonacci = (num, array = [0,1]) => {
//     if(num <=2 ) return array;
//     const [nextToLast, Last] = array.slice(-2);
//     return fibonacci(num - 1, [...array,nextToLast + Last]);
// }
// console.log(fibonacci(12));

// find poistion

// const fib = (pos) => pos < 2 ? pos : fib(pos - 1) + fib(pos - 2);
// console.log(fib(8))

// A Parser
// a company directory

const artistsByGenre = {
    jazz: ['Miles Davis', 'John Coltrane'],
    rock: {
        classic: ['bob Seger', 'The Eagles'],
        hair: ['Def', 'Leppard', 'Whitesnake', 'Poison'],
        alt: {
            classic: ['Pearl jam', 'The Killers'],
            current: ['Joywave', 'Sir Sly']
        }
    },
    unclassified: {
        new: ['Campp', 'neil Young'],
        classic: ['Seal', 'Morcheeba', 'Chris Stapleton']
    }
}

const artistNames = (json,output) => {
    Object.keys(json).forEach((val,key) => {
        if(Array.isArray(json[val])) {
            return json[val].forEach((sub) => output.push(sub));
        }else{
            artistNames(json[val],output);
        }
    });
    return output;
}
console.log(artistNames(artistsByGenre,[]));


