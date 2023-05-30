console.log('jai sree ram')

//// --------------------- variables ------------------------------------////

// console.log(a)
// var a = 10;
// console.log(a);
// const a = 30;
// {
//     a = 20;
//     console.log(a)
// }
// console.log(a)

// TDZ zone


//// -------------------- type of functions ----------------------------/////

// function declaration
// function abc() {}

// arrow function
// const abc = () => {}

// function expression
// const abc = function() {}

// IFEE
// (funtion())()

//// ------------------ loops and methods -------------------------- ////

// let obj = {
//     a: 10,
//     b: function() {
//         console.log(this)
//     }
// }

// let arr = [1,2,3]

//// for in loop works on the arrays and objects
// for(let key in obj) {
//     console.log(obj[key]);
//     console.log(obj.k);
// }

//// for of loop work on the array only
// for(let key of arr) {
//     console.log(key)
// }

/////// Array Methods

// let arr = [1,2,3,4];

// console.log(arr.map((val) => ( val * 2)));

// console.log(arr.filter((val) => val > 2));

// console.log(arr.reduce((acc , val) => acc + val));

///// --------------------- call, apply and bind --------------------- /////

let obj = {
    name: "toshal",
    lastName: "lubana",
    printName: function(x,y) {
        console.log(this.name + ' ' + this.lastName + ' ' + x, + ' ' + y);
    }
}

let obj2 = {
    name: "Simran",
    lastName: "Lubana"
}

// method borrowing using call
// obj.printName.call(obj2, 10,20);

// method borrowing using parameters as a array
// obj.printName.apply(obj2,[10,20]);

const pritnName2  = obj.printName.bind(obj2);
pritnName2(10,20)












