//Ejercicio 1
// Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (...spread operator).

const delUnoAlTres = [1, 2, 3];

const delUnoAlCinco = [...delUnoAlTres, 4, 5]; // ACA LA SOLUCION

console.log(delUnoAlCinco); // [1, 2, 3, 4, 5]

// Ejercicio 2
// A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’
const arrayDado = ["UNO", "DOS", "TRES"];

const nuevoArray = ["CERO", ...arrayDado, "CUATRO"]; // ACA LA SOLUCION

console.log(nuevoArray); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

// Ejercicio 3
// Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.
const frase0 = ["¡", "Hola"]; //...frase0 '!' 'Hola'
const frase1 = [",", " ", "Mundo"]; //...frase1 ','
const frase2 = ["!"];

//const frase = [frase0 + frase1 + frase2];
const fraseCompleta = [...frase0, ...frase1, ...frase2]; // ACA LA SOLUCION
//console.log(frase.join(""));
console.log(fraseCompleta.join("")); // ¡Hola, Mundo!

//DESTRUCTURING
// Ejercicio 1
// Crear una función (arrow function) llamada mostrarInfo
// mostrarInfo recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
// Tenés que usar destructuring dentro de la función.
const persona = { nombre: "Ada", apellido: "Lovelace", edad: 35 };

const mostrarInfo = (obj) => {
  let { nombre, apellido } = obj;
  return `Tu nombre completo es ${nombre} ${apellido}`;
}; // ACA LA SOLUCION

console.log(mostrarInfo(persona)); // Tu nombre completo es Ada Lovelace
