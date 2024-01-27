
var LinkedList = function() {
  var list = {};
  list.head = null; //linkedListNode instance
  list.tail = null; //linkedListNode instance
  //list.array = [];

  list.addToTail = function(value) {
    //check head for null
    //debugger;
    var addToData = function(obj) {
      if (typeof obj.next === 'object' && obj.next !== null) {
        addToData(obj.next);
      } else {
        obj.next = list.tail; //
      };
    };
    if (list.head === null) {
      var firstItem = Node(value);
      list.head = firstItem;
      list.tail = firstItem;
    }  else {
      //first put tail into head
      list.tail = Node(value);
      addToData(list.head);
      //re
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      //set a variable = value
      var deletedNodeValue = list.head.value;
      //set list.head = list.head.next
      list.head = list.head.next
      //return variable
      return deletedNodeValue;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    // check head for value
    // if true return
    // recursively check next.value
    var ifContains = function (obj, target) {
      if (obj.value === target) {
        return true;
      };
      if (obj.next === null) {
        return false;
      }
      //if (typeof obj.next === 'object') {
      return ifContains(obj.next, target);
      //};
    };
    return ifContains(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//list = {head: null, tail: null, node{value1: value, next: null}} null until add another tail
//addtoTail would put node in end of list
  //if its
//add another to tail makes it tail node
//node = {value: 1, next: null}
//head: node, node2, node3, tail: node