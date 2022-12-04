export function lengthOfLIS(nums: number[]): number {
  return bruteforceLengthOfLIS(nums);
}

export function bruteforceLengthOfLIS(nums: number[]): number {
  let dp = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = -1;
  }

  function findLIS(nums: number[], i: number) {
    let lis = 0;
    for (let x = i; x < nums.length; x++) {
      if (nums[x] > nums[i]) {
        lis = Math.max(lis, (dp[x] >= 0 ? dp[x] : findLIS(nums, x)) + 1);
      }
    }

    dp[i] = lis;
    return lis;
  }

  let out = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    out = Math.max(out, dp[i] >= 0 ? dp[i] : findLIS(nums, i));
  }

  return out + 1;
}

function dpLIS(nums: number[]): number {
  let length = nums.length;
  let dp = Array(length);
  for (let i = 0; i < length; i++) {
    dp[i] = 1;
  }

  let out = 1;
  for (let i = 1; i < length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        out = Math.max(out, dp[i]);
      }
    }
  }
  return out;
}
