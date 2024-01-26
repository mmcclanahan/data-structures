var LinkedList = function() {
  var list = {};
  list.head = null; //linkedListNode instance
  list.tail = null; //linkedListNode instance
  //list.array = [];

  list.addToTail = function(value) {
    //check head for null
    //debugger;
    var addToData = function(obj) {
      if (obj.next === null) {
        obj.next = Node(value);
      } else {
        addToData(obj.next);
      }
    };
    if (list.head === null) {
      var firstItem = Node(value);
      list.head = firstItem;
      list.tail = firstItem;
    }  else {
      //first put tail into head
      addToData(list.head);
      //reassign tail
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      //set a variable = value
      var deletedNodeValue = list.head.value;
      //set list.head = list.head.next
      list.head = list.head.next;
      //return variable
      return deletedNodeValue;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    // iterate through the list for target
    var ifContains = function (obj, target) {
      if (obj.value === target) {
        return true;
      } else if (obj.next !== null) {
        return ifContains(obj.next, target);
      } else {
      return false;}
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

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
