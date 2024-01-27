var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};
HashTable.prototype.limitIncrease = function() {
  debugger;
  var oldStorage = this._storage;
  var oldlimit = this._limit;
  this._limit *= 2;
  this._storage = LimitedArray(this._limit); // this._limit is still 8
  for (var i = 0; i < oldLimit; i ++) {
     this._storage.insert(oldStorage.get(i)[0], oldStorage.get(i)[1]);
  };
};
HashTable.prototype.insert = function(k, v) {
    if (this._limit - 1 === this._counter){
      this.limitIncrease();
    };
  var index = getIndexBelowMaxForKey(k, this._limit);
  var locatedArray = this._storage.get(index);
  if (Array.isArray(locatedArray) && locatedArray.length > 0) {
    for (var i = 0; i < locatedArray.length; i ++) {
      if (locatedArray[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        return;
      }
    }
  }
  //with the index, check storage if array exists there
  if (Array.isArray(locatedArray)) { //returns storage[index]
    // set (key, ._storage.get(0).push)
    this._storage.get(index).push([k, v]);
    this._counter ++;
  } else {
    this._storage.set(index, []) //storage[index] = value
    this._storage.get(index).push([k, v]);
    this._counter ++;
  }

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentArray = this._storage.get(index);
  for (var i = 0; i < currentArray.length; i ++) {
    if (currentArray[i][0] === k) {
      return currentArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //access the internal storage
  var arrayHolder = this._storage.get(index); // returns storage[index]
  var removalIndex = 0;
  for (var i = 0; i < arrayHolder.length; i++) {
    if (arrayHolder[i][0] === k) {
      removalIndex = i;
    }
  }
  var leftHalf = arrayHolder.slice(0, removalIndex);
  var rightHalf = arrayHolder.slice(removalIndex+1);
  var concatArray = leftHalf.concat(rightHalf);
  this._storage.set(index, concatArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */




