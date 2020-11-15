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
var result = isPerfect(+prompt('number'));
console.log(result1);
