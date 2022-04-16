const obj = {
  name: "Toshal",
  lastName: "Lubana",
  printName: function () {
    console.log(this.name, this.lastName);
  },
};

const obj1 = {
  name: "Hello",
  lastName: "TestName",
};

Function.prototype.myApply = function (context = {}, args = []) {
  context.fn = this;
  context.fn(...args);
};
obj.printName.myApply(obj1);