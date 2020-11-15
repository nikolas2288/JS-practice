/*
ф-ция которая принимает мин. и макс. значения для диапазона, и выводит только те числа которые являются совершенными
*/
function isPerfect(num) {
    var res = 0;
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            res += i;
        }
    }
    if (num == res) {
        return true;
    }
    else {
        return false;
    }
}
function range(min, max) {
    var bufer = '';
    for (var i = min; i < max; i++) {
        if (isPerfect(i)) {
            bufer += i + " ";
        }
    }
    return bufer;
}
console.log(range(+prompt('num1'), +prompt('num2')));
