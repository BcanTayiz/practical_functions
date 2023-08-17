function findDuplicate(nums) {
    if(!Array.isArray(nums)){
        throw Error('Input must be an array')
    }
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Move the tortoise and hare until they meet inside the loop
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Move the hare back to the start of the array and move both the tortoise and hare at the same speed until they meet
    fast = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow; // The meeting point is the duplicate element
}

function findDuplicateElements(nums) {
    const frequencyMap = {};
    const duplicates = [];

    for (const num of nums) {
        if (!frequencyMap[num]) {
            frequencyMap[num] = 1;
        } else {
            frequencyMap[num]++;
            if (frequencyMap[num] === 2) {
                duplicates.push(num);
            }
        }
    }

    return duplicates;
}

module.exports = {
    findDuplicate:findDuplicate,
    findDuplicateElements,findDuplicateElements
}
