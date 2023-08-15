function transformBoolean(val){
    var boolVal = (String(val).toLowerCase() === 'true');
    return boolVal
}

function dateToString(dateVal, country_code, format, separator, values = 'number') {
    const validFormats = ['weekday', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZone'];
    const filteredFormat = format.split('-').filter(item => validFormats.includes(item)).join('-');

    const options = {
        weekday: filteredFormat.includes('weekday') ? 'long' : undefined,
        year: filteredFormat.includes('year') ? 'numeric' : undefined,
        month: filteredFormat.includes('month') ? 'long' : 'numeric',
        day: filteredFormat.includes('day') ? 'numeric' : undefined,
        hour: filteredFormat.includes('hour') ? 'numeric' : undefined,
        minute: filteredFormat.includes('minute') ? 'numeric' : undefined,
        second: filteredFormat.includes('second') ? 'numeric' : undefined,
        timeZoneName: filteredFormat.includes('timeZone') ? 'short' : undefined,
    };

    const formattedDate = dateVal.toLocaleString(country_code, options);

    if (values === 'number') {
        const monthNumber = dateVal.getMonth() + 1; // Ay indeksini 1 ekleyerek ay numarasına çeviriyoruz
        const monthName = new Intl.DateTimeFormat('tr-TR', { month: 'long' }).format(dateVal);
        
        const formattedNumber = new Intl.NumberFormat('tr-TR', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        }).format(monthNumber);

        return formattedDate.replace(monthName, formattedNumber).replace(/ /g, separator); // Ay adını ve boşlukları değiştiriyoruz
    }

    return formattedDate.replace(/ /g, separator);
}





module.exports = {
    transformBoolean:transformBoolean,
    dateToString:dateToString
};