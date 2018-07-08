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
        if (this.has(char)) {
            throw new Error(`Child "${char}" already exists.`);
        }
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
        let str = `${prefix}:${this.value}`;
        for (const node of Object.values(this.children)) {
            str += '\n' + node.toString(prefix);
        }
        return str;
    }
}
exports.TrieNode = TrieNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3RyaWVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFLRSxZQUFZLElBQVksRUFBRSxLQUFRO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFZLEVBQUUsUUFBVyxJQUFJO1FBQ3pDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDekIsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0MsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUExQ0QsNEJBMENDIn0=