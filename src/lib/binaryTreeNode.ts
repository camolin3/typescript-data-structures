
export class BinaryTreeNode<T> {
  public value: T;
  public parent?: BinaryTreeNode<T>;
  private _left?: BinaryTreeNode<T>;
  private _right?: BinaryTreeNode<T>;

  constructor(value?: T) {
    this.value = value;
    this._left = null;
    this._right = null;
    this.parent = null;
  }

  get left() {
    return this._left;
  }

  set left(node: BinaryTreeNode<T>) {
    if (this._left) {
      this._left.parent = null;
    }
    this._left = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this._right;
  }

  set right(node: BinaryTreeNode<T>) {
    if (this._right) {
      this._right.parent = null;
    }
    this._right = node;
    if (node) {
      node.parent = this;
    }
  }

  public toString() {
    return this.toArrayString().join('');
  }

  protected toArrayString(prefix = '', isTail = true, sb = []) {
    if (this._right) {
      this._right.toArrayString(prefix + (isTail ? '│   ' : '    '), false, sb);
    }
    sb.push(prefix);
    sb.push(isTail ? '└── ' : '┌── ');
    sb.push(String(this.value) + '\n');
    if (this._left) {
      this._left.toArrayString(prefix + (isTail ? '    ' : '│   '), true, sb);
    }
    return sb;
  }
}
