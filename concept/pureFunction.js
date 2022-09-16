// 1) The same input always gives the same output

const add = (x,y) => x + y;
console.log(add(2,3));

const fullName = (first,last) => `${first} ${last}`;
console.log(fullName('Dave', 'Gray'));

// A pure function should have atleast one parameter

// 2) No side effect
// This also means accesing the scope outside the function maskes the function impure
const z = 5;
const sum = (x,y) => x + y + z;
console.log(sum(2,2));

// Pure function cannot:
// Access a databse, API, file system, storage, etc.
// Modify the DOM
// Or even log to the console

// That said , clearly "impure" function are necessary
// but they are harder to test and debug

// Further, no input state can be modified
// That is, no data should be "mutated"
// Consider all the input are immutable

// Example:-1
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

// Impure Example:-2
const myArray = [1,2,3];
const addToArray = (array,data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray, 4));


// Refactores Example:-1
const pureincrement = (num) => num +=1;
console.log(pureincrement(x));
console.log(x);

// Refactores Example:- 2
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);