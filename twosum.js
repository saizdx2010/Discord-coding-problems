function twoSums(nums, target) {
    let number = [];



    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                number.push(nums.indexOf(nums[i]));
                number.push(nums.indexOf(nums[j]));

            }
        }
    }
    return number.splice(0, 2);
}

console.log(twoSums([1, 2, 3, 4], 6))