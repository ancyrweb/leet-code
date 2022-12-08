import { isAnagram } from "./242-valid-anagram";
import { replaceElements } from "./1299-replace-element-with-greatest";

it("1299 - Replace elements with greatest element on right side", () => {
  expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
  expect(replaceElements([18, 9, 3, 7])).toEqual([9, 7, 7, -1]);
  expect(replaceElements([400])).toEqual([-1]);
});
