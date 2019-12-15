const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const formatDate = dateTime => {
    const now = new Date(),
        date = new Date(dateTime),
        minutes = date.getMinutes(),
        hours = date.getHours(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        diff = now.getTime() - date.getTime(),
        secondsDiff = diff / 1000,
        minutesDiff = secondsDiff / 60,
        hoursDiff = minutesDiff / 60;

    return `${
        secondsDiff > 10
            ? secondsDiff > 59
                ? minutesDiff > 59
                    ? hoursDiff > 23
                        ? `${months[month - 1]}, ${
                              day < 10 ? `0${day}` : day
                          } at ${hours}:${minutes}`
                        : `${parseInt(hoursDiff)} h`
                    : `${parseInt(minutesDiff)} min`
                : `${parseInt(secondsDiff)} seconds ago`
            : `Now`
    }`;
};

const formatMoney = value => {};

const ellipsis = (string, size = 50) =>
    string.replace(new RegExp(`^(.{${size}}[^ ]*).*`), '$1...');

export { formatDate, formatMoney, ellipsis };