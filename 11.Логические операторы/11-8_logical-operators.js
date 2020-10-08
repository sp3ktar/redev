<script>
'use strict'

let login = prompt('Кто там?')
let passw 

if(login == 'Админ'){
  passw = prompt('Пароль?')
  if(passw == 'Я Главный'){
  alert('Здравствуйте!')
  } else if (passw == '' || passw == null){
  alert('Отменено2')
  } else {
  alert('Неверный пароль')
  }
} else if (login == '' || login == null){
  alert('Отменено1')
} else {
  alert('Я Вас не знаю')
}

</script>