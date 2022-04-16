var data = [];

function Consumer() {
  this.isConsuming = false;

  this.notify = function () {
    if (this.isConsuming) {
      return;
    }
    this.consumeNext();
  };

  this.consumeNext = async function () {
    this.isConsuming = true;
    if (data.length > 0) {
      //consume one dataVal
      console.log(await this.consume(data.shift()));

      //consume next dataVal
      this.consumeNext();
    } else {
      this.isConsuming = false;
    }
  };

  this.consume = async function (dataVal) {
    return dataVal * dataVal;
  };
}

var consumer = new Consumer();
//call consumer.notify() when your producer produces
data.push(1, 2, 3, 4, 5);
consumer.notify();
