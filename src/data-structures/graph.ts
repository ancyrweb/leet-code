export class Graph<T> {
  private _size: number = 0;
  private _adjacentList: Record<string, Node<T>> = {};

  constructor(values?: Record<string, Node<T>>) {
    this._adjacentList = values || {};
    this._size = Object.keys(this._adjacentList).length;

    this.verifyIntegrity();
  }

  verifyIntegrity() {
    Object.entries(this._adjacentList).forEach(([key, value]) => {
      value.edges.forEach((edge) => {
        if (!this._adjacentList[edge]) {
          throw new Error(`Cannot find edge '${edge}' for node '${key}'`);
        }
      });
    });
  }

  size() {
    return this._size;
  }

  getEdges(key: string) {
    if (!this._adjacentList || !this._adjacentList[key]) {
      return undefined;
    }

    return this._adjacentList[key].edges;
  }

  add(key: string, node: Node<T>) {
    node.edges.forEach((edge) => {
      if (!this._adjacentList[edge]) {
        throw new Error(
          `Cannot add edge '${edge}' to node '${key}' because it doesn't exist.`
        );
      }
    });

    this._adjacentList[key] = node;
    this._size++;

    // We complete the existing nodes to also embed the relationship
    node.edges.forEach((edge) => {
      const node = this._adjacentList[edge];
      node.edges.push(key);
    });
  }
}

export class Node<T> {
  public edges: string[];
  public value: T | undefined;

  constructor(edges: string[], value?: T) {
    this.edges = edges;
    this.value = value;
  }
}