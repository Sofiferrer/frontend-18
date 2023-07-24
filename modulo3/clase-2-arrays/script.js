/**** Arrays ****/

const elemntos = ["hola", 9, false, [1, 2, 3]];
// const nombre = "İstanbul";
// console.log(nombre.length);
// console.log(nombre.toLowerCase());
// console.log(nombre.toLocaleLowerCase());
//console.log(elemntos);

/* Acceder a nuestro Array */

//console.log(elemntos[1]);
//console.log(elemntos[3][1]);

/* Recorrer nuestro Array */

//***** PROPIEDAD */
/* length */
//console.log(elemntos.length);

/*********** MÉTODOS ***********/

const alumnas = ["Maria", "Carla", "Agustina"];
//console.log(alumnas);

/* push: Agrega un elemento al final de nuestro Array */
alumnas.push("Lore");
alumnas.push("Shari");
alumnas.push("Lore");

//console.log(alumnas);

/* pop: Elimina un elemento al final de nuestro Array */
//alumnas.pop();
//console.log(alumnas);

/* unshift: Agrega un elemento al comienzo de nuestro Array */
alumnas.unshift("Sol", "Fernanda");
alumnas.unshift("Coco");
//console.log(alumnas);

/* shift: Elimina un elemento al comienzo de nuestro Array */
//alumnas.shift();
//console.log(alumnas);

/* splice: Elimina uno o varios elementos de nuestro Array, recibe como parametros el indice desde donde comienza a 'cortar' y en segundo lugar la cantidad de elementos a 'cortar' */
//alumnas.splice(4, 2);
//console.log(alumnas);

/* join: Genera un string con los elementos de nuestro Array */
const listaAlumnas = alumnas.join(" ");
//console.log(listaAlumnas);
//console.log(alumnas);

/* concat: Une dos Arrays en uno */
const materias = ["matematicas", "historia", "filosofia"];

const curso = alumnas.concat(materias);
//console.log(curso);

/* slice: Genera una copia de una parte de nuestro Array */
const alumnasAprobadas = curso.slice(5, 8);
// console.log(alumnas);
// console.log(alumnasAprobadas);
// console.log(curso);

/* indexOf: Devuelve el número de índice de un elemento, en caso de haber mas de uno iguales, devuelve el primero que encuentra */
//console.log(alumnas.indexOf("Agustina")); // Esta en la posicion 5
//console.log(alumnas.indexOf("Lidia")); //-1 No esta

/* includes: devuelve true o false si un elemento existe en nuestro Array */

// console.log(alumnas.includes("Lidia"));
// console.log(alumnas.indexOf("Lore"));

/* reverse: Invierte el orden de nuestro Array */
//console.log(alumnas.reverse());

/* sort: Ordena los elementos de nuestro Array */
console.log(alumnas.sort());

const numeros = [
  5, 8, 4, 9, 5, 2, 6, 5, 8, 9, 5, 4, 8, 9, 58, 1, 64, 78, 1, 98,
];

numeros.sort(function (a, b) {
  return a - b;
});

// si usamos a-b ordena de menor a mayor y si usamos b-a ordena de mayor a menor

console.log(numeros);
