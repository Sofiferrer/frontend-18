//FOR EACH
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.

const letras = ["a", "b", "c"];

// letras.forEach(function (element, index) {
//   console.log(element, index);
// });

// for (let i = 0; i < letras.length; i++) {
//   console.log(letras[i]);
// }

//WHILE
// Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

// let numero = 0;

// while (numero < 5) {
//   console.log(numero);
//   numero++;
// }

//DO WHILE
// La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

let result = "hola ";
let i = 6;

do {
  i = i + 1; //7
  result = result + i; //'7'
} while (i < 5);

console.log(result);
