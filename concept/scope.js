let cal = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(b) {
    this.total *= b;
    return this;
  },
  subtract(c) {
    this.total -= c;
    return this;
  },
};

const result = cal.add(10).multiply(11).subtract(12).add(10);
console.log(result.total);
