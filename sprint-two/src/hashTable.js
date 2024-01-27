

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //call the hash on the key
  // iterate through get(index) if get(index)[i][0] == k then get(index)[i][1] = v
  var index = getIndexBelowMaxForKey(k, this._limit);
  var locatedArray = this._storage.get(index);
  if (Array.isArray(locatedArray) && locatedArray.length > 0) {
    for (var i = 0; i < this._storage.get(index).length; i ++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        return;
      }
    }
  }
  //with the index, check storage if array exists there
  if (Array.isArray(locatedArray)) { //returns storage[index]
    // set (key, ._storage.get(0).push)
    this._storage.get(index).push([k, v]);
  } else {
    this._storage.set(index, []) //storage[index] = value
    this._storage.get(index).push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


