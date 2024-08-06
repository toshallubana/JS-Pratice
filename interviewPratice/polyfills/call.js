const obj = {
    firstName: "Toshal",
    lastName: "Lubana",
    fullName: function(...arg) {
        console.log(this.firstName + this.lastName, ...arg)
        return this.firstName + this.lastName
    }
}

const obj2 = {
    firstName: "Baljeet",
    lastName: "kaur"
}
// console.log(obj.fullName.call(obj2))

Function.prototype.myCall = function(context = {}, ...arg) {
    if(typeof this != 'function') {
        throw new Error('this is not a callable')
    }
    context.fn = this;
    return context.fn(...arg)
}
obj.fullName.myCall(obj2, 'hello', 'lubana', 'jaat')