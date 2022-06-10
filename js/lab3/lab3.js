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
    return (str[0].toUpperCase() + str.slice(1));
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

/**
 * возвращает массив заполненый числами фиббоначи до n-1'го номера
 * @param {number} N номер числа фиббоначи
 * @returns string
 */
 function fibs(N) {
     /**
 * возвращает число последовательности фиббоначи
 * @param {number} p номер числа фиббоначи
 * @returns number
 */
 function fib(p){
        let a = 0n;
        let b = 1n;
        //Исключения
        if (p==0) return a;
        if (p==1) return b;
        for (let i = 2; i <= p; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }
    let a = [];
    if (!Number.isNaN(N))
            for (let p = 0; p < N; ++p) {
                a[p] = fib(p);
            }
    else return NaN;
 
    return a;
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
