// BUCLES => son estructuras repetitivas que iteran sobre un array
// bucle for recibe 3 parametros:
//-la posicion inicial, desde donde comienza a recorer,
//-la psicion final, hasta donde va a recorrer,
//-el incremento, de que forma voy a contar, (de uno en uno, de dos en dos, etc)

// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.
const palabrasArray = ["dia", "remolacha", "azul", "sorpresa", "te", "verde"];

const filtrarPorLongitudMayorA = (longitud, palabras) => {
  const palabrasFiltradas = [];

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > longitud) {
      palabrasFiltradas.push(palabras[i]);
    }
  }

  //console.log(palabrasFiltradas);
  return palabrasFiltradas;
};

palabrasArray.push("termometro");
palabrasArray.push("gato");

filtrarPorLongitudMayorA(4, palabrasArray);

// gano(tragamonedas)
// Crear una función gano que tome como argumento un array 'tragamonedas' con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

const gano = (simbolos) => {
  for (let i = 0; i < 5; i++) {
    if (simbolos[i] !== simbolos[0]) {
      return false;
    }
  }

  return true;
};

//console.log(gano(["⭐️", "⭐️", "⭐️", "💫", "✨"])); // false
//console.log(gano(["💫", "💫", "💫", "💫", "💫"])); // true
//console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"])); // true

// comer(plantas)
// Crear una función comer que tome por parámetro un string 'plantas' que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

const comer = (plantas) => {
  console.log(plantas);
};

//comer("🐰🥕🥬🥕🚫"); // ''
// comer("🥕🥬🐰🥕🥕🥕🚫"); // '🥕🥬'
// comer("🐰🥕🥬🥕🚫🥕"); // '🥕'
// comer("🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷"); // '🌱🥕🌱🌷'

// BUCLES FOR IN / FOR OF
// for in itera sobre objetos
// for of itera sobre arrays

const listaAlumnas = document.getElementById("listaAlumnas");

const alumnasArray = ["Maria Lopez", "Veronica Luna", "Florencia Perez"];
const colores = ["rojo", "verde", "azul"];

const crearLista = (lista) => {
  //   for (let i = 0; i < alumnas.length; i++) {
  //     let liAlumna = document.createElement("li");
  //     let nameAlumna = document.createTextNode(`${alumnas[i]}`);

  //     liAlumna.appendChild(nameAlumna);
  //     listaAlumnas.appendChild(liAlumna);
  //   }

  for (let elemento of lista) {
    let li = document.createElement("li");
    li.innerText = `${elemento}`;
    listaAlumnas.appendChild(li);
  }
};

crearLista(alumnasArray);
crearLista(colores);
