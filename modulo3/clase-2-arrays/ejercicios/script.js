// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números y devuelva el menor de ellos. Ejemplo:

const numeros = [5, 7, 99, 34, 54, 2, 12];
//console.log(numeros);

const obtenerMenor = (arrayNumeros) => {
  const arrayOrdenado = arrayNumeros.sort((a, b) => {
    return a - b;
  });
  const numeroMenor = arrayOrdenado[0];
  return numeroMenor;
};

// console.log(obtenerMenor(numeros)); // 2
// console.log(obtenerMenor([45, 6, 87, 32, 48, 67, 250])); // 6

// Crear una función 'contiene' que tome como argumentos un número 'numero' y un array de números 'numeros' y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

const contiene = (numero, numeros) => {
  return numeros.includes(numero);
};

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])); // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])); // false

// obtenerChatStatus(usuarias)
// Crear una función 'obtenerChatStatus' que tome como argumento un array de strings 'usuarias' y devuelva un string con el status del chat. Las reglas son:

const obtenerChatStatus = (usuarias) => {
  if (usuarias.length === 1) {
    return `${usuarias[0]} está conectada`;
  } else if (usuarias.length === 2) {
    const usuariasConectadas = usuarias.join(" y ");
    return `${usuariasConectadas} están conectadas`;
  } else {
    return `${usuarias[0]}, ${usuarias[1]} y ${
      usuarias.length - 2
    } persona(s) estan conectadas`;
  }
};

// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas

// console.log(obtenerChatStatus(["Ada"])); // 'Ada está conectada'
// console.log(obtenerChatStatus(["Ada", "Grace"])); // 'Ada y Grace están conectadas'
// console.log(obtenerChatStatus(["Ada", "Grace", "Marie", "Lore", "Sofi"])); // 'Ada, Grace y 1 persona(s) más están conectadas'

// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

const filtrarPorLongitudMayorA = (longitud, palabras) => {
  const palabrasFiltradas = [];

  if (palabras[0].length > longitud) {
    palabrasFiltradas.push(palabras[0]);
  }
  if (palabras[1].length > longitud) {
    palabrasFiltradas.push(palabras[1]);
  }
  if (palabras[2].length > longitud) {
    palabrasFiltradas.push(palabras[2]);
  }
  if (palabras[3].length > longitud) {
    palabrasFiltradas.push(palabras[3]);
  }
  if (palabras[4].length > longitud) {
    palabrasFiltradas.push(palabras[4]);
  }
  if (palabras[5].length > longitud) {
    palabrasFiltradas.push(palabras[5]);
  }

  return palabrasFiltradas;
};

//Ejemplo:

console.log(
  filtrarPorLongitudMayorA(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
  ])
);
// ['remolacha', 'sorpresa', 'verde']
