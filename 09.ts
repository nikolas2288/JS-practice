// // // Некорректно

// function printTime(hours: number, minutes: number, seconds: number) {

//     if (hours < 0 || hours > 23) {
//         console.log(`Введите коректное Часы`);
//     } else if (String(hours).length == 1) {
//         String(hours) = `0${hours}`;
//     }

//     if (minutes < 0 || minutes > 59) {
//         console.log(`Введите коректное Минуты`);
//     } else if (String(minutes).length == 1) {
//         minutes = `0${minutes}`;
//     }

//     if (seconds < 0 || seconds > 59) {
//         console.log(`Введите коректное Секунды`);
//     } else if (String(seconds).length == 1) {
//         seconds = `0${seconds}`;
//     }

//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// let printHouer = (second) => {
//     let minutes = ~~(second / 60)
//     let houers = ~~(minutes / 60)
//     second -= minutes * 60
//     minutes -= houers * 60
//     printTime(houers, minutes, second)
// }

// printHouer(+prompt(''))



