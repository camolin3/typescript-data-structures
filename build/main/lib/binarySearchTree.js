"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTreeNode_1 = require("./binaryTreeNode");
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
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
                    return this;
                }
                node = node.left;
            }
            else {
                if (!node.right) {
                    node.right = new binaryTreeNode_1.BinaryTreeNode(value);
                    return this;
                }
                node = node.right;
            }
        }
        return this;
    }
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
    remove(valueToRemove) {
        const node = this.find(valueToRemove);
        if (!node) {
            return;
        }
        if (node.left && node.right) {
            const { value } = this.findMin(node.right);
            this.remove(value);
            node.value = value;
            return;
        }
        else if (node.left) {
            this.replaceNodeInParent(node, node.left);
            return;
        }
        else if (node.right) {
            this.replaceNodeInParent(node, node.right);
            return;
        }
        else {
            this.replaceNodeInParent(node);
            return;
        }
    }
    findMin(node) {
        let currentNode = node;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
    replaceNodeInParent(node, newNode = null) {
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
        if (newNode) {
            newNode.parent = node.parent;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluYXJ5U2VhcmNoVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYmluYXJ5U2VhcmNoVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFrRDtBQUVsRDtJQUdFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsT0FBTyxJQUFJLEVBQUU7WUFDWCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUNELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25CO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxJQUFJLENBQUMsS0FBUTtRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLEdBQUc7WUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdEQsUUFBUSxJQUFJLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBZ0I7UUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDM0IsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTztTQUNSO2FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsT0FBTztTQUNSO2FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsT0FBTztTQUNSO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTztTQUNSO0lBRUgsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUF1QjtRQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVNLG1CQUFtQixDQUFDLElBQXVCLEVBQUUsVUFBNkIsSUFBSTtRQUNuRixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQzthQUM3QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNyQjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztDQUNGO0FBMUZELDRDQTBGQyJ9