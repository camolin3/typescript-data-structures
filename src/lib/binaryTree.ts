export interface BTNode<T> {
  value: T,
  left: BTNode<T> | null;
  right: BTNode<T>|null;
}

export class BinaryTree<T> {
  public root: BTNode<T>;

  constructor() {
    this.root = null;
  }

  public insert(value: T) {
    if (!this.root) {
      this.root = { value, left: null, right: null };
      return this;
    }
    let it = this.root;
    if (value < this.root.value) {
      this.root.left = { value, left: null, right: null };
    } else {
      this.root.right = { value, left: null, right: null };
    }
    return this;
  }

  private insertRec(root: BTNode<T>, value: T) {
    if (!root) {
      root = { value, left: null, right: null };
    } else
    if (value < root.value) {
      root.left = this.insertRec(root.left, value);
    } else {
      root.right = this.insertRec(root.right, value);
    }
    return root;
  }
}
