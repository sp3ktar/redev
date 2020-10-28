'use strict'

let num = +prompt('Введите число от 1 до 4.', '');
let result

switch(num){
  case 1:
  result = 'зима'
  break
  case 2:
  result = 'весна'
  break
  case 3:
  result = 'лето'
  break
  case 4:
  result = 'осень'
}

console.log(result)