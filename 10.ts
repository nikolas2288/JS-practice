// function printSecond(hours: number, minutes: number, seconds: number) {
//     // C часов в секунды
//     minutes += hours * 60;
//     seconds += minutes * 60;
//     return seconds;
// }

// function printHouer(second: number) {
//     // C Секонды в часы
//     let minutes = ~~(second / 60);
//     let hours = ~~(minutes / 60);
//     second -= minutes * 60;
//     minutes -= hours * 60
//     console.log(`${hours}:${minutes}:${second}`);
// }

// function dateDifference(h1: number, m1: number, s1: number, h2: number, m2: number, s2: number) {
//     let diff = printSecond(h1, m1, s1) - printSecond(h2, m2, s2);
//     console.log(diff);
//     console.log(printSecond(h1, m1, s1));
//     console.log(printSecond(h2, m2, s2));
//     printHouer(diff);
// }

// dateDifference(23, 59, 59, 20, 30, 50);