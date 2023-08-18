function countDivisors(num) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            if (i * i === num) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

function findNDividers(list, N) {
    const result = [];

    for (const num of list) {
        if (countDivisors(num) === N) {
            result.push(num);
        }
    }

    return result;
}

module.exports = {
    findNDividers:findNDividers
}