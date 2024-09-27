"use strict"

const dayOfWeek = (function () {

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getDayName(dayNumber) {
        if (dayNumber < 1 || dayNumber > 7 || isNaN(dayNumber)) {
            throw new Error("Invalid day number");
        }
        return dayNames[dayNumber - 1];
    }

    function getDayNumber(dayName) {
        const index = dayNames.indexOf(dayName);
        if (index === -1) {
            throw new Error("Invalid day name");
        }
        return index + 1;
    }

    return {
        getDayName,
        getDayNumber
    };
})();

console.log(dayOfWeek.getDayName(1)); // "Sunday"
console.log(dayOfWeek.getDayName(7)); // "Saturday"
console.log(dayOfWeek.getDayNumber('Monday')); // 2
console.log(dayOfWeek.getDayNumber('Friday')); // 6