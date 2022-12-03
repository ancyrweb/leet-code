import { maxProductSubarray } from "./152-maximum-product-subarray";

it("152 - Max Product Subarray", () => {
  expect(maxProductSubarray([-1, -2, -3])).toBe(6);
  expect(maxProductSubarray([2, 3, -2, 4])).toBe(6);
  expect(maxProductSubarray([-2, 0, 1])).toBe(1);
});
