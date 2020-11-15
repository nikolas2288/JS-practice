function s(width, height = width) {
    var squeare = width * height;
    console.log(`Ширина: ${width}`);
    console.log(`Высота: ${height}`);
    return squeare;
}
var result = s(+prompt('width'), +prompt('height'));
console.log(result)

