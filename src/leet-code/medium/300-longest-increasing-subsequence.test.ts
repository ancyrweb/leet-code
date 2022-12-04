import { lengthOfLIS } from "./300-longest-increasing-subsequence";

it("300 - longest increasing subsequence", () => {
  expect(lengthOfLIS([5, 18])).toBe(2);
  expect(lengthOfLIS([1, 3, 5, 0, 18])).toBe(4);
  expect(lengthOfLIS([2, 4, 0, 7, 5, 18])).toBe(4);
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
});

it("[SLOW]300 - longest increasing subsequence", () => {
  let array = [];
  let arraySize = 2000;
  for (let i = 0; i < arraySize; i++) {
    array[i] = i;
  }

  expect(lengthOfLIS(array)).toBe(arraySize);
});
