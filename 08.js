function printTime(hours, minutes, seconds) {
    minutes += hours * 60;
    seconds += minutes * 60;
    return seconds;
}
var s = printTime(+prompt('Часы'), +prompt('Минуты'), +prompt('Секунды'));
console.log(s);
