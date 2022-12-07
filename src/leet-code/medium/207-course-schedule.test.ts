import { maxProductSubarray } from "./152-maximum-product-subarray";
import { canFinish } from "./207-course-schedule";

it("207 - Course Schedule", () => {
  expect(
    canFinish(5, [
      [0, 1],
      [0, 2],
      [2, 3],
      [3, 4],
      [2, 4],
    ])
  ).toBe(true);
  expect(canFinish(1, [[0, 1]])).toBe(true);
  expect(
    canFinish(2, [
      [0, 1],
      [1, 0],
    ])
  ).toBe(false);
  expect(
    canFinish(2, [
      [0, 1],
      [2, 3],
    ])
  ).toBe(true);
  expect(
    canFinish(2, [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 2],
    ])
  ).toBe(false);
});
