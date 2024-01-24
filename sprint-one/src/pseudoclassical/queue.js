var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};
//because using new operator we can add to the Queue prototype object
Queue.prototype.enqueue = function(string) {
  //add to back of storage
  this.storage[this.size()] = string;
};
Queue.prototype.dequeue = function() {
  //remove first in storage return it and move all storage keys - 1
  var removedValue = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.size() - 1];
  return removedValue;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

