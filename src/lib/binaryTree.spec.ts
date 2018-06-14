// tslint:disable:no-expression-statement
import { test } from 'ava';
import { BinaryTree } from './binaryTree';

test('exists', t => {
  t.truthy(BinaryTree);
});

test('can insert', t => {
  const bst = new BinaryTree()
    .insert(1);

  t.deepEqual(bst.root, { value: 1, left: null, right: null });
});

test('can insert two elements', t => {
  const bst = new BinaryTree()
    .insert(1)
    .insert(2);

  const expectedTree = {
    left: null,
    right: { value: 2, left: null, right: null },
    value: 1,
  };
  t.deepEqual(bst.root, expectedTree);
});

test('can insert three elements', t => {
  const bst = new BinaryTree()
    .insert(1)
    .insert(2)
    .insert(3);

  const expectedTree = {
    left: null,
    right: {
      left: null,
      right: { value: 3, left: null, right: null },
      value: 2,
    },
    value: 1,
  };
  t.deepEqual(bst.root, expectedTree);
});
