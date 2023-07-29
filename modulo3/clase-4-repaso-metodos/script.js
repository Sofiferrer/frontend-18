// Array.map()
// El método map() se utiliza para crear un nuevo arreglo a partir de una existente, aplicando una función a cada uno de los elementos del primer arreglo.

const numeros = [1, 2, 3, 4];
const duplicar = numeros.map((elemento) => elemento * 2);
//console.log(duplicar); // [2, 4, 6, 8]

const nombres = ["Sol", "Maria", "sofia", "florencia"];
// const nombresEnMayuscula = nombres.map((nombre) =>
//   nombre.replace(nombre.charAt(0), nombre.charAt(0).toUpperCase())
// );
//console.log(nombresEnMayuscula);

// Array.filter()
// El método filter() toma cada elemento de un arreglo y aplica una instrucción condicional contra él. Si este condicional devuelve true, el elemento se envía al arreglo de salida. Si la condición devuelve false, el elemento no se envía al arreglo de salida.

const pares = numeros.filter((item) => item % 2 === 0);
console.log(pares); // [2, 4]

const nombresEnMayuscula = nombres.filter(
  (nombre) => nombre.charAt(0) === nombre.charAt(0).toUpperCase()
);
console.log(nombresEnMayuscula);

// Array.reduce()
// El método reduce() reduce un arreglo de valores a un solo valor. Para obtener el valor de salida, ejecuta una función reductora en cada elemento del arreglo.
// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce(function (resultado, elemento) {
//   return resultado + elemento;
// }, 0);
// console.log(suma); // 10
