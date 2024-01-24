var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  //add to back of line
  var i = this.size();
  this.storage[i] = string;
};
queueMethods.dequeue = function() {
  //store first in line
  var deletedValue = this.storage[0];
  //delete first in line
  delete this.storage[0];
  //move all properties in storage up by decrementing the key by 1
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.size() - 1];
  //return first inline
  return deletedValue;
};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

