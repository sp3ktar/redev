<script>
'use strict';

let login = prompt('Введите логин');
let message;

(login == 'Сотрудник')? message='Привет' :
(login == 'Директор')? message='Здравствуйте':
(login == '')? message='Нет логина':
message='';

console.log(message);

</script>