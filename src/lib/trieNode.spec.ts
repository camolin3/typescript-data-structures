import { test } from 'ava';
import { TrieNode } from './trieNode';

test('exists', t => {
  t.truthy(TrieNode);
});

test('saves it key and value', t => {
  const node = new TrieNode('a', 'value');

  t.is(node.char, 'a');
  t.is(node.value, 'value');
});

test('throws when key is not one char or empty string', t => {
  t.throws(() => new TrieNode('alpha', 'value'));
  t.notThrows(() => new TrieNode('', 'value'));
});

test('has child', t => {
  const node = new TrieNode('a', 'value');
  node.insert('l');

  t.true(node.has('l'));
  t.false(node.has('p'));
});

test('insert and get child', t => {
  const node = new TrieNode('a', 'value');
  node.insert('l');
  node.insert('b');

  t.is(node.getChild('l').char, 'l');
  t.is(node.getChild('b').char, 'b');
  t.falsy(node.getChild('p'));
});

test('can get all children chars', t => {
  const node = new TrieNode('a', 'value');

  t.deepEqual(node.allChildrenChars(), []);

  node.insert('l');
  node.insert('b');

  t.deepEqual(node.allChildrenChars(), ['l', 'b']);
});
