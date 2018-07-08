"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrieNode {
    constructor(char, value) {
        if (char.length > 1) {
            throw new Error(`Expected one character, received "${char}"`);
        }
        this.char = char;
        this.value = value;
        this.children = {};
    }
    getChild(char) {
        return this.children[char];
    }
    insert(char, value = null) {
        this.children[char] = new TrieNode(char, value);
    }
    has(char) {
        return char in this.children;
    }
    allChildrenChars() {
        return Object.keys(this.children);
    }
    toString(prefix = '') {
        prefix += this.char;
        let str = prefix;
        for (const node of Object.values(this.children)) {
            str += '\n' + node.toString(prefix);
        }
        return str;
    }
}
exports.TrieNode = TrieNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3RyaWVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFLRSxZQUFZLElBQVksRUFBRSxLQUFRO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFZLEVBQUUsUUFBVyxJQUFJO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxHQUFHLENBQUMsSUFBWTtRQUNyQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFO1FBQ3pCLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9DLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBdENELDRCQXNDQyJ9