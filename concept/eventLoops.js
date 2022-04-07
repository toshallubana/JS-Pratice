console.log("a");
setTimeout(() => console.log("b"));
Promise.resolve(() => console.log("c")).then((res) => res());
console.log("d");

// check eventLoop on website
// jsv9000.app
