function add(a, b) {
  this.a = a;
  this.b = b;
  console.log(this.a, this.b);
}
add.prototype.assignA = function (a) {
  this.a = a;
  console.log(this.a + this.b);
};

add.prototype.assignB = function (b) {
  this.b = b;
  console.log(this.a + this.b);
};

const a = new add(10, 10);
a.assignA(20);
a.assignB(30);
