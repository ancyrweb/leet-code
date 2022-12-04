// https://leetcode.com/problems/valid-parentheses/
const map: any = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export function isValid(s: string): boolean {
  const elems = [];
  for (let c of s) {
    if (map[c]) {
      let out = elems.pop();
      if (out !== map[c]) {
        return false;
      }
    } else {
      elems.push(c);
    }
  }
  return elems.length === 0;
}
