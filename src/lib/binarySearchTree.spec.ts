// tslint:disable:no-expression-statement
import { test } from 'ava';
import { BinarySearchTree } from './binarySearchTree';
import { BinaryTreeNode } from './binaryTreeNode';

test('exists', t => {
  t.truthy(BinarySearchTree);
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
