'use strict'
/**
 * 
 * @param {number} num - число 
 * @returns - число
 */
function getDecimal(num) {
    return num - Math.floor(num); //округление вниз 
}
/**
 * 
 * @param {string} str - строка
 * @returns 
 */
function ucFirst(str) {
    // делаем заглавный первый символ и конкатенируем с остальной строкой
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * 
 * @param {string} str - строка
 * @returns 
 */
function checkSpam(str) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('viagra') ||
        strToLower.includes('xxx')) {
        return true;
    }
    return false;
}
/**
 * 
 * @param {string} str - строка
 * @param {nu} maxlength - длина строки
 * @returns 
 */
function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}'//мнгоготочие;
    return str;
}
/**
 * 
 * @param {string} str - строка
 * @returns 
 */
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
/**
 * 
 * @param {number} N - число элементов в массиве
 
 * @returns - элементы массива
 */
function fibs(t) {
            let arr = [];
            for (var p = 0; p < t; p++) {
               arr.push(fib(p));
            }
            return arr;
        }

    function fib(p) {
        let a = 1n;
        let b = 1n;
        //Исключения
        if (p == 0) return 0;
        if (p == 1) return 1;
        if (p == 2) return 1;
        for (let i = 3; i <= p; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
/**
 * 
 * @returns - сумма всех аргументов
 */
function sum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}
