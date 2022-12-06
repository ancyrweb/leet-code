import { longestValidParentheses } from "./32-longest-valid-parentheses";

it("32 - Longest valid parentheses", () => {
  expect(longestValidParentheses("()))())))")).toBe(2);
  expect(longestValidParentheses("())((())")).toBe(4);
  expect(longestValidParentheses("(()")).toBe(2);
  expect(longestValidParentheses(")()())")).toBe(4);
  expect(longestValidParentheses("")).toBe(0);
});
