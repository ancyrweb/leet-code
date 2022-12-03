// https://leetcode.com/problems/roman-to-integer
export function romanToInt(s: string): number {
  let acc = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === "I") {
      if (s[i + 1] === "V" || s[i + 1] === "X") {
        acc -= 1;
      } else {
        acc += 1;
      }
    } else if (s[i] === "V") {
      acc += 5;
    } else if (s[i] === "X") {
      if (s[i + 1] === "L" || s[i + 1] === "C") {
        acc -= 10;
      } else {
        acc += 10;
      }
    } else if (s[i] === "L") {
      acc += 50;
    } else if (s[i] === "C") {
      if (s[i + 1] === "D" || s[i + 1] === "M") {
        acc -= 100;
      } else {
        acc += 100;
      }
    } else if (s[i] === "D") {
      acc += 500;
    } else if (s[i] === "M") {
      acc += 1000;
    }

    i++;
  }

  return acc;
}
