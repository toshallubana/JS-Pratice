function sum(a) {
  return (b) => {
    return b ? sum(a + b) : a;
  };
}
console.log(sum(2)(4)(5)());

function debounce(fn, limit) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(...args);
    }, limit);
  };
}
debounce(fn, limit);
