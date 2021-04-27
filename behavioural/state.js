class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  };

  cancelOrder() {
    this.state.name === 'waitingForPayment' ?
      console.log('Order is cancelled!') :
      console.log('Order can not be cancelled!')
  }
}

const myOrder = new Order()

console.log(myOrder.state.name)
myOrder.cancelOrder()

myOrder.nextState()
console.log(myOrder.state.name)

myOrder.cancelOrder()