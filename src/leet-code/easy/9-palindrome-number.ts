// https://leetcode.com/problems/palindrome-number/description/
export function isPalindrome(x: number): boolean {
  const str = x.toString();
  return str === str.split("").reverse().join("");
}
