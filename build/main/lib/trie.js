"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trieNode_1 = require("./trieNode");
class Trie {
    constructor() {
        this.root = new trieNode_1.TrieNode('', null);
    }
    /**
     * Adds a word to the trie.
     * ```markdown
     * Time complexity:   O(s)
     * Space complexity:  O(s)
     * ```
     * @param word String to add to the trie.
     * @param value Value associated to the word. Defaults to `null`.
     */
    add(word, value = null) {
        let node = this.root;
        let i = 0;
        for (; i < word.length; i++) {
            const char = word[i];
            if (!node.has(char)) {
                break;
            }
            node = node.getChild(char);
        }
        if (i !== word.length) {
            for (const char of word.substring(i)) {
                node.insert(char);
                node = node.getChild(char);
            }
        }
        node.value = value;
        return this;
    }
    /**
     * A list of all possible characters using as a base the passed prefix.
     * ```markdown
     * Time complexity:   O(p + c)
     * Space complexity:  O(c)
     * ```
     * @param prefix The current characters already written.
     * @returns A list with characters.
     */
    suggestChars(prefix) {
        const node = this.getLastNode(prefix);
        return node ? node.allChildrenChars() : null;
    }
    /**
     * Decides if a word is in the trie.
     * ```markdown
     * Time complexity:   O(w)
     * Space complexity:  O(1)
     * ```
     * @param word Substring to look for.
     */
    isWordIncluded(word) {
        return this.getLastNode(word) !== null;
    }
    /**
     * Returns the saved value associated with a word.
     * ```markdown
     * Time complexity:   O(w)
     * Space complexity:  O(1)
     * ```
     * @param word Key.
     */
    find(word) {
        const node = this.getLastNode(word);
        return node ? node.value : null;
    }
    /**
     * Returns a representation of the trie.
     * ```markdown
     * Time complexity:   O(n)
     * Space complexity:  O(n)
     * ```
     */
    toString() {
        return this.root.toString();
    }
    getLastNode(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.has(char)) {
                return null;
            }
            node = node.getChild(char);
        }
        return node;
    }
}
exports.Trie = Trie;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdHJpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFzQztBQUV0QztJQUFBO1FBQ1MsU0FBSSxHQUFnQixJQUFJLG1CQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBNEZwRCxDQUFDO0lBMUZDOzs7Ozs7OztPQVFHO0lBQ0ksR0FBRyxDQUFDLElBQVksRUFBRSxRQUFXLElBQUk7UUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsTUFBTTthQUNQO1lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDRjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksWUFBWSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLGNBQWMsQ0FBQyxJQUFZO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxJQUFJLENBQUMsSUFBWTtRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVTLFdBQVcsQ0FBQyxJQUFZO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBN0ZELG9CQTZGQyJ9