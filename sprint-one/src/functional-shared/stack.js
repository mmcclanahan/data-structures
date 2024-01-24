var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  //put in last element
  var i = Object.keys(this.storage).length;
  this.storage[i] = string;
};
stackMethods.pop = function() {
  //take off last element and return it
  var lastIndex = Object.keys(this.storage).length - 1;
  var deletedValue = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return deletedValue;
};
stackMethods.size = function() {
  //return size
  var size = Object.keys(this.storage).length;
  return size;
};
//put storage inside the instance object used this to refer to instance

