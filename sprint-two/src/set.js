var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me = []
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //call contains
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  //iterate through
  for (var i = 0; i < this._storage.length; i ++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  //iterate and remove
  if (this.contains(item)) {
    var index = 0;
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === item) {
        index = i;
      }
    }
    console.log(index);
    var firstHalf = this._storage.slice(0, index);
    var secondHalf = this._storage.slice(index + 1);
    this._storage = firstHalf.concat(secondHalf);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
