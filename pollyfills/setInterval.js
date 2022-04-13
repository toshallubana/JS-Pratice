function createIntervalPollyfIll() {
  let setInterValId = 0;
  let interValMap = {};

  function setinterValPollyfill(callback, delay = 0, ...args) {
    if (typeof callback !== "function") {
      throw new TypeError("'callback' should be a function");
    }
    var id = setInterValId++;

    function repeat() {
      interValMap[id] = setTimeout(() => {
        callback(...args);
        if (interValMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function clearIntervalPollyfill(setInterValId) {
    clearTimeout(interValMap[setInterValId]);
    delete interValMap[setInterValId];
  }

  return { setinterValPollyfill, clearIntervalPollyfill };
}

const { setinterValPollyfill, clearIntervalPollyfill } =
  createIntervalPollyfIll();

let counter = 0;
let interValId;

function greeting() {
  counter++;
  console.log("hello");
  if (counter >= 3) {
    clearIntervalPollyfill(interValId);
  }
}
interValId = setinterValPollyfill(greeting, 1000);
