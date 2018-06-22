// tslint:disable:no-expression-statement
import { test } from 'ava';
import { BinaryTreeNode } from './binaryTreeNode';

test('exists', t => {
  t.truthy(BinaryTreeNode);
});

test('can set right', t => {
  const n1 = new BinaryTreeNode(1);
  const n2 = new BinaryTreeNode(2);
  n1.left = n2;
  t.is(n1.left, n2);
  t.is(n2.parent, n1);
});

test('can set a null right', t => {
  const n1 = new BinaryTreeNode(1);
  n1.left = null;
  t.is(n1.left, null);
});

test('on set, removes previous left', t => {
  const n1 = new BinaryTreeNode(1);
  const n2 = new BinaryTreeNode(2);
  const n3 = new BinaryTreeNode(3);
  n1.left = n2;
  n1.left = n3;

  t.is(n1.left, n3);
  t.is(n2.parent, null);
  t.is(n3.parent, n1);
});

test('can set left', t => {
  const n1 = new BinaryTreeNode(1);
  const n2 = new BinaryTreeNode(2);
  n1.right = n2;
  t.is(n1.right, n2);
  t.is(n2.parent, n1);
});

test('on set, removes previous right', t => {
  const n1 = new BinaryTreeNode(1);
  const n2 = new BinaryTreeNode(2);
  const n3 = new BinaryTreeNode(3);
  n1.right = n2;
  n1.right = n3;

  t.is(n1.right, n3);
  t.is(n2.parent, null);
  t.is(n3.parent, n1);
});
