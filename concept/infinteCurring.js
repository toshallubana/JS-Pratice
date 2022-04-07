console.log(curring(5)(4)(3)(2)());

function curring(a) {
  return function (b) {
    if (b) {
      return curring(a + b);
    }
    return a;
  };
}
