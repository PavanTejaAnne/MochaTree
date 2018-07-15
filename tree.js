'use strict';
class Tree {
  constructor() {
    this.root = null;
  }
  
  crawl(callback) {
    function walk(node) {
      callback(node);
      node.children.forEach(walk);
    }
    walk(this.root);
  }
  
  add(currData, parentData) {
    var newNode = {
      currData,
      children: []
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.crawl(function(node) {
      if (parentData === node.currData) {
        node.children.push(newNode);
      }
    });
  }
  
  remove(currData) {
    this.crawl(function(node) {
      node.children.some(function(childNode, index) {
        if (currData === childNode.currData) {
          return !!node.children.splice(index, 1);
        }
      });
    });
  }

  search(currData) {
    var found = false;

    this.crawl(function(node) {
      if (currData === node.currData) {
        found = true;
      }
    });

    return found;
  }

}

module.exports = {
  Tree
};