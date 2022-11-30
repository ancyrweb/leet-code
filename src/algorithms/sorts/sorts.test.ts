import { bubbleSort, insertionSort, selectionSort } from "./bubble-sort";

const random = (min: number, max: number) =>
  Math.round(Math.random() * max + min);

let array: number[] = [];
for (let i = 0; i < 20000; i++) {
  array.push(random(0, 100));
}

let sortedArray = array.slice().sort((a, b) => a - b);

const smallArray = [4, 2, 1, 5, 3];
const smallSorted = [1, 2, 3, 4, 5];

describe("sort", () => {
  it("bubble sort", () => {
    expect(bubbleSort(array.slice())).toEqual(sortedArray);
  });
  it("selection sort", () => {
    expect(selectionSort(array.slice())).toEqual(sortedArray);
  });
  it("insertion sort", () => {
    expect(insertionSort(array.slice())).toEqual(sortedArray);
  });
});
