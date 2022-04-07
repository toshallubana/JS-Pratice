let suscribers = {};

module.exports = {
  publish(event, data) {
    if (!suscribers[event]) return;
    suscribers[event].forEach((callback) => {
      callback(data);
    });
  },
  // First, we check if there are any subscribers that have registered for the event. If there aren’t, we can return early from the publish method since we have no subscribers with callbacks to invoke. If there are subscribers, we loop through the events array and invoke each subscriber callback that has been pushed into the event array. We also pass through any data that may have been provided to each of the callbacks.
  subscribe(event, callback) {
    let index;
    if (!suscribers[event]) {
      suscribers[event] = [];
    }
    index = suscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        suscribers[event].splice(index, 1);
      },
    };
  },
  // In the above bit of code, we first check to see if the event in question has been registered in the subscribers object. If the event does not exist on the subscribers object, we know it hasn’t been registered and so we register it using the event name as the key and we initialize the value to an empty array. Lastly, we’ll push the subscriber callback into the event array.
};
