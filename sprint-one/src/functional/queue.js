var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add string back of que
    var i = Object.keys(storage).length;
    storage[i] = value;
  };

  someInstance.dequeue = function() {
    //remove and return string at the front of queue
    //get first
    var deleted = storage[0];
    delete storage[0];
    var updatedStorage = {};
    for (var key in storage) {
      updatedStorage[key - 1] = storage[key];
    }
    storage = updatedStorage;
    return deleted;
  };

  someInstance.size = function() {
    //return number of items in queue
    return Object.keys(storage).length;
  };

  return someInstance;
};
