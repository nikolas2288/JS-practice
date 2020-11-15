var react = {
    topLeftPoint: {
        x: 0,
        y: 5
    },
    bottomRightPoint: {
        x: 10,
        y: 15
    }
};
function Render(r) {
    var rect = document.getElementById('rect');
    rect.style.top = r.topLeftPoint.y + 'px';
    rect.style.left = r.topLeftPoint.x + 'px';
    rect.style.width = GetWidth(r) + 'px';
    rect.style.height = GetHeight(r) + 'px';
}
Render(react);
// Написать ф-цию которая принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена)
function Info(r) {
    var info = '';
    for (var key in r) {
        var value = r[key];
        info += key + ":";
        for (var childKey in value) {
            var childValue = value[childKey];
            info += "\n " + childKey + ": " + childValue;
        }
        info += "\n";
    }
    alert(info);
}
// Info(react)
// Написать ф-цию которая принимает объект-прю и возращает его ширину
function GetWidth(r) {
    var width;
    var min = r.topLeftPoint.x > r.bottomRightPoint.x ? r.bottomRightPoint.x : r.topLeftPoint.x;
    var max = r.topLeftPoint.x < r.bottomRightPoint.x ? r.bottomRightPoint.x : r.topLeftPoint.x;
    width = max - min;
    if (width < 0) {
        width *= -1;
    }
    return width;
}
// Высоту
function GetHeight(r) {
    var height;
    var min = r.topLeftPoint.y > r.bottomRightPoint.y ? r.bottomRightPoint.y : r.topLeftPoint.y;
    var max = r.topLeftPoint.y < r.bottomRightPoint.y ? r.bottomRightPoint.y : r.topLeftPoint.y;
    height = max - min;
    if (height < 0) {
        height *= -1;
    }
    return height;
}
// Площадь
function GetSquare(r) {
    var square;
    var height = GetWidth(r);
    var width = GetHeight(r);
    square = width * height;
    return square;
}
// Периметр
function GetPerimeter(r) {
    var Perimeter;
    var height = GetWidth(r);
    var width = GetHeight(r);
    Perimeter = (width + height) * 2;
    return Perimeter;
}
// ф - ция изменения ширины прямоугольника. Она принимает объект - прямоугольник и на сколько единиц изменить ширину
function ChangeWidth(r, width) {
    if (width > 0) {
        r.bottomRightPoint.x += width;
    }
    else {
        r.topLeftPoint.x += width;
    }
    Render(r);
}
// Высоту 
function ChangeHeight(r, height) {
    if (height > 0) {
        r.bottomRightPoint.y += height;
    }
    else {
        r.topLeftPoint.y += height;
    }
    Render(r);
}
// Ширину и Высоту
function ChangeHeightWidht(r, width, height) {
    ChangeWidth(r, width);
    ChangeHeight(r, height);
}
// Ф-ция по смещению прямоугольника по оси Х. Она принимает о-п и на сколько единиц его сдвинуть
function ChangeX(r, diff) {
    r.bottomRightPoint.x += diff;
    r.topLeftPoint.x += diff;
    Render(r);
}
// По У
function ChangeY(r, diff) {
    r.bottomRightPoint.y += diff;
    r.topLeftPoint.y += diff;
    Render(r);
}
// И по Х и по У
function ChangeXY(r, diffX, diffY) {
    changeX(r, diffX);
    changeY(r, diffY);
}
// Ф-ция для проверки, находится ли точка внутри прямоугольника. Она принимает о-п и точку
function check(r, value) {
    var minX = r.bottomRightPoint.x > r.topLeftPoint.x ? r.topLeftPoint.x : r.bottomRightPoint.x;
    var maxX = r.bottomRightPoint.x < r.topLeftPoint.x ? r.topLeftPoint.x : r.bottomRightPoint.x;
    if (value.x < minX || value.x > maxX) {
        return false;
    }
    var minY = r.bottomRightPoint.y > r.topLeftPoint.y ? r.topLeftPoint.y : r.bottomRightPoint.y;
    var maxY = r.bottomRightPoint.y < r.topLeftPoint.y ? r.topLeftPoint.y : r.bottomRightPoint.y;
    if (value.y < minY || value.y > maxY) {
        return false;
    }
    return true;
}
