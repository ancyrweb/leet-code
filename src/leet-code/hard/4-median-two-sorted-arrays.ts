// https://leetcode.com/problems/median-of-two-sorted-arrays/
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let a = 0;
  let b = 0;

  let numsLen = nums1.length + nums2.length;
  let queueLen = Math.floor(numsLen / 2) + 1;

  const queue = [];
  for (let i = 0; i < queueLen; i++) {
    if (b === nums2.length) {
      queue.push(nums1[a]);
      a++
    } else if (a === nums1.length) {
      queue.push(nums2[b]);
      b++;
    } else {
      if (nums1[a] < nums2[b]) {
        queue.push(nums1[a]);
        a++
      } else {
        queue.push(nums2[b]);
        b++;
      }
    }
  }

  if (numsLen % 2 === 1) {
    // odd
    return queue[queue.length - 1]
  } else {
    return (queue[queue.length - 1] + queue[queue.length - 2]) / 2
  } 
};