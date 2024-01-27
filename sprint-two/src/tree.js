var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //inputs a value
  //outputs an object into newTree.children
  //create childObject = Tree(value);
  var childObject = Tree(value);
  //newTree.push(childObject);
  this.children.push(childObject);
};

treeMethods.contains = function(target) {
  //check papa value
  //debugger;
  var ifContains = function(obj, target) {
    if (obj.value === target) {
      return true;
    }
    if (obj.children.length > 0) {
      for (var i = 0; i < obj.children.length; i++) {
        if (ifContains(obj.children[i], target)) {
          return true;
        }
      }
    }
    return false;
  };
  return ifContains(this, target);
    //return true if true
  //if children.length > 0, iterate and call on array[i]
  //return false
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
