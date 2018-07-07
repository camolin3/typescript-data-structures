import { TrieNode } from "./trieNode";

export class Trie<T> {
  public root: TrieNode<T> = new TrieNode('', null);

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
  }

  public suggestChars(word: string) {
    let node = this.root;
    for (const char of word) {
      if (!node.has(char)) {
        return null;
      }
      node = node.getChild(char);
    }
    return node.allChildrenChars();
  }

  public isWordIncluded(word: string) {
    return this.suggestChars(word) !== null;
  }

  public find(word: string) {
    let node = this.root;
    for (const char of word) {
      if (!node.has(char)) {
        return null;
      }
      node = node.getChild(char);
    }
    return node.value;
  }
}
