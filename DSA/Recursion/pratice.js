// [5,10,20,99,100] // find second highest

// function highest(arr) {
//   let greater = -1;
//   for (let i = 2; i < arr.length; i++) {
//     if (greater < arr[i] && i != arr.length - 1) {
//       greater = arr[i];
//     }
//     if (i == arr.length - 1 && greater < arr[i]) {
//       return greater;
//     }
//   }
//   return greater;
// }
// console.log(highest([5, 10, 30, 99, 100]));

///////////////////////////////////////////////////
// excel sheet problem
// function printString(columnNumber) {
//   let columnName = [];

//   while (columnNumber > 0) {
//     let rem = columnNumber % 26;
//     if (rem == 0) {
//       columnName.push("Z");
//       columnNumber = Math.floor(columnNumber / 26) - 1;
//     } else {
//       columnName.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
//       columnNumber = Math.floor(columnNumber / 26);
//     }
//   }
//   console.log(columnName.reverse().join("") + "<br>");
// }
// printString(705);

////////////////////////////////////////////////////

// function fibMemo(n, memo = { 0: 0, 1: 1 }) {
//   if (n in memo) {
//     return memo[n];
//   }
//   const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
//   memo[n] = result;
//   return result;
// }
// console.log(fibMemo(1));


//
// abc();
function abc(){
  console.log('hello');
}

const hello = function(){
  console.log('hello');
}

const arrow = () => {

}

(function(){
  var a = b = 10;
  console.log(a)
})();

const obj = {
  name: "Toshal",
  lastName: "Lubana",
  printName: () =>{
    function abc() {
      console.log(`${this.name} ${this.lastName}`);
    }
    abc();
  }
}
// obj.printName();



