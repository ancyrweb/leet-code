import { Heap } from "./heap";

it("should create a heap", () => {
  const heap = new Heap([1, 4, 3, 8, 5]);
  expect(heap.next()).toBe(8);

  const el = heap.dequeue();
  expect(el).toBe(8);
  expect(heap.size()).toBe(4);
  expect(heap.next()).toBe(5);

  heap.append(10);
  heap.append(15);
  expect(heap.next()).toBe(15);
  heap.dequeue();
  expect(heap.next()).toBe(10);
  heap.dequeue();
  expect(heap.next()).toBe(5);
});

describe("should manage the heap very fast", () => {
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * max + min);

  let n = [] as number[];

  beforeEach(() => {
    let size = Math.pow(10, 6);
    n = Array(size);
    for (let i = 0; i < size; i++) {
      n[i] = rand(1, 1000);
    }
  });

  it("should manage the heap", () => {
    const heap = new Heap();
    n.forEach((c) => heap.append(c));

    const values = Array(n.length);
    for (let i = 0; i < values.length; i++) {
      values[i] = heap.dequeue();
    }

    n.sort((a, b) => b - a);
    expect(n).toEqual(values);
  });
});
