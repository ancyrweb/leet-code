import { Node } from "./linked-list";

export class Stack<T> {
  private _top: Node<T> | undefined;

  constructor(value?: T | Array<T>) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const node = new Node(value[i]);
        const temp = this._top;
        this._top = node;
        node.setNext(temp);
      }
    } else {
      this._top = value ? new Node(value) : undefined;
    }
  }

  size() {
    if (!this._top) {
      return 0;
    }

    let current = this._top;
    let count = 1;

    while (current.next()) {
      count++;
      current = current.next() as Node<T>;
    }

    return count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  pop() {
    if (!this._top) {
      return undefined;
    }

    const value = this._top.value();
    this._top = this._top.next();
    return value;
  }

  push(value: T) {
    const node = new Node(value);
    node.setNext(this._top);
    this._top = node;
  }

  getValues() {
    if (!this._top) {
      return [];
    }

    let current = this._top;
    let values = [];

    while (current) {
      values.push(current.value());
      current = current.next() as Node<T>;
    }

    return values;
  }
}
