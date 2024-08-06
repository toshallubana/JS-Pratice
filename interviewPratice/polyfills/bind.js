const obj = {
  firstName: "Toshal",
  lastName: "Lubana",
  fullName: function (...arg) {
    console.log(this.firstName + this.lastName, ...arg);
    return this.firstName + this.lastName;
  },
};

const obj2 = {
  firstName: "Baljeet",
  lastName: "kaur",
};

// const call = obj.fullName.bind(obj2)
// console.log(call('heloo', 'lubana'))

Function.prototype.myBind = function (...args) {
  if (typeof this != "function") {
    throw new Error("this function is not callable");
  }
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    return obj.apply(args[0], [...params, ...args2]);
  };
};
const call = obj.fullName.myBind(obj2, "jatt");
call("heloo", "lubana");
