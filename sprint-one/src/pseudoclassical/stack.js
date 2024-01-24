var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(string) {
  //add string to back
  this.storage[this.size()] = string;
};
Stack.prototype.pop = function() {
  //remove and return the last value
  var removedValue = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return removedValue;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

