import { arrayToList, mergeTwoLists } from "./21-merge-two-sorted-lists";

it("21 - Merge two sorted lists", () => {
  const a = arrayToList([1, 2, 4]);
  const b = arrayToList([1, 3, 4]);
  expect(mergeTwoLists(a, b)?.toArray()).toEqual(
    arrayToList([1, 1, 2, 3, 4, 4])?.toArray()
  );
});
