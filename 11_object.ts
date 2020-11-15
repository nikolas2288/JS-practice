interface Point {
    x: number,
    y: number
}
interface Rectengle {
    topLeftPoint: Point,
    bottomRightPoint: Point
}

let react = {
    topLeftPoint: {
        x: 0,
        y: 5
    },
    bottomRightPoint: {
        x: 10,
        y: 15
    }
}

function Render(r: Rectengle) {
    let rect = document.getElementById('rect')
    rect.style.top = r.topLeftPoint.y + 'px'
    rect.style.left = r.topLeftPoint.x + 'px'
    rect.style.width = GetWidth(r) + 'px'
    rect.style.height = GetHeight(r) + 'px'
}

Render(react)

// Написать ф-цию которая принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена)
function Info(r: Rectengle) {
    let info: String = ''
    for (const key in r) {
        const value = r[key]
        info += `${key}:`
        for (const childKey in value) {
            const childValue = value[childKey]
            info += `\n ${childKey}: ${childValue}`
        }
        info += `\n`
    }
    alert(info)
}

// Info(react)

// Написать ф-цию которая принимает о-п и возращает его ширину
function GetWidth(r: Rectengle) {
    let width: number
    let min: number = r.topLeftPoint.x > r.bottomRightPoint.x ? r.bottomRightPoint.x : r.topLeftPoint.x;
    let max: number = r.topLeftPoint.x < r.bottomRightPoint.x ? r.bottomRightPoint.x : r.topLeftPoint.x;
    width = max - min
    if (width < 0) {
        width *= -1
    }
    return width
}

// Высоту
function GetHeight(r: Rectengle) {
    let height: number
    let min: number = r.topLeftPoint.y > r.bottomRightPoint.y ? r.bottomRightPoint.y : r.topLeftPoint.y;
    let max: number = r.topLeftPoint.y < r.bottomRightPoint.y ? r.bottomRightPoint.y : r.topLeftPoint.y;
    height = max - min
    if (height < 0) {
        height *= -1
    }
    return height
}

// Площадь
function GetSquare(r: Rectengle) {
    let square: number
    let height = GetWidth(r)
    let width = GetHeight(r)
    square = width * height
    return square
}

// Периметр
function GetPerimeter(r: Rectengle) {
    let Perimeter: number
    let height = GetWidth(r)
    let width = GetHeight(r)
    Perimeter = (width + height) * 2
    return Perimeter
}

// ф - ция изменения ширины прямоугольника. Она принимает объект - прямоугольник и на сколько единиц изменить ширину
function ChangeWidth(r: Rectengle, width) {
    if (width > 0) {
        r.bottomRightPoint.x += width
    } else {
        r.topLeftPoint.x += width
    }
    Render(r);
}

// Высоту 
function ChangeHeight(r: Rectengle, height) {
    if (height > 0) {
        r.bottomRightPoint.y += height
    } else {
        r.topLeftPoint.y += height
    }
    Render(r);
}

// Ширину и Высоту
function ChangeHeightWidht(r: Rectengle, width, height) {
    ChangeWidth(r, width)
    ChangeHeight(r, height)
}

// Ф-ция по смещению прямоугольника по оси Х. Она принимает о-п и на сколько единиц его сдвинуть
function ChangeX(r: Rectengle, diff) {
    r.bottomRightPoint.x += diff;
    r.topLeftPoint.x += diff;
    Render(r);
}

// По У
function ChangeY(r: Rectengle, diff) {
    r.bottomRightPoint.y += diff;
    r.topLeftPoint.y += diff;
    Render(r);
}

// И по Х и по У
function ChangeXY(r: Rectengle, diffX, diffY) {
    changeX(r, diffX)
    changeY(r, diffY)
}

// Ф-ция для проверки, находится ли точка внутри прямоугольника. Она принимает о-п и точку
function check(r: Rectengle, value: Point) {
    let minX = r.bottomRightPoint.x > r.topLeftPoint.x ? r.topLeftPoint.x : r.bottomRightPoint.x
    let maxX = r.bottomRightPoint.x < r.topLeftPoint.x ? r.topLeftPoint.x : r.bottomRightPoint.x
    if (value.x < minX || value.x > maxX) {
        return false
    }

    let minY = r.bottomRightPoint.y > r.topLeftPoint.y ? r.topLeftPoint.y : r.bottomRightPoint.y
    let maxY = r.bottomRightPoint.y < r.topLeftPoint.y ? r.topLeftPoint.y : r.bottomRightPoint.y
    if (value.y < minY || value.y > maxY) {
        return false
    }

    return true
}