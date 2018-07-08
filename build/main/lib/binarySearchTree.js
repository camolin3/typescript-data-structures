"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTreeNode_1 = require("./binaryTreeNode");
class BinarySearchTree {
    /**
     * Creates a new binary search tree.
     * @param it Optional. If passed, it will insert every element.
     */
    constructor(it) {
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
    insert(value) {
        if (!this.root) {
            this.root = new binaryTreeNode_1.BinaryTreeNode(value);
            return this;
        }
        let node = this.root;
        while (node) {
            if (value < node.value) {
                if (!node.left) {
                    node.left = new binaryTreeNode_1.BinaryTreeNode(value);
                    break;
                }
                node = node.left;
            }
            else {
                if (!node.right) {
                    node.right = new binaryTreeNode_1.BinaryTreeNode(value);
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
    find(value) {
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
    remove(valueToRemove) {
        const node = this.find(valueToRemove);
        if (!node) {
            return;
        }
        if (node.left && node.right) {
            const { value } = this.findMin(node.right);
            this.remove(value);
            node.value = value;
        }
        else {
            const newNode = (node.left) ? node.left :
                (node.right) ? node.right : null;
            this.replaceNodeInParent(node, newNode);
        }
    }
    [Symbol.iterator]() {
        return this.traverseInOrder(this.root);
    }
    /**
     * Returns a string representation of the tree.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(1)
     * ```
     */
    toString() {
        return this.root.toString();
    }
    findMin(node) {
        let currentNode = node;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
    replaceNodeInParent(node, newNode) {
        if (node.parent) {
            if (node === node.parent.left) {
                node.parent.left = newNode;
            }
            else {
                node.parent.right = newNode;
            }
        }
        else {
            this.root = newNode;
        }
    }
    *traverseInOrder(node) {
        if (!node) {
            return;
        }
        yield* this.traverseInOrder(node.left);
        yield node.value;
        yield* this.traverseInOrder(node.right);
    }
}
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluYXJ5U2VhcmNoVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYmluYXJ5U2VhcmNoVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFrRDtBQUVsRDtJQUdFOzs7T0FHRztJQUNILFlBQVksRUFBZ0I7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsS0FBUTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwrQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxFQUFFO1lBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU07aUJBQ1A7Z0JBQ0QsSUFBSSxHQUFH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