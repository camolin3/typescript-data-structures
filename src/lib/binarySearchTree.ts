import { BinaryTreeNode } from './binaryTreeNode';

export class BinarySearchTree<T> {
  public root: BinaryTreeNode<T>;

  constructor() {
    this.root = null;
  }

  public insert(value: T) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
      return this;
    }
    let node = this.root;
    while (node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new BinaryTreeNode(value);
          return this;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new BinaryTreeNode(value);
          return this;
        }
        node = node.right;
      }
    }
    return this;
  }

  public find(value: T) {
    let node = this.root;
    do {
      if (node && node.value === value) {
        return node;
      }
      node = (value < node.value) ? node.left : node.right;
    } while (node);
    return null;
  }

  public remove(valueToRemove: T) {
    const node = this.find(valueToRemove);
    if (!node) {
      return;
    }

    if (node.left && node.right) {
      const { value } = this.findMin(node.right);
      this.remove(value);
      node.value = value;
      return;
    } else
    if (node.left) {
      this.replaceNodeInParent(node, node.left);
      return;
    } else
    if (node.right) {
      this.replaceNodeInParent(node, node.right);
      return;
    } else {
      this.replaceNodeInParent(node);
      return;
    }

  }

  public findMin(node: BinaryTreeNode<T>) {
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  public replaceNodeInParent(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T> = null) {
    if (node.parent) {
      if (node === node.parent.left) {
        node.parent.left = newNode;
      } else {
        node.parent.right = newNode;
      }
    } else {
      this.root = newNode;
    }
    if (newNode) {
      newNode.parent = node.parent;
    }
  }
}
