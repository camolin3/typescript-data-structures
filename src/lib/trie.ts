import { TrieNode } from "./trieNode";

export class Trie<T> {
  public root: TrieNode<T> = new TrieNode('', null);

  /**
   * Adds a word to the trie.
   * ```markdown
   * Time complexity:   O(s)
   * Space complexity:  O(s)
   * ```
   * @param word String to add to the trie.
   * @param value Value associated to the word. Defaults to `null`.
   */
  public add(word: string, value: T = null) {
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
  public suggestChars(prefix: string) {
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
  public isWordIncluded(word: string) {
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
  public find(word: string) {
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
  public toString() {
    return this.root.toString();
  }

  protected getLastNode(word: string) {
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
