class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  pop() {
    //remove last
    var removedValue = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return removedValue;
  }
  push(string) {
    this.storage[this.size()] = string;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}