export class BinarySearchTree<T> {
  private root?: Node<T>;
  constructor() {}

  insert(value: T | T[]) {
    if (Array.isArray(value)) {
      value.forEach(this.insert.bind(this));
      return;
    }

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    return this.root.insertAtNode(value);
  }
  debug(node = this.root) {
    console.log(node);
  }
  rootNode() {
    return this.root!;
  }
  inOrder() {
    return this.root?.inOrder();
  }
  preOrder() {
    return this.root?.preOrder();
  }
  postOrder() {
    return this.root?.postOrder();
  }
  bfs() {
    return this.root?.bfs();
  }
}

class Node<T> {
  constructor(public val: T, public left?: Node<T>, public right?: Node<T>) {}

  insertAtNode(value: T) {
    if (value <= this.val) {
      if (this.left) {
        this.left.insertAtNode(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right.insertAtNode(value);
      } else {
        this.right = new Node(value);
      }
    }
  }

  preOrder(values: T[] = []) {
    values.push(this.val);
    if (this.left) {
      this.left.preOrder(values);
    }
    if (this.right) {
      this.right.preOrder(values);
    }
    return values;
  }
  inOrder(values: T[] = []) {
    if (this.left) {
      this.left.inOrder(values);
    }
    values.push(this.val);
    if (this.right) {
      this.right.inOrder(values);
    }
    return values;
  }
  postOrder(values: T[] = []) {
    if (this.left) {
      this.left.postOrder(values);
    }
    if (this.right) {
      this.right.postOrder(values);
    }
    values.push(this.val);

    return values;
  }
  bfs() {
    let values = [];
    let queue: Node<T>[] = [this];

    while (queue.length) {
      const node = queue.shift()!;
      values.push(node?.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return values;
  }
}
