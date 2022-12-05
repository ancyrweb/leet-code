export function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      let curI = i;

      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] === val) {
          const temp = nums[j];
          nums[j] = nums[curI];
          nums[curI] = temp;
          curI = j;
        }
      }
    } else {
      count++;
    }
  }

  return nums.length - count;
}
