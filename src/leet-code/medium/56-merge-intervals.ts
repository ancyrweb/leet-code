// https://leetcode.com/problems/merge-intervals/
export function merge(intervals: number[][]): number[][] {
  const numbers = [] as number[][];
  intervals.sort((a, b) => a[0] - b[0]);

  let min = -1,
    max = -1;

  for (let i = 0; i < intervals.length; i++) {
    if (min < 0) {
      min = intervals[i][0];
      max = intervals[i][1];
      continue;
    }

    if (intervals[i][0] > max) {
      numbers.push([min, max]);
      min = intervals[i][0];
      max = intervals[i][1];
    } else {
      if (intervals[i][0] < min) {
        min = intervals[i][0];
      }
      if (intervals[i][1] > max) {
        max = intervals[i][1];
      }
    }
  }

  if (min >= 0) {
    numbers.push([min, max]);
  }

  return numbers;
}
