export const getDayofTheWeek = (dayIndex) => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[dayIndex]
}

export const convertUnixToDate = (unix) => {
    return new Date(unix * 1000)
}

export const removeDecimal = (float) => {
    return Math.trunc(float)
}

export const shortenDay = (string) => {
    return string.split("").slice(0,3).join("")
}