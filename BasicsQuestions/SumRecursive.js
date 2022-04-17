function Sum(a){
  return function(b) {
    if(b){
      return Sum(a + b);
    }
    return a
  }
}
console.log(Sum(1)(2)());