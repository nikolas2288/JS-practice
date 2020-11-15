// 1) Написать функцию, которая принимает 2 строки и сравнивает их длину.
// Функция возвращает 1, если в первой строке больше символов, чем во второй; 
//-1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины. 
function comparesLength(textOne = prompt(''), textTwo = prompt('')) {
    console.log(textOne);
    if (textOne.length > textTwo.length) {
        console.log(1);
    } else if (textOne.length == textTwo.length) {
        console.log(0);
    } else {
        console.log(-1);
    }
}
// comparesLength()
// 2) Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно
function checkSpan(text) {
    if (text === '100% бесплатно') {
        console.log('true');
        return true
    }
}
// checkSpan(prompt(''))

// 3)Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину.
//Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие. 
//Например: truncate(“Hello, world!”, 8) должна вернуть
//“Hello...”
function Truncate(text) {
    let widht = 'Hello, world! \n'
    let difference = text.length - widht.length
    if (widht.length < text.length) {
        widht += widht.slice(0, difference)
        return widht + '...'
    } else {
        return widht
    }    
}
// console.log(Truncate('Hello, worldHello'));

// 4) Написать функцию, которая проверяет, является ли переданная строка палиндромом.
function Palindrom(text) {
    let ofString = text + '' // конвертируем в строку
    let len = ofString.length // Длина строки
    for (let i = 0; i < Math.floor(len / 2); i++) { // Проходимся по длине стррки/2
        if (ofString[i] !== ofString[len - 1 - i]) { // Если ofString[i] не равен ofString[len - 1 - i], выводи false
            return false
        }
    }
    return true
}

// console.log(Palindrom(12321))
// console.log(Palindrom(123455))
// console.log(Palindrom(12345654321))
// console.log(Palindrom('level'))
// console.log(Palindrom('leveel'))
// console.log(Palindrom('sdnhaleveel'))


// 5) Написать функцию, которая возвращает самое длинное
// слово из предложения.
function returnBigText(string) {
    let text = string
    let array = text.split(' ')
    let firstArray = array[0] // index Привет
    for (let index = 0; index < array.length; index++) {
        let element = array[index]
        if (firstArray.length  <  element.length) {
            firstArray = element
        }
    }
    console.log(array)
    console.log(`Итог: ${firstArray}`)
}
// returnBigText('Привет, мир. Как дела?')
