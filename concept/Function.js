// Function statment // Function Declaration

function a() {
    console.log('abc')
}

// Function Expression

const abc = function() {

}

// Anonymous function
// function () {

// }

// Name function Expression
const expression = function xyz() {
    console.log('xyz');
}

// First Class Function or First class citizen
// we can pass argument as a function and return function

function firstClassFunctionExample(params1) {
    return function() {

    }
}

console.log(firstClassFunctionExample(expression))


// Arrow Function

const Arrow = () => {
    console.log("Arrow function")
}
Arrow();




