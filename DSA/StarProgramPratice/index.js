// *
// * *
// * * *
// * * * *
// * * * * *

// let str = "";
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         if(i>=j){
//            str = str.concat("*"); 
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

//         *
//       * *
//     * * *
//   * * * *

// let str = "";
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         if(j>=4-i){
//            str = str.concat("*"); 
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let str = "";
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         if(j>=i){
//            str = str.concat("*"); 
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

// * * * * *
// * * * *
// * * *
// * *
// *

// let str = "";
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         if(j<=4-i){
//            str = str.concat("*"); 
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *


// let str = "";
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 9; j++){
//         if(j>=4-i && j<=4+i){
//            str = str.concat("*"); 
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


//         *
//       *   *
//     *   *   *
//   *   *   *   *
// *   *   *   *   *

// let str = "";
// for(let i = 0; i < 5; i++){
//     flag = true;
//     for(let j = 0; j < 9; j++){
//         if(j>=4-i && j<=4+i && flag === true){
//             flag= false;
//            str = str.concat("*"); 
//         }else{
//             flag= true;
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

// **********
// **** *****
// ***    ***
// **      **
// *        *

// let str = "";
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 9; j++){
//         if(j<=4-i || j>=4+i){
//            str = str.concat("*"); 
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1

// let str = "";
// for(let i = 0; i < 5; i++){
//     let count = 0;
//     for(let j = 0; j < 9; j++){
//         if(j>=4-i && j<=4+i){
//             j < 5 ? count++ : count--;
//             str = str.concat(count); 
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


// A B C D C B A
// A B C   C B A
// A B       B A
// A           A

// let str = "";
// for(let i = 1; i <=4; i++){
//     let count = 65;
//     for(let j = 1; j <=7; j++){
//         if(j<=5-i || j>=3+i){
//             str = str.concat(String.fromCharCode(count)); 
//             j < 4 ? count++ : count--;
//         }else{
//             str = str.concat(" ");
//             if(j==4) count--;
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);



//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// let str = "";
// let k = 0;
// let n = (7+1)/2;
// for(let i = 1; i <=7; i++){
//     i <= n ? k++ : k--;
//     for(let j = 1; j <=7; j++){
//         if(j>=n+1-k && j<=n-1+k){
//             str = str.concat("*");  
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

// *
// * *
// * * *
// * * * *
// * * *
// * *
// *

// let str = "";
// let k = 0;
// for(let i = 1; i <=7; i++){
//     i < 5 ? k++ : k--;
//     for(let j = 1; j <=4; j++){
//         if(j<=k){
//             str = str.concat("*") ;  
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

// * * * * * * *
//   * * * * *
//     * * *
//       *

// let str = "";
// let k = 0;
// for(let i = 1; i <=4; i++){
//     for(let j = 1; j <=7; j++){
//         if(j>=i && j <= 8-i){
//             str = str.concat("*") ;  
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


//    1   
//   232  
//  34543 
// 4567654

// let str = "";
// let count;
// for(let i = 1; i <=4; i++){
//     let count = i;
//     for(let j = 1; j <=7; j++){
//         if(j>=5-i && j <= 3+i){
//             str = str.concat(count);
//             j < 4 ? count++: count--;  
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


// 6543210
// 543210 
// 43210  
// 3210   
// 210    
// 10     
// 0 

// let str = "";
// let count;
// for(let i = 1; i <=7; i++){
//     let count = 7 - i;
//     for(let j = 1; j <=7; j++){
//         if(j<=8-i){
//             str = str.concat(count);
//             count--;
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

//     5
//    45
//   345
//  2345
// 12345
//  2345
//   345
//    45
//     5

// let str = "";
// let count = 0;
// for(let i = 1; i <=9; i++){
//     i > 5 ? count-- : count++;
//     for(let j = 1; j <=5; j++){
//         if(j>=6-count){
//             str = str.concat(j);
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


// /*****/
// */***/*
// **/*/**
// ***/***
// **/*/**
// */***/*
// /*****/

// let str = "";
// for(let i = 1; i <=7; i++){
//     for(let j = 1; j <=7; j++){
//         if(j == i || j == 8 - i){
//             str = str.concat("/");
//         }else{
//             str = str.concat("*");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********

// let str = "";
// let k = 0;
// for(let i = 1; i <=9; i++){
//     i > 5 ? k-- : k++;
//     for(let j = 1; j <=9; j++){
//         if(j <= 6 - k || j >= 4 + k){
//             str = str.concat("*");
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


//    A
//   ABA 
//  ABCBA
// ABCDCBA

// let str = "";
// for(let i = 1; i <=4; i++){
//     let k = 64
//     for(let j = 1; j <=7; j++){
//         if(j >= 5-i && j <= 3+i ){
//             j <= 4 ? k++ : k--;
//             str = str.concat(String.fromCharCode(k));
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


//    A1   
//   AB12  
//  ABC123 
// ABCD1234


// let str = "";
// for(let i = 1; i <=4; i++){
//     let k = 65
//     let count = 1;
//     for(let j = 1; j <=8; j++){
//         j < 5 ? k : k = count;
//         if(j >= 5-i && j <= 4+i ){
//             let val;
//             if(k >= 65) {
//                 val = String.fromCharCode(k);
//                 k++;
//             }else{
//                 val = k;
//                 count++
//             }
//             str = str.concat(val);
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

//    *****
//   ***** 
//  *****  
// ***** 

// let str = "";
// for(let i = 1; i <=4; i++){
//     for(let j = 1; j <=8; j++){
//         if(j >= 5-i && j<=9-i){
//             str = str.concat("*");
//         }else{
//             str = str.concat(" ");
//         }
        
//     }
//     str = str.concat("\n");
// }
// console.log(str);

//    1   
//   12A  
//  123AB 
// 1234ABC


// let str = "";
// for(let i = 1; i <=4; i++){
//     let k = 65;
//     let count = 1;
//     for(let j = 1; j <=7; j++){
//         if(j >= 5-i && j<=3+i){
//             j <= 4 ? count : count = k++;
//             let val;
//             if(count >=65){
//                 val = String.fromCharCode(count)
//             }else{
//                 val = count;
//             }
//             str = str.concat(val);
//             count++;
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);


// 1     
// 10    
// 101   
// 1010  
// 10101 
// 101010

// let str = "";
// for(let i = 1; i <=6; i++){
//     for(let j = 1; j <=6; j++){
//         j%2 != 0 ? k = 1 : k=0;
//         if(j<=i){
//             str = str.concat(k);
//         }else{
//             str = str.concat(" ");
//         }
//     }
//     str = str.concat("\n");
// }
// console.log(str);

























