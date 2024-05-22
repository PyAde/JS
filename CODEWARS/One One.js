/** @format */

function consecutiveOnes(nums) {
  let onesCount = 0;
  let currentStreak = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentStreak++;
    } else {
      onesCount = Math.max(onesCount, currentStreak);
      currentStreak = 0;
    }
  }

  return Math.max(onesCount, currentStreak);
}
