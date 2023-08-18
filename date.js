function getDateOfWeek(weekNumber, year) {
    const januaryFirst = new Date(year, 0, 1);
    const daysOffset = (weekNumber - 1) * 7 - januaryFirst.getDay() + 1;
    
    const resultDate = new Date(year, 0, daysOffset);
    resultDate.setDate(resultDate.getDate() + 3); // Adjust to Thursday (ISO 8601)
    
    return resultDate.toISOString().slice(0, 10);
}





module.exports = {
    getDateOfWeek:getDateOfWeek
}