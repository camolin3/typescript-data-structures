export interface LinkedNode<T> {
  value: T;
  next?: LinkedNode<T>;
}

export class LinkedList {
  public head: LinkedNode<any>;
  public tail: LinkedNode<any>;

  /**
   * Creates a new linked list.
   * @param it Optional. If passed, it will append every element.
   */
  constructor(it?: Iterable<any>) {
    this.head = null;
    this.tail = null;

    if (!it) {
      return this;
    }
    const iterator = it[Symbol.iterator]();
    let { value, done } = iterator.next();
    while (!done) {
      this.append(value);
      const next = iterator.next()
      value = next.value;
      done = next.done;
    }
  }

  /**
   * Adds a node to the begining of the list.
   * ```markdown
   * Time complexity:   O(1)
   * Space complexity:  O(1)
   * ```
   * @param value The value of the node.
   */
  public prepend(value: any) {
    const next = this.head;
    if (!this.head) {
      this.head = { value, next };
      this.tail = this.head;
    } else {
      this.head = { value, next };
    }
    return this;
  }

  /**
   * Adds a node at the end of list.
   * ```markdown
   * Time complexity:   O(1)
   * Space complexity:  O(1)
   * ```
   * @param value The value of the node.
   */
  public append(value: any) {
    const next = null;
    if (!this.tail) {
      this.tail = { value, next };
      this.head = this.tail;
    } else {
      const newTail = { value, next };
      this.tail.next = newTail;
      this.tail = newTail;
    }
    return this;
  }

  /**
   * Removes from the list the first node with the passed value.
   * ```markdown
   * Time complexity:   O(n)
   * Space complexity:  O(1)
   * ```
   * @param value The value of the node to remove.
   */
  public remove(value: any) {
    // handle head case
    if (this.head && this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return this;
    }
    // general case
    let currentNode = this.head.next;
    while (currentNode.next) {
      const inspectedNode = currentNode.next;
      if (inspectedNode.value === value) {
        currentNode.next = inspectedNode.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        break;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  /**
   * Removes the first node of the list.
   * ```markdown
   * Time complexity:   O(1)
   * Space complexity:  O(1)
   * ```
   */
  public removeHead() {
    if (this.head) {
      return this.remove(this.head.value);
    }
    return this;
  }

  /**
   * Removes the last node of the list.
   * ```markdown
   * Time complexity:   O(n)
   * Space complexity:  O(1)
   * ```
   */
  public removeTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      const inspectedNode = currentNode.next;
      if (!inspectedNode.next) {
        currentNode.next = null;
        this.tail = currentNode;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  /**
   * Finds the first node with the passed value.
   * @param value The value of the node to return.
   * ```markdown
   * Time complexity:   O(n)
   * Space complexity:  O(1)
   * ```
   */
  public find(value: any) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  public [Symbol.iterator]() {
    return {
      _current: this.head,
      next() {
        if (this._current) {
          const r = { value: this._current.value, done: false };
          this._current = this._current.next;
          return r;
        }
        return { value: null, done: true };
      },
    };
  }

  /**
   * Returns a string representation of the list.
   * ```markdown
   * Time complexity:   O(n)
   * Space complexity:  O(n)
   * ```
   */
  public toString() {
    return [...this].join(' -> ');
  }
}
