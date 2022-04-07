///////////////
// *****
// *****
// *****
// *****
// *****

// let str = "";
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 3; j++) {
//     if (i <= 3 && j <= 3) {
//       str = str.concat("*");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

/////////////////

// 111
// 222
// 333

// let str = "";
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i <= 3 && j <= 3) {
//       str = str.concat(i);
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

//////////////////

// 1234
// 1234
// 1234
// 1234

// let str = "";

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     if (i <= 4 && j <= 4) {
//       str = str.concat(j);
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

///////////////////

// 321
// 321
// 321

// let str = "";

// for (let i = 3; i >= 1; i--) {
//   for (let j = 3; j >= 1; j--) {
//     if (i >= 1 && j >= 1) {
//       str = str.concat(j);
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

////////////////////

// 123
// 456
// 789

// let str = "";
// let count = 1;
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i <= 3 && j <= 3) {
//       str = str.concat(count);
//       count++;
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

///////////////////////

// *
// **
// ***
// ****

// let str = "";

// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 2; j++) {
//     if (i >= j) {
//       str = str.concat("*");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

/////////////////////////

// 1
// 22
// 333
// 4444
// let str = "";
// let count = 1;
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 3; j++) {
//     if (i >= j) {
//       str = str.concat(count);
//     }
//   }
//   count++;
//   str = str.concat("\n");
// }
// console.log(str);

//////////////////////////////

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let str = "";
// let count = 1;
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 3; j++) {
//     if (i >= j) {
//       str = str.concat(" " + count);
//       count++;
//     }
//   }

//   str = str.concat("\n");
// }
// console.log(str);

////////////////////////////////

// 1
// 2 3
// 3 4 5
// 4 5 6 7

// let str = "";
// let count = 1;
// for (let i = 1; i <= 4; i++) {
//   let row = i;
//   for (let j = 1; j <= 4; j++) {
//     if (i >= j) {
//       str = str.concat(" " + row);
//       row++;
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

/////////////////////////////////

// 1
// 2 1
// 3 2 1
// 4 3 2 1

// let str = "";

// for (let i = 1; i <= 4; i++) {
//   let row = i;
//   for (let j = 1; j <= 4; j++) {
//     if (i >= j) {
//       str = str.concat(row);
//       row--;
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

//////////////////////////////////

// A A A
// B B B
// C C C
// let str = "";
// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 2; j++) {
//     str = str.concat(String.fromCharCode(65 + i));
//   }
//   str = str.concat("\n");
// }
// console.log(str);

///////////////////////////////

// A B C
// A B C
// A B C
// let str = "";

// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 2; j++) {
//     str = str.concat(String.fromCharCode(65 + j));
//   }
//   str = str.concat("\n");
// }
// console.log(str);

/////////////////////////////

// A B C
// D E F
// G H I
// let str = "";
// let count = 65;
// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 2; j++) {
//     str = str.concat(String.fromCharCode(count));
//     count++;
//   }
//   str = str.concat("\n");
// }
// console.log(str);

////////////////////////////

// A B C
// B C D
// C D E

// let str = "";
// for (let i = 0; i <= 2; i++) {
//   let row = i + 65;
//   for (let j = 0; j <= 2; j++) {
//     str = str.concat(String.fromCharCode(row));
//     row++;
//   }
//   str = str.concat("\n");
// }
// console.log(str);

///////////////////////////////

// A
// B B
// C C C

// let str = "";

// for (let i = 0; i <= 2; i++) {
//   let row = i + 65;
//   for (let j = 0; j <= 2; j++) {
//     if (i >= j) {
//       str = str.concat(String.fromCharCode(row));
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

///////////////////////////////

// A
// B C
// D E F

// let row = 65;
// let str = "";
// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 2; j++) {
//     if (i >= j) {
//       str = str.concat(String.fromCharCode(row));
//       row++;
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

///////////////////////////////

// D
// C D
// B C D
// A B C D

// let str = "";
// for (let i = 3; i >= 0; i--) {
//   let row = 65 + i;
//   for (let j = 3; j >= 0; j--) {
//     if (i <= j) {
//       str = str.concat(String.fromCharCode(row));
//       row++;
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

/////////////////////////

//       *
//     * *
//   * * *
// * * * *

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j >= 6 - i) {
//       str = str.concat("*");
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

/////////////////////////

// * * * *
// * * *
// * *
// *

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j <= 5 - i) {
//       str = str.concat("*");
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

//////////////////////////

// 1 1 1 1
//   2 2 2
//     3 3
//       4

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j >= i) {
//       str = str.concat(i);
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

//////////////////////////////

//        1
//      2 2
//    3 3 3
//  4 4 4 4

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j >= 6 - i) {
//       str = str.concat(i);
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

//////////////////////////

// 1 2 3 4
//   2 3 4
//     3 4
//       4
// let str = "";

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     if (j >= i) {
//       str = str.concat(i);
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

//        1
//      2 2
//    3 3 3
//  4 4 4 4

// let str = "";
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     if (j >= 5 - i) {
//       str = str.concat(i);
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);

// 1 2 3 4
//   2 3 4
//     3 4
//       4

// let str = "";
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     if (j >= i) {
//       str = str.concat(j);
//     } else {
//       str = str.concat(" ");
//     }
//   }
//   str = str.concat("\n");
// }
// console.log(str);
