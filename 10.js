// C часов в секунды
function printSecond(hours, minutes, seconds) {
    minutes += hours * 60;
    seconds += minutes * 60;
    return seconds;
}
// C Секонды в часы
function printHouer(second) {
    var minutes = ~~(second / 60);
    var hours = ~~(minutes / 60);
    second -= minutes * 60;
    minutes -= hours * 60;
    console.log(hours + ":" + minutes + ":" + second);
}
printHouer(3600)
// Разница
function dateDifference(h1, m1, s1, h2, m2, s2) {
    var diff = printSecond(h1, m1, s1) - printSecond(h2, m2, s2);
    console.log(diff);
    console.log(printSecond(h1, m1, s1));
    console.log(printSecond(h2, m2, s2));
    printHouer(diff);
}
dateDifference(23, 59, 59, 20, 30, 50);
