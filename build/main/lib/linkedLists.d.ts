export interface LinkedNode<T> {
    value: T;
    next?: LinkedNode<T>;
}
export declare class LinkedList<T> {
    head: LinkedNode<T>;
    tail: LinkedNode<T>;
    /**
     * Creates a new linked list.
     * @param it Optional. If passed, it will append every element.
     */
    constructor(it?: Iterable<T>);
    /**
     * Adds a node to the begining of the list.
     * ```markdown
     * Time complexity:   O(1)
     * Space complexity:  O(1)
     * ```
     * @param value The value of the node.
     */
    prepend(value: T): this;
    /**
     * Adds a node at the end of list.
     * ```markdown
     * Time complexity:   O(1)
     * Space complexity:  O(1)
     * ```
     * @param value The value of the node.
     */
    append(value: T): this;
    /**
     * Removes from the list the first node with the passed value.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(1)
     * ```
     * @param value The value of the node to remove.
     */
    remove(value: T): this;
    /**
     * Removes the first node of the list.
     * ```markdown
     * Time complexity:   O(1)
     * Space complexity:  O(1)
     * ```
     */
    removeHead(): this;
    /**
     * Removes the last node of the list.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(1)
     * ```
     */
    removeTail(): this;
    /**
     * Finds the first node with the passed value.
     * @param value The value of the node to return.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(1)
     * ```
     */
    find(value: T): LinkedNode<T>;
    [Symbol.iterator](): {
        _current: LinkedNode<T>;
        next(): {
            value: any;
            done: boolean;
        };
    };
    /**
     * Returns a string representation of the list.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(n)
     * ```
     */
    toString(): string;
}
