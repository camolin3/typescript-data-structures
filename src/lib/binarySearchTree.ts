import { BinaryTreeNode } from './binaryTreeNode';

export class BinarySearchTree<T> {
  public root: BinaryTreeNode<T>;

  /**
   * Creates a new binary search tree.
   * @param it Optional. If passed, it will insert every element.
   */
  constructor(it?: Iterable<T>) {
    this.root = null;

    if (!it) {
      return this;
    }
    for (const value of it) {
      this.insert(value);
    }
  }

  /**
   * Adds a node where it belongs.
   * ```markdown
   * Time complexity:   O(log(n))
   * Space complexity:  O(1)
   * ```
   * @param value The value of the node.
   */
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
          break;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new BinaryTreeNode(value);
          break;
        }
        node = node.right;
      }
    }
    return this;
  }

  /**
   * Finds the first node with the passed value.
   * @param value The value of the node to return.
   * ```markdown
   * Time complexity:   O(log(n))
   * Space complexity:  O(1)
   * ```
   */
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

  /**
   * Remove from the tree the first node with the passed value.
   * ```markdown
   * Time complexity:   O(log(n))
   * Space complexity:  O(1)
   * ```
   * @param valueToRemove The value of the node to remove.
   */
  public remove(valueToRemove: T) {
    const node = this.find(valueToRemove);
    if (!node) {
      return;
    }

    if (node.left && node.right) {
      const { value } = this.findMin(node.right);
      this.remove(value);
      node.value = value;
    } else {
      const newNode = (node.left) ? node.left :
        (node.right) ? node.right : null;
      this.replaceNodeInParent(node, newNode);
    }
  }

  public [Symbol.iterator]() {
    return this.traverseInOrder(this.root);
  }

  /**
   * Returns a string representation of the tree.
   * ```markdown
   * Time complexity:   O(n)
   * Space complexity:  O(1)
   * ```
   */
  public toString() {
    return this.root.toString();
  }

  protected findMin(node: BinaryTreeNode<T>) {
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  protected replaceNodeInParent(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>) {
    if (node.parent) {
      if (node === node.parent.left) {
        node.parent.left = newNode;
      } else {
        node.parent.right = newNode;
      }
    } else {
      this.root = newNode;
    }
  }

  protected * traverseInOrder(node: BinaryTreeNode<T>) {
    if (!node) {
      return;
    }
    yield * this.traverseInOrder(node.left);
    yield node.value;
    yield * this.traverseInOrder(node.right);
  }
}
