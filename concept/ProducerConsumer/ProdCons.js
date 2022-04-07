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
      //consume one datum
      console.log(await this.consume(data.shift()));

      //consume next datum
      this.consumeNext();
    } else {
      this.isConsuming = false;
    }
  };

  this.consume = async function (datum) {
    return datum * datum;
  };
}

var consumer = new Consumer();
//call consumer.notify() when your producer produces
data.push(1, 2, 3, 4, 5);
consumer.notify();
