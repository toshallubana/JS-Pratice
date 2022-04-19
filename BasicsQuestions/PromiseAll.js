// Question:- Promise all

function showText(text, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(text);
    }, time);
  });
}

function promiseAll(promises) {
  let result = [];
  return new Promise((res, rej) => {
    promises.forEach((p, i) => {
      p.then(() => {
        result.push(p);
        if (index == promises.length - 1) {
          res(result);
        }
      }).catch((err) => rej(err));
    });
  });
}

Promise.all([
  showText("hello", 1000),
  Promise.resolve("hi"),
  Promise.reject("hellllllll"),
]).then((resolve) => {
  console.log(resolve);
});
