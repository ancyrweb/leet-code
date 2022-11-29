export class Graph<T> {
  private _size: number = 0;
  private _adjacentList: Array<Array<T>> = [];

  constructor(private values?: Array<Array<T>>) {
    this._adjacentList = values || [];
    this._size = this._adjacentList.length;
  }

  size() {
    return this._size;
  }
}
