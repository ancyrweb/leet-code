// https://leetcode.com/problems/maximum-product-subarray/
export const maxProductSubarray = (nums: number[]): number => {
  let res = nums[0],
    min = nums[0],
    max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currMax = nums[i] * max;
    const currMin = nums[i] * min;
    min = Math.min(nums[i], currMax, currMin);
    max = Math.max(nums[i], currMax, currMin);
    res = Math.max(res, max);
  }

  return res;
};
