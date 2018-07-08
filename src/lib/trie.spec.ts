import { test } from 'ava';
import dedent from 'ts-dedent';
import { Trie } from './trie';

test('exists', t => {
  t.truthy(Trie);
});

test('contains the empty string', t => {
  const trie = new Trie();

  t.is(trie.root.char, '');
});

test('can add', t => {
  const trie = new Trie();
  trie.add('bye');

  t.truthy(trie.root.getChild('b'));
  t.truthy(trie.root.getChild('b').getChild('y'));
  t.truthy(trie.root.getChild('b').getChild('y').getChild('e'));
});

test('can add with value', t => {
  const trie = new Trie<number>();
  trie.add('bye', 3);

  t.is(trie.root.getChild('b').value, null);
  t.is(trie.root.getChild('b').getChild('y').value, null);
  t.is(trie.root.getChild('b').getChild('y').getChild('e').value, 3);
});

test('can add multiple words', t => {
  const trie = new Trie();
  trie.add('bye');
  trie.add('byte');

  const byNode = trie.root.getChild('b').getChild('y');
  t.truthy(byNode.getChild('e'));
  t.truthy(byNode.getChild('t').getChild('e'));
});

test('can suggest next chars', t => {
  const trie = new Trie();
  trie.add('bye');
  trie.add('byte');
  trie.add('by');
  trie.add('bus');

  t.deepEqual(trie.suggestChars(''), ['b']);
  t.deepEqual(trie.suggestChars('b'), ['y', 'u']);
  t.deepEqual(trie.suggestChars('by'), ['e', 't']);
  t.deepEqual(trie.suggestChars('bye'), []);
  t.deepEqual(trie.suggestChars('bio'), null);
});

test('can determine if a word is in the tree', t => {
  const trie = new Trie();
  trie.add('bye');
  trie.add('byte');
  trie.add('by');
  trie.add('bus');

  t.false(trie.isWordIncluded('hello'));
  t.true(trie.isWordIncluded('b'));
  t.true(trie.isWordIncluded('bye'));
  t.false(trie.isWordIncluded('bypass'));
});

test('can find', t => {
  const trie = new Trie<number>();
  trie.add('bye', 3);
  trie.add('byte', 4);

  t.is(trie.find('bye'), 3);
  t.is(trie.find('byte'), 4);
  t.is(trie.find('b'), null);
  t.is(trie.find('bbb'), null);
});

test('can find is always falsy if no value is set', t => {
  const trie = new Trie();
  trie.add('bye');
  trie.add('byte');

  t.falsy(trie.find('bye'));
  t.falsy(trie.find('byte'));
  t.falsy(trie.find('b'));
  t.falsy(trie.find('bbb'));
});

test('has to string', t => {
  const trie = new Trie<boolean>();
  trie.add('hi', true);
  trie.add('he', true);
  trie.add('her', true);

  t.is(trie.toString(), dedent`

    h
    hi
    he
    her`
  );
});
