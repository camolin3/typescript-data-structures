export interface LinkedNode<T> {
    value: T;
    next?: LinkedNode<T>;
}
export declare class LinkedList {
    head: LinkedNode<any>;
    tail: LinkedNode<any>;
    /**
     * Creates a new linked list.
     * @param it Optional. If passed, it will append every element.
     */
    constructor(it?: Iterable<any>);
    /**
     * Adds a node to the begining of the list.
     * ```markdown
     * Time complexity:   O(1)
     * Space complexity:  O(1)
     * ```
     * @param value The value of the node.
     */
    prepend(value: any): this;
    /**
     * Adds a node at the end of list.
     * ```markdown
     * Time complexity:   O(1)
     * Space complexity:  O(1)
     * ```
     * @param value The value of the node.
     */
    append(value: any): this;
    /**
     * Removes from the list the first node with the passed value.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(1)
     * ```
     * @param value The value of the node to remove.
     */
    remove(value: any): this;
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
    find(value: any): LinkedNode<any>;
    [Symbol.iterator](): {
        _current: LinkedNode<any>;
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
