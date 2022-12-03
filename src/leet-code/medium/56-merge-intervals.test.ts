import { merge } from "./56-merge-intervals";

it("56 - merge intervals", () => {
  expect(
    merge([
      [1, 4],
      [4, 5],
    ])
  ).toEqual([[1, 5]]);

  expect(
    merge([
      [1, 4],
      [0, 4],
    ])
  ).toEqual([[0, 4]]);

  expect(
    merge([
      [1, 4],
      [2, 3],
    ])
  ).toEqual([[1, 4]]);

  expect(
    merge([
      [2, 4],
      [2, 3],
      [2, 6],
      [1, 6],
      [0, 0],
    ])
  ).toEqual([
    [0, 0],
    [1, 6],
  ]);

  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});
