var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  return instance;
};
//use Object.create with the object from step2 to create instances of your class
//object.create makes an object that points to a prototype
var stackMethods = {};

stackMethods.pop = function() {
  //remove last element in storage
  var lastIndex = this.size() - 1;
  var removedValue = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return removedValue;
};
stackMethods.push = function(string) {
  //add to end of the storage
  var lastIndex = this.size();
  this.storage[lastIndex] = string;
};
stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
