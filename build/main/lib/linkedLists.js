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
        if (!this.head) {
            this.head = { value };
            this.tail = this.head;
        }
        else {
            const next = this.head;
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
        if (!this.tail) {
            this.tail = { value };
            this.head = this.tail;
        }
        else {
            const newTail = { value };
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
        while (currentNode.next) {
            const inspectedNode = currentNode.next;
            if (!inspectedNode.next) {
                currentNode.next = null;
                this.tail = currentNode;
                return this;
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
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkTGlzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2xpbmtlZExpc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7SUFJRTs7O09BR0c7SUFDSCxZQUFZLEVBQWtCO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksT0FBTyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FB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