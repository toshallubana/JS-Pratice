function debounce(fn, time) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, time);
  };
}
const keyEvent = debounce(fn, 1000);
