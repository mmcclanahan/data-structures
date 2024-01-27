//graph has edge

// Instantiate a new graph
var Graph = function(node) {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nameNode = node
  if (!this[node]) {
    this[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //debugger;
  for (var key in this) {
    if (key === ('' + node)) {
      return true;
    };
  };
  return false;
};

// Removes a node key from the graph and removes it from other keys values
Graph.prototype.removeNode = function(node) {
  if (this[node]) {
    for (var key in this) {
      if (key !== node) {
      this.removeEdge(key, node);
      };
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (Array.isArray(this[fromNode]) && Array.isArray(this[toNode])) {
    for (var i = 0; i < this[fromNode].length; i ++) {
      if (this[fromNode][i] === toNode) {
        return true;
      }
    }
    return false;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if (Array.isArray(this.fromNode) && Array.isArray(this.toNode)) {
    //debugger;
    console.log(this[fromNode]);
    this[fromNode].push(toNode);
    console.log(this[fromNode]);
    this[toNode].push(fromNode);
  //}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //debugger;
  if (Array.isArray(this[fromNode]) && this[fromNode].length > 0) {
    var fromIndex = 0;
    for (var i = 0; i < this[fromNode].length; i ++){
      if (this[fromNode][i] === toNode) {
        fromIndex = i;
      };
    };
    //debugger;
    console.log(this[fromNode]);
    var from1 = this[fromNode].slice(0, fromIndex);
    var from2 = this[fromNode].slice((fromIndex+1));
    this[fromNode] = from1.concat(from2);
  }

  //from above, to below
  if (Array.isArray(this[toNode]) && this[toNode].length > 0) {
    var toIndex = 0;
    for (var j = 0; j < this[toNode].length; j ++) {
      if (this[toNode][j] === fromNode) {
        toIndex = j;
      };
    };
  var to1 = this[toNode].slice(0, toIndex);
  var to2 = this[toNode].slice((toIndex+1));
  this[toNode] = to1.concat(to2);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (Array.isArray(this[key])) {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// vertices aka nodes
  //edges aka arcs that connect them
//{node: node, edge: [object]}

//node 1  -- node 2
      //  -- node 3
