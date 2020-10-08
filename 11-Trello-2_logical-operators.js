<script>
'use strict'

let a = prompt('Введите значение 5, 0, -3 или 2.')

if(a == 0 || a == 2){
    a = +a + 7
  } else {
    a /= 10
  }

console.log(a);

</script>