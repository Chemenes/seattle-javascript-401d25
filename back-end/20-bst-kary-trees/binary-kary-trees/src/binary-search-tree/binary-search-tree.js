'use strict';

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(lg n)
  // Space : O(lg n)
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    // 1 - do I have to go left?
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      //  can I move to the right branch?
      rootNode.right = nodeToInsert;
    } else {
      // Moving to the right branch
      this._insert(rootNode.right, nodeToInsert);
    }
  }


  // Time :  O(lg n)
  // Space :  O(lg n)
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }
}

