//functional shared uses a container to hold all the methods for the instances
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(string) {
  //add to back of queue
  var i = Object.keys(this.storage).length;
  this.storage[i] = string;
};
queueMethods.dequeue = function() {
  //store front of queue
  var deletedValue = this.storage[0];
  //delete front of queue
  delete this.storage[0];
  //move queue up one
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  //return the deletedvalue
  return deletedValue;
};
queueMethods.size = function() {
  //return size of the storage
  return Object.keys(this.storage).length;
};