class Counter {

  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance
    }
    this.count = 0
    Counter.instance = this
    return this
  }

  getCount() {
    return this.count
  }

  increaseCount() {
    return this.count++
  }
}

const cnt1 = new Counter()
const cnt2 = new Counter()

cnt1.increaseCount()
cnt1.increaseCount()
cnt2.increaseCount()
cnt2.increaseCount()

console.log(cnt1.getCount());
console.log(cnt2.getCount());