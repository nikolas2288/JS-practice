let a = +prompt('', 5)
let b = +prompt('', 3)

function sum() {
    return a < b ? a : b;
}

let i = sum()
console.log(i);