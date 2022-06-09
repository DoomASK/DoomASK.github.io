'use strict';
/**
 * возводит x в n-ю степень
 * @param {nuber} x основание
 * @param {number} n степень
 * @returns x^n
 */
function pow(x,n){
  return x**n;  
}
/**
 * сумма всех чисел от 1 до n
 * @param {number} n предел суммирования
 * @returns 1+2+...+n
 */
function sumTo(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}
/**
 * факториал числа n
 * @param {number} n основание факториала
 * @returns n!
 */
function factorial(n){
 if(n>0)
   return (n*factorial(n-1));
   else 
     return 1;
  }
/**
 * находит n член последовательности Фибоначи
 * @param {number} n номер члена последовательности
 * @returns FIB[n]
 */
 function fib(n) {
  let a = 0n;
  let b = 1n;
 if (n==0) return a;
 if (n==1) return b;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
/**
 * сравнение х с y
 * @param {number} x 
 * @returns y>x?
 */
function compare(x){
  let res=(function(y){
    if (y>x) return false
      else if (y<x) return true
	else return null;
    
  })
  return res;
  
}
/**
 * рисует таблицу с cols столбцов до числа x
 * @param {number} num конечное число
 * @param {number} cols кол-во столбцов
 */
function printNumbers(num,cols) {
  let rows;
  let str="";
  let i;
  let j;
  let k;
  if (num % cols ==0) rows = num/cols;
	else rows = (Math.trunc(num/cols) + 1);
  for(i=0; i<rows; i++){
	  k=i;
	  for(j=0; j<cols; j++){
		  str+=k+" ";
		  k=k+rows;
		  if (k>num) break;
	  }
	  
	  console.log(str);
          str="";
  }
  }
