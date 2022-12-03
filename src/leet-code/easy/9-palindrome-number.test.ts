import { isPalindrome } from "./9-palindrome-number";

it("9 - Palindrome", () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(-121)).toBe(false);
  expect(isPalindrome(10)).toBe(false);
  expect(isPalindrome(390093)).toBe(true);
});
