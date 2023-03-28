
// Example
const cart = ["shoes", "pants", "kurta"];

//using callback
createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

// using promise
const promise = createOrder(cart);


function createorder(cart) {
    const pr = new Promise(function(resolve, reject) {

    });
    return pr;
}