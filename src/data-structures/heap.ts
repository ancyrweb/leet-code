export class Heap {
  constructor(private nodes: number[] = []) {
    this.nodes.sort((a, b) => b - a);
  }

  next() {
    return this.nodes.length > 0 ? this.nodes[0] : null;
  }

  append(value: number) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  dequeue() {
    if (this.nodes.length === 0) {
      return null;
    }

    const top = this.nodes[0];
    const last = this.nodes.pop();
    if (last) {
      this.nodes[0] = last;
      this.bubbleDown();
    }

    return top;
  }

  bubbleDown() {
    let i = 0;
    while (this.hasChild(i)) {
      let g = this.greatestChildOf(i)!;
      if (this.nodes[i] < this.nodes[g]) {
        let tmp = this.nodes[i];
        this.nodes[i] = this.nodes[g];
        this.nodes[g] = tmp;
        i = g;
      } else {
        return;
      }
    }
  }

  bubbleUp() {
    let i = this.nodes.length - 1;
    while (this.hasParent(i)) {
      const p = this.parentOf(i)!;
      if (this.nodes[p] < this.nodes[i]) {
        let tmp = this.nodes[i];
        this.nodes[i] = this.nodes[p];
        this.nodes[p] = tmp;
        i = p;
      } else {
        return;
      }
    }
  }

  parentOf(i: number) {
    let p = Math.ceil(i / 2) - 1;
    return p < 0 ? null : p;
  }

  hasChild(i: number) {
    let [a, b] = [this.leftChildOf(i), this.rightChildOf(i)];
    return a !== null || b !== null;
  }

  hasParent(i: number) {
    return this.parentOf(i) !== null;
  }

  leftChildOf(i: number) {
    let c = i * 2 + 1;
    return c < this.nodes.length ? c : null;
  }

  rightChildOf(i: number) {
    let c = i * 2 + 2;
    return c < this.nodes.length ? c : null;
  }

  greatestChildOf(i: number) {
    let [a, b] = [this.leftChildOf(i), this.rightChildOf(i)];
    if (a === null) return b;
    if (b === null) return a;
    return this.nodes[a] > this.nodes[b] ? a : b;
  }

  size() {
    return this.nodes.length;
  }
}
