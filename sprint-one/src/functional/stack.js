var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //add a value to top of stack
    //stack it
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    //remove and return string on top of stack
    //take off last number
    var topIndex = Object.keys(storage).length - 1;
    var deletedValue = storage[topIndex];
    delete storage[topIndex];
    return deletedValue;
  };

  someInstance.size = function() {
    //return number of items in the stack
    return Object.keys(storage).length;
  };

  return someInstance;
};
