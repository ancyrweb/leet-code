import { LinkedList, Node } from "./linked-list";

describe("init", () => {
  it("should create an empty linked list", () => {
    const list = new LinkedList();
    expect(list.head()).toBe(undefined);
    expect(list.size()).toBe(0);
  });

  it("should create a linked list with one element", () => {
    const list = new LinkedList(new Node(10));
    expect(list.head()!.value()).toBe(10);
    expect(list.size()).toBe(1);
  });

  it("should create a linked list with one array element", () => {
    const list = new LinkedList([new Node(10)]);
    expect(list.head()!.value()).toBe(10);
    expect(list.size()).toBe(1);
  });

  it("should create a linked list with many element", () => {
    const list = new LinkedList([new Node(10), new Node(20), new Node(30)]);
    expect(list.head()!.value()).toBe(10);
    expect(list.head()!.next()!.value()).toBe(20);
    expect(list.head()!.next()!.next()!.value()).toBe(30);
    expect(list.size()).toBe(3);
  });
});

describe("at", () => {
  it("should find element at index in an empty list", () => {
    const list = new LinkedList();
    expect(list.at(0)).toBe(undefined);
    expect(list.at(1)).toBe(undefined);
  });
  it("should find element at index", () => {
    const list = new LinkedList([new Node(10), new Node(20), new Node(30)]);

    expect(list.at(0)!.value()).toBe(10);
    expect(list.at(1)!.value()).toBe(20);
    expect(list.at(2)!.value()).toBe(30);
    expect(list.at(3)).toBe(undefined);
  });
  it("should throw if index is negative", () => {
    const list = new LinkedList();
    expect(() => list.at(-1)).toThrow("Index must be >= 0");
  });
});

describe("append", () => {
  it("should append an element to an empty list", () => {
    const list = new LinkedList();
    list.append(new Node(10));

    expect(list.head()!.value()).toBe(10);
    expect(list.size()).toBe(1);
  });
  it("should append an element to a list", () => {
    const list = new LinkedList(new Node(10));
    list.append(new Node(20));

    expect(list.at(0)!.value()).toBe(10);
    expect(list.at(1)!.value()).toBe(20);
    expect(list.size()).toBe(2);
  });
  it("should append many element to a list", () => {
    const list = new LinkedList(new Node(10));
    list.append(new Node(20));
    list.append(new Node(30));

    expect(list.at(0)!.value()).toBe(10);
    expect(list.at(1)!.value()).toBe(20);
    expect(list.at(2)!.value()).toBe(30);
    expect(list.size()).toBe(3);
  });
});

describe("prepend", () => {
  it("should prepend an element to an empty list", () => {
    const list = new LinkedList();
    list.prepend(new Node(10));
    expect(list.head()!.value()).toBe(10);
    expect(list.size()).toBe(1);
  });
  it("should prepend an element to an existing list", () => {
    const list = new LinkedList(new Node(20));
    list.prepend(new Node(10));
    expect(list.at(0)!.value()).toBe(10);
    expect(list.at(1)!.value()).toBe(20);
    expect(list.size()).toBe(2);
  });
});

describe("reverse", () => {
  it("reverse an empty list", () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.toArray()).toEqual([]);
  });
  it("reverse a list with one element", () => {
    const list = new LinkedList([new Node(10)]);
    list.reverse();
    expect(list.toArray()).toEqual([10]);
  });
  it("reverse a list with two elements", () => {
    const list = new LinkedList([new Node(10), new Node(20)]);
    list.reverse();
    expect(list.toArray()).toEqual([20, 10]);
  });

  it("reverse a big list", () => {
    const list = new LinkedList([
      new Node(5),
      new Node(10),
      new Node(15),
      new Node(20),
      new Node(25),
      new Node(30),
      new Node(35),
    ]);

    list.reverse();
    expect(list.toArray()).toEqual([35, 30, 25, 20, 15, 10, 5]);
  });
});
