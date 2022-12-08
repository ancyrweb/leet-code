import { romanToInt } from "./13-roman-to-int";
import { isAnagram } from "./242-valid-anagram";

it("242 - Valid Anagram", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
  expect(isAnagram("aa", "bb")).toBe(false);
  expect(isAnagram("a", "ab")).toBe(false);
});
