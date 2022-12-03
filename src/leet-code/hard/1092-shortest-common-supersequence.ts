// https://leetcode.com/problems/shortest-common-supersequence/description/
// LCS => https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
export function shortestCommonSupersequence(
  str1: string,
  str2: string
): string {
  return solution(str1, str2);
}

// Solutions
export const solution = (text1: string, text2: string) => {
  let arr = new Array(text1.length + 1);
  for (let a = 0; a < arr.length; a++) {
    arr[a] = new Array(text2.length + 1).fill(0);
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }

  console.log(arr);

  let res = "";
  let i = text1.length;
  let j = text2.length;
  while (i > 0 && j > 0) {
    if (text1[i - 1] == text2[j - 1]) {
      res = text1[--i] + res;
      j--;
    } else {
      if (arr[i - 1][j] > arr[i][j - 1]) {
        res = text1[--i] + res;
      } else {
        res = text2[--j] + res;
      }
    }
  }
  while (i > 0) {
    res = text1[--i] + res;
  }
  while (j > 0) {
    res = text2[--j] + res;
  }
  return res;
};