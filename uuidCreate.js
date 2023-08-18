function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomHex(length) {
    let result = '';
    const characters = 'abcdef0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(generateRandomNumber(0, characters.length - 1));
    }
    return result;
}

function createRandomUuid4() {
    const timeLow = generateRandomHex(8);
    const timeMid = generateRandomHex(4);
    const timeHiAndVersion = '4' + generateRandomHex(3);
    const clockSeqAndReserved = '8' + generateRandomHex(3);
    const node = generateRandomHex(12);

    return `${timeLow}-${timeMid}-${timeHiAndVersion}-${clockSeqAndReserved}-${node}`;
}



module.exports = {
    createRandomUuid4:createRandomUuid4
};