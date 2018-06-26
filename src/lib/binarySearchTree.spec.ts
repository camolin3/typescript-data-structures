// tslint:disable:no-expression-statement
import { test } from 'ava';
import dedent from 'ts-dedent';
import { BinarySearchTree } from './binarySearchTree';
import { BinaryTreeNode } from './binaryTreeNode';

test('exists', t => {
  t.truthy(BinarySearchTree);
});

test('accepts an iterable as parameter', t => {
  const bst = new BinarySearchTree([2, 3, 1]);
  t.is(bst.root.value, 2);
  t.is(bst.root.left.value, 1);
  t.is(bst.root.right.value, 3);
});


test('can insert', t => {
  const bst = new BinarySearchTree()
    .insert(1);

  const expectedTree = new BinaryTreeNode(1);
  t.deepEqual(bst.root, expectedTree);
});

test('can insert two elements', t => {
  const bst = new BinarySearchTree()
    .insert(1)
    .insert(2);

  const expectedTree = new BinaryTreeNode(1);
  expectedTree.right = new BinaryTreeNode(2);
  t.deepEqual(bst.root, expectedTree);
});

test('can insert more elements', t => {
  const bst = new BinarySearchTree()
    .insert(1)
    .insert(2)
    .insert(3);

  const expectedTree = new BinaryTreeNode(1);
  expectedTree.right = new BinaryTreeNode(2);
  expectedTree.right.right = new BinaryTreeNode(3);
  t.deepEqual(bst.root, expectedTree);

  bst
    .insert(-1)
    .insert(0)
    .insert(-2);

  expectedTree.left = new BinaryTreeNode(-1);
  expectedTree.left.left = new BinaryTreeNode(-2);
  expectedTree.left.right = new BinaryTreeNode(0);
  t.deepEqual(bst.root, expectedTree);
});

test('can find', t => {
  const bst = new BinarySearchTree()
    .insert(3)
    .insert(0)
    .insert(1)
    .insert(2);

  const node = bst.find(1);
  const expectedNode = bst.root.left.right;
  t.deepEqual(node,  expectedNode);
});

test('can remove lonely root', t => {
  const bst = new BinarySearchTree()
    .insert(1);

  bst.remove(1);
  t.deepEqual(bst.root, null);
});

test('can remove leaf', t => {
  const bst = new BinarySearchTree().insert(2).insert(1);

  bst.remove(1);
  const expectedTree = new BinaryTreeNode(2);
  t.deepEqual(bst.root, expectedTree);
});

test('can remove full root', t => {
  const bst = new BinarySearchTree().insert(2).insert(1).insert(3);

  bst.remove(2);
  const expectedTree = new BinaryTreeNode(3);
  expectedTree.left = new BinaryTreeNode(1);
  t.is(bst.root.right, null);
  t.deepEqual(bst.root, expectedTree);
});

test('can be converted to an array', t => {
  const bst = new BinarySearchTree()
    .insert(3).insert(1).insert(2).insert(5).insert(4);

  t.deepEqual([...bst], [1, 2, 3, 4, 5]);
});

test('can be printed', t => {
  const bst = new BinarySearchTree()
    .insert(3).insert(1).insert(2).insert(5).insert(4);

  const expectedStr = dedent`
  │   ┌── 5
  │   │   └── 4
  └── 3
      │   ┌── 2
      └── 1
  `;
  t.is(bst.toString(), expectedStr + '\n');
});
