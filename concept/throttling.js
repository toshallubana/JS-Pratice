function throttle(fn, delay) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      flag = false;
      fn.apply(context, args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}
const handler = throttle(fn, delay);
