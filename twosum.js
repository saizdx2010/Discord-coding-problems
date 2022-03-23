function twoSums(nums, target) {
    let number = [];

    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                number.push(nums[i]);
                number.push(nums[j]);
            }
        }
    }
    return number;
}

console.log(twoSums([1, 2, 3], 3))