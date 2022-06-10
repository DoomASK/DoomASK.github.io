'use strict';
/**
 * возвращает дробную часть х
 * @param {nuber} x число
 * @returns number
 */
function getDecimal(num) {
    let a = num.toString();
    a = a.slice(a.indexOf("."));
    
    let str = 0 + a;
    if (Number(num) < 0) {
        str = 1 - Number(str);
        str = str.toFixed(a.length - 1);
    }
    return Number(str);
}
/**
 * возвращает строку с заглавным первым символом
 * @param {string} str строка
 * @returns string
 */
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}
/**
 * проверяет на наличие ххх и viagra
 * @param {string} str строка
 * @returns bool
 */
function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))
        return true;
    else return false;
}
/**
 * сокращает строчку до макс знаков, ставит ... в конце
 * @param {string} str строка
 * @param {number} maxlength длинна строки
 * @returns bool
 */
function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}
/**
 * возвращает строку без -
 * @param {string} str строка
 * @returns string
 */
function camelize(str) {
    let id;
    while (str.includes("-")) {
        id = str.indexOf('-');
        str = str.slice(0, id) + str[id + 1].toUpperCase() + str.substring(id + 2);
    }
    return str;
}

function fibs(N) {
    let a = [];
    let str = '';
    if (!Number.isNaN(N))
        if (N == 0) str = 0;
        else
            for (let j = 0; j < N; ++j) {
                a[j] = fib(j);
                str += a[j] + ' ';
            }
    else str = {};

    return str;

    function fib(j) {
        let a = 1n;
        let b = 1n;
        let c;
        if (j == 0) return 0;
        if (j == 1) return 1;
        if (j == 2) return 1;
        for (let i = 3; i <= j; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        if (b == 1n)
            b = 0;
        return b;
    }
}
/**
 * возвращает reverse массив
 * @param {array} arr неупорядочный массив чисел
 * @returns array
 */
function arrReverseSorted(arr){
let arr_reserve=[];
arr_reserve=arr.slice();

    arr_reserve.sort((a, b) => b - a);

alert(arr_reserve);
}
/**
 * возвращает сумму всех аргументов
 * @returns number
 */
function sum() {
    let result = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
