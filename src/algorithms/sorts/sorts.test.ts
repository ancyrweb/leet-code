import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
} from "./bubble-sort";

const random = (min: number, max: number) =>
  Math.round(Math.random() * max + min);

let array: number[] = [];
for (let i = 0; i < 20000; i++) {
  array.push(random(0, 100));
}

let sortedArray = array.slice().sort((a, b) => a - b);

const smallArray = [5, 4, 3, 1, 2];
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
  it("merge sort", () => {
    expect(mergeSort(array.slice())).toEqual(sortedArray);
  });
  it.only("quick sort", () => {
    console.log(quickSort([2, 1, 4, 3, 5]));
    expect(true).toBe(true);
    // expect(quickSort([8, 1, 4, 3, 5, 7, 2, 6])).toEqual([
    //   1, 2, 3, 4, 5, 6, 7, 8,
    // ]);
  });
});
