// Ф-ция которая выводит рандомное число в массиве
let makeArray = (element: number) => {
    let arr: number[] = []
    for (let i = 0; i < element; i++) {
        arr.push(Math.trunc(Math.random() * 10))
    }
    return arr
}
// console.log(makeArray(Math.trunc(Math.random() * 10)));

// Ф-ция принимает массив и выводит его на Экран
function printInfo(array: number[]) {
    let info: string = ''
    for (let i = 0; i < array.length; i++) {
        info += array[i] + ' '
    }
    alert(info)
}
// printInfo(makeArray(3))

// Ф-цыя принимает массив и выводит только четные элементы
function EvenNum(array: number[]) {
    let info: string = ''
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            info += array[i] + ' '
        }
    }
    console.log(info);
}
// EvenNum(makeArray(10))

// Ф-ция которая принимает массив и возвращает сумму всех чисел
function Sum(arr: number[]) {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(sum)
}
// Sum(makeArray(10))

// ф-ция возвращает максимальный элемент
function EvenMaxNum(array: number[]) {
    let max: number = array[0]
    // for (let i = 0; i < array.length; i++) {
    //     let element = array[i]
    //     if (max < element) {
    //         max = element
    //     }
    // }
    Math.max(...array)
    console.log(max);
}
// EvenMaxNum(makeArray(10))

// Ф-ция добавления новго элемента в массив по указанному индексу 
function addElement(array: number[], element: number, index: number) {
    let newArr: number[] = []
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            newArr.push(element)
        }
        newArr.push(array[i])
    }
    return newArr
}

// ф-ция удаления
function delElement(array: number[], element: number, index: number) {
    let newArr: number[] = []
    for (let i = 0; i == array.length; i++) {
        if (index !== i) {
            newArr.push(array[i])
        }
    }
    return newArr
}

/*
Функция принимает 2 массива и возваращает новый массив, 
в котором собраны все элементы из двух массивов без повторений
*/
let arrOne = ['Mercedes', 'BMW', 'Audi']
let arrTwo = ['Tesla', 'Semerka', 'Audi']

function plusArray(arrayOne, arrayTwo) {
    let arrayResult = []
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayResult.indexOf(arrayOne[i]) == -1) {
            arrayResult.push(arrayOne[i])
        }
    }
    for (let i = 0; i < arrayTwo.length; i++) {
        if (arrayResult.indexOf(arrayTwo[i]) == -1) {
            arrayResult.push(arrayTwo[i])
        }
    }
    console.log(arrayResult);
}
// plusArray(arrOne, arrTwo)

/*
Ф-ция принимает 2 массива и возвращает новый массив, 
в котром собраны все общие элементы 
(то есть элементы, которые встречаются в первом и во втором массивах) без повторений.
*/
function commonArray(arrayOne, arrayTwo) {
    let arrayResult = []
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayTwo.indexOf(arrayOne[i]) != -1) {
            arrayResult.push(arrayOne[i])
        }
    }
    console.log(arrayResult);
}
// commonArray(arrOne, arrTwo)

/*
Ф-ция принимает 2 массива и возвращает новый массив,
в котром собраны все элементы из первого массива,
которых нет во втором массиве.
*/
function diffArray(arrayOne, arrayTwo) {
    let arrayResult = []
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayTwo.indexOf(arrayOne[i]) == -1) {
            arrayResult.push(arrayOne[i])
        }
    }
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne.indexOf(arrayTwo[i]) == -1) {
            arrayResult.push(arrayTwo[i])
        }
    }
    console.log(arrayResult);
}
// diffArray(arrOne, arrTwo)

// Создать массив фруктов и атсортировать его по алфавиту
let fruits = ['apple', 'orange', 'banana']
fruits.sort()

// Вывод на Экран с помощью document.write() в виде списка(С помощью тегов ul and li)
function printBody(array) {
    let buffer = '<ul>';
    for (let index = 0; index < array.length; index++) {
        buffer += '<li>';
        buffer += array[index]
        buffer += '</li>';
    }
    buffer += '</ul>';
    document.write(buffer)
}
// printBody(fruits)

// Поиск фруктов в массиве. Ф-ция принимает название фрукта, и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть неригистрозависимым
function search(array = prompt('Введите названия фрукта')) {
    fruits.map(function (value) {
        value.toLowerCase()
    })
    return fruits.indexOf(array.toLowerCase())
}
// alert(search())
