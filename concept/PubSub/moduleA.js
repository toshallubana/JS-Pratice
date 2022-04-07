const pubSub = require("./PubSub");

module.exports = {
  publishEvent() {
    const data = {
      msg: "Top secret",
    };
    pubSub.publish("addEvent", data);
  },
};
