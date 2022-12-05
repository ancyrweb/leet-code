import { removeElement } from "./27-remove-element";

let sortAllExcept = (a: number[], target: number) => {
  a.sort((a, b) => {
    if (a === target) a = Infinity;
    if (b === target) b = Infinity;
    return a - b;
  });
};

it("27 - Remove element", () => {
  const a = [3, 2, 3, 2, 3];
  const aExpect = [2, 2];
  expect(removeElement(a, 3)).toBe(2);

  sortAllExcept(a, 3);
  for (let i = 0; i < aExpect.length; i++) {
    expect(a[i]).toBe(aExpect[i]);
  }

  let b = [0, 1, 2, 2, 3, 0, 4, 2];
  const bExpect = [0, 1, 3, 0, 4];

  expect(removeElement(b, 2)).toBe(5);
  for (let i = 0; i < bExpect.length; i++) {
    expect(b[i]).toBe(bExpect[i]);
  }
});
