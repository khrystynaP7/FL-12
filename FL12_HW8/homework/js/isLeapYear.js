function isLeapYear(input) {
let date = new Date(input);
if (date instanceof Date && !isNaN(date)) {
let year = date.getFullYear();
    if (Number.isInteger(year/100)) {
    return year +' is not a leap year'
    } else if (Number.isInteger(year/400)) {
    return year +' is a leap year'
    } else if (Number.isInteger(year/4)) {
        return year + ' is a leap year'
    } else { 
    return year + ' is not a leap year'
} 
} else {
return 'Invalid date';
}
}

isLeapYear('2020-01-01 00:00:00')