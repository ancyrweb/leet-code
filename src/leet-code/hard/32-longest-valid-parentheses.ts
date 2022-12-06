// https://leetcode.com/problems/longest-valid-parentheses/description/
export function longestValidParentheses(s: string): number {
  const stack = [-1];
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") {
      stack.push(i);
    } else if (c === ")") {
      stack.pop();
      if (stack.length > 0) {
        len = Math.max(len, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return len;
}
