import { isValid } from "./20-valid-parentheses";

it("20 - Valid parentheses", () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("(]")).toBe(false);
  expect(isValid("(")).toBe(false);
});
