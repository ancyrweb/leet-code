import { longestValidParentheses } from "./32-longest-valid-parentheses";
import { findMedianSortedArrays } from "./4-median-two-sorted-arrays";

it("4 - Median of two sorted arrays", () => {
  expect(findMedianSortedArrays([1,2,3],[4,5,6,7])).toBe(4);
  expect(findMedianSortedArrays([1,2,2,2],[4,5,6,7])).toBe(3);
  expect(findMedianSortedArrays([1,2,3],[])).toBe(2);
  expect(findMedianSortedArrays([2,4],[])).toBe(3);
  expect(findMedianSortedArrays([2],[4])).toBe(3);
  expect(findMedianSortedArrays([2],[])).toBe(2);
  expect(findMedianSortedArrays([1,3,5,6,8,10,11,12],[2,9,15,20, 21, 22])).toBe(9.5);
});
