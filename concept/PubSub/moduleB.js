const pubSub = require("./PubSub");

subscription = pubSub.subscribe("addEvent", (data) => {
  console.log(`"anEvent", was published with this data: "${data.msg}"`);
  subscription.unsubscribe();
});
