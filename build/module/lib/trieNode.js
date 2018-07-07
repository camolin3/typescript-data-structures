export class TrieNode {
    constructor(char, value) {
        this.char = char;
        this.value = value;
        this.children = {};
    }
    getChild(char) {
        return this.children[char] || null;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3RyaWVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07SUFLSixZQUFZLElBQVksRUFBRSxLQUFRO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBWSxFQUFFLFFBQVcsSUFBSTtRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sR0FBRyxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGIn0=