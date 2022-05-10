// let obj = {
//   name: "Toshal",
//   displayName: function () {
//       console.log(this.name);
//   },
// };

// let obj2 = {
//   name: "Lubana",
// };

// obj.displayName.call(obj2);

// we using a arrow function
let obj3 = {
  name: "Toshal",
  displayName: function () {
    const disp = () => {
      console.log(this.name);
    }
    disp();  
  },
};

let obj4 = {
  name: "Lubana",
};

obj3.displayName.call(obj4);
