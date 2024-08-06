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

// obj.fullName.apply(obj2, ['heloo', 'lubana'])

Function.prototype.myApply = function(context = {}, args = []) {
    if(typeof this != 'function') {
        throw new Error('this function is not callable')
    }
    context.fn = this;
    return context.fn(...args);
}
obj.fullName.myApply(obj2, ['heloo', 'lubana'])