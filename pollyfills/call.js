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

// obj.printName.call(obj1);

Function.prototype.myCall = function (currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};
obj.printName.myCall(obj1);
