export class LinkedList<T> {
  private _head: Node<T> | undefined;

  constructor(value?: Node<T> | Array<Node<T>>) {
    if (Array.isArray(value)) {
      this._head = value[0];

      if (value.length > 1) {
        let cursor = this._head;
        for (let i = 1; i < value.length; i++) {
          cursor.setNext(value[i]);
          cursor = value[i];
        }
      }
    } else {
      this._head = value;
    }
  }

  head() {
    return this._head;
  }

  size() {
    if (!this._head) {
      return 0;
    }

    let size = 1;
    let cursor = this._head;
    while (cursor.next()) {
      size++;
      cursor = cursor.next() as Node<T>;
    }

    return size;
  }

  prepend(value: Node<T>) {
    if (!this._head) {
      this._head = value;
      return;
    }

    value.setNext(this._head);
    this._head = value;
  }

  append(value: Node<T>) {
    if (!this._head) {
      this._head = value;
      return;
    }

    let currentNode = this._head as Node<T>;
    while (currentNode.next()) {
      currentNode = currentNode.next() as Node<T>;
    }

    currentNode.setNext(value);
  }

  at(index: number): Node<T> | undefined {
    if (index < 0) {
      throw new Error("Index must be >= 0");
    }

    if (!this._head) {
      return undefined;
    }

    let current = 0;
    let cursor = this._head;

    while (current < index) {
      if (!cursor.next()) {
        return undefined;
      }

      current++;
      cursor = cursor.next() as Node<T>;
    }

    return cursor;
  }

  reverse() {
    if (!this._head || !this._head!.next()) {
      return;
    }

    let first = this._head!;
    let second = first.next()!;
    let i = 0;

    while (second) {
      let temp = second!.next()!;

      second!.setNext(first);
      first = second;
      second = temp;

      i++;
      if (i > 1000) {
        return;
      }
    }

    this._head.setNext(undefined);
    this._head = first;
  }

  toArray() {
    if (!this._head) {
      return [];
    }

    let values = [];

    let size = 1;
    let cursor = this._head!;
    while (cursor.next()) {
      values.push(cursor.value());
      size++;
      cursor = cursor.next() as Node<T>;
    }
    values.push(cursor.value());
    return values;
  }
}

export class Node<T> {
  private _next: Node<T> | undefined;

  constructor(private _value: T) {}

  value() {
    return this._value;
  }

  next() {
    return this._next;
  }

  setNext(node: Node<T> | undefined) {
    this._next = node;
  }
}
