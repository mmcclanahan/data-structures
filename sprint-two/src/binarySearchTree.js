var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  if (typeof value === 'number') {
    bst.value = value;
    bst.left = undefined;
    bst.right = undefined;

    return bst;
  }
};

var bstMethods = {};
//insert input value,
bstMethods.insert = function(val) {
  if (val > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    };
  } else if (val < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    };
  };
};
//contains
bstMethods.contains = function(val) {
  if (this.value === val) {
    return true;
  }
  if (val > this.value) {
    if (this.right) {
      return this.right.contains(val);
    } else {
      return false
    }
  }
  if (val < this.value) {
    if (this.left) {
      return this.left.contains(val);
    } else {
      return false;
    }
  }
};
//depthFirstLog accepts callback executes on every value in tree
bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
