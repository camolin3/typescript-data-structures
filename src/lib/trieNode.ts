export class TrieNode<T> {
  public char: string;
  public value: T;
  private children: { [char: string]: TrieNode<T> };

  constructor(char: string, value: T) {
    this.char = char;
    this.value = value;
    this.children = {};
  }

  public getChild(char: string) {
    return this.children[char];
  }

  public insert(char: string, value: T = null) {
    this.children[char] = new TrieNode(char, value);
  }

  public has(char: string) {
    return char in this.children;
  }

  public allChildrenChars() {
    return Object.keys(this.children);
  }
}
