const obj = {
  name: "Toshal",
  lastName: "Lubana",
  printName: function (h, k) {
    console.log(this.name, this.lastName, h, k);
  },
};

const obj1 = {
  name: "Hello",
  lastName: "TestName",
};

const printName2 = obj.printName.bind(obj1, "jj");
printName2();

// pollyfill

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printName3 = obj.printName.mybind(obj1, "yy");
printName3("for");
