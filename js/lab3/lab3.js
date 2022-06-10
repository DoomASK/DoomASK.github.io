'use strict';

function getDecimal(num) {
    let a = num.slice(num.indexOf('.'));
    if (num.indexOf(".") == -1) {
        return 0;
    }
    let str = 0 + a;
    if (Number(num) < 0) {
        str = 1 - Number(str);
        str = str.toFixed(a.length - 1);
    }
    return str;
}

function ucFirst(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))
        return true;
    else return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}

function camelize(str) {
    let id;
    while (str.includes("-")) {
        id = str.indexOf('-');
        str = str.slice(0, id) + str[id + 1].toUpperCase() + str.substring(id + 2);
    }
    return str;
}


 function fibs(N) {

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
s array

function arrReverseSorted(arr){
let arr_reserve=[];

arr_reserve=arr;
    arr_reserve.sort((a, b) => b - a);

alert(arr_reserve);
}

function sum() {
    let result = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
