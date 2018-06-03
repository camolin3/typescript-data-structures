"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    /**
     * Creates a new linked list.
     * @param it Optional. If passed, it will append every element.
     */
    constructor(it) {
        this.head = null;
        this.tail = null;
        if (!it) {
            return this;
        }
        const iterator = it[Symbol.iterator]();
        let { value, done } = iterator.next();
        while (!done) {
            this.append(value);
            const next = iterator.next();
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
    prepend(value) {
        const next = this.head;
        if (!this.head) {
            this.head = { value, next };
            this.tail = this.head;
        }
        else {
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
    append(value) {
        const next = null;
        if (!this.tail) {
            this.tail = { value, next };
            this.head = this.tail;
        }
        else {
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
    remove(value) {
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
    removeHead() {
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
    removeTail() {
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
    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    [Symbol.iterator]() {
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
    toString() {
        return [...this].join(' -> ');
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkTGlzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2xpbmtlZExpc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7SUFJRTs7O09BR0c7SUFDSCxZQUFZLEVBQWtCO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksT0FBTyxDQUFDLEtBQVU7UUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FB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