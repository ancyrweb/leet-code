// https://leetcode.com/problems/longest-common-prefix/
export function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let i = 0;
  while (true) {
    let p = strs[0][i];
    if (!p) {
      return prefix;
    }

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== p) {
        return prefix;
      }
    }

    prefix += p;
    i++;
  }
}
