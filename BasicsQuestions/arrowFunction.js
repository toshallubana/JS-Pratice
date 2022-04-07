function abc(name) {
  this.name = name;
  this.getName = () => this.name;
}
const p = new abc("Lubana");
console.log(p.getName());
