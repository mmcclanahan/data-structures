class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue(string) {
    //add to back
    this.storage[this.size()] = string;
  }
  dequeue() {
    //return front remove it and shift all keys - 1
    var removedValue = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.size() - 1];
    return removedValue;
  }
  size() {
    return Object.keys(this.storage).length;
  }

}
