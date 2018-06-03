// tslint:disable:no-expression-statement
import { test } from 'ava';
import { LinkedList } from './linkedLists';

test('exists', t => {
  t.truthy(LinkedList);
});

test('has a head', t => {
  const l = new LinkedList();
  t.true('head' in l);
});

test('accepts an iterable as parameter', t => {
  const l = new LinkedList([1, 2, 3]);
  t.deepEqual(l.head.value, 1);
  t.deepEqual(l.tail, { value: 3 });
});

test('can prepend', t => {
  const l = new LinkedList();
  l.prepend('my first value');

  t.is(l.head.value, 'my first value');
  t.is(l.tail.value, 'my first value');
});

test('can prepend a second value', t => {
  const l = new LinkedList()
    .prepend('my first value')
    .prepend('my second value');

  const head = l.head;
  t.is(head.value, 'my second value');
  t.is(head.next.value, 'my first value');
});

test('can append', t => {
  const l = new LinkedList();
  l.append('my last value');

  t.is(l.tail.value, 'my last value');
  t.is(l.head.value, 'my last value');
});

test('can append a second value', t => {
  const l = new LinkedList()
    .append('my last value')
    .append('my finally last value');

  const { head, tail } = l;
  t.is(head.value, 'my last value');
  t.is(head.next.value, 'my finally last value');
  t.is(head.next, tail);
});

test('can remove', t => {
  const l = new LinkedList()
    .append('unique value')
    .remove('unique value');

  t.falsy(l.head);
  t.falsy(l.tail);
});

test('can remove medium node', t => {
  const l = new LinkedList()
    .append(1)
    .append(2)
    .append(3)
    .remove(2);

  t.is(l.head.value, 1);
  t.is(l.tail.value, 3);
});

test('can remove last node', t => {
  const l = new LinkedList()
    .append(1)
    .append(2)
    .append(3)
    .remove(3);

  t.is(l.head.value, 1);
  t.is(l.tail.value, 2);
});

test('can remove head', t => {
  const l = new LinkedList()
    .append('Eleanor')
    .append('Chidi')
    .append('Tahani');

  l.removeHead();

  t.is(l.head.value, 'Chidi');
});

test('can remove head of a single node', t => {
  const l = new LinkedList()
    .append('Eleanor');

  l.removeHead();

  t.falsy(l.tail);
  t.falsy(l.head);
});

test('can remove tail', t => {
  const l = new LinkedList()
    .append('Eleanor')
    .append('Chidi')
    .append('Tahani');

  l.removeTail();

  t.is(l.tail.value, 'Chidi');
});

test('can remove tail of a single node', t => {
  const l = new LinkedList()
    .append('Eleanor');

  l.removeTail();

  t.falsy(l.tail);
  t.falsy(l.head);
});

test('can find first', t => {
  const l = new LinkedList()
    .append('Eleanor')
    .append('Chidi')
    .append('Tahani')
    .append('Chidi');

  const node = l.find('Chidi');
  t.is(node.next.value, 'Tahani');
});

test('can be converted to an array', t => {
  const l = new LinkedList()
    .append(1)
    .append(2)
    .append(3);

  t.deepEqual([...l], [1, 2, 3]);
})
