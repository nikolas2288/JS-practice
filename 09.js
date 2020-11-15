function printTime(hours, minutes, seconds) {
    if (hours < 0 || hours > 23) {
        hours = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0427\u0430\u0441\u044B";
    }
    else if (hours.length == 1) {
        hours = "0" + hours;
    }
    if (minutes < 0 || minutes > 59) {
        minutes = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u041C\u0438\u043D\u0443\u0442\u044B";
    }
    else if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    if (seconds < 0 || seconds > 59) {
        seconds = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0421\u0435\u043A\u0443\u043D\u0434\u044B";
    }
    else if (seconds.length == 1) {
        seconds = "0" + seconds;
    }
    console.log(hours + ":" + minutes + ":" + seconds);
}
var printHouer = function (second) {
    var minutes = ~~(second / 60);
    var houers = ~~(minutes / 60);
    second = minutes - houers * 60;
    printTime(houers, minutes, second);
};
printHouer(+prompt(''));
