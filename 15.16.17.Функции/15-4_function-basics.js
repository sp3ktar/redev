'use strict'

function ShowPow(x,n){
  if(n>0){
  return x**n
  }else{
  return n='Введите число больше "0"'
  }
}

let x = prompt('Введите "X"',3)
let n = prompt('Введите степень "n"',2)
alert(ShowPow(x,n))

x = prompt('Введите "X"',3)
n = prompt('Введите степень "n"',3)
alert(ShowPow(x,n))

x = prompt('Введите "X"',1)
n = prompt('Введите степень "n"',100)
alert(ShowPow(x,n))