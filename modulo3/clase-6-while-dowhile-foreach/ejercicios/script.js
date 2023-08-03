// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

const usuario = "Florencia";
const contrasenia = "hola1234";
let intentos = 0;

// while (intentos < 3) {
//   let user = prompt("Ingrese su usuario");
//   let password = prompt("Ingrese su contrasenia");
//   if (usuario === user && contrasenia === password) {
//     alert("Bienvenida!!");
//     break;
//   }
//   console.log(user, password);
//   intentos++;
// }
// alert("Error");

// Cara o cruz
// -Crear un programa que permita escoger entre cara o cruz.
// -El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no.
// -El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0.
// -También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar.
// -Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let rondasAcertadas = 0;
let salir = "";

// while (salir !== "SALIR") {
//   let jugada = prompt(
//     "Ingrese CARA, CRUZ o SALIR si desea salir del juego"
//   ).toUpperCase();
//   let jugadaPrograma = getRandomInt(2);
//   if (
//     (jugadaPrograma === 0 && jugada === "CARA") ||
//     (jugadaPrograma === 1 && jugada === "CRUZ")
//   ) {
//     rondasAcertadas = rondasAcertadas + 1;
//     alert(`Acertaste! Van ${rondasAcertadas} rondas acertadas`);
//   } else if (jugada === "SALIR") {
//     alert(`Acertaste ${rondasAcertadas} rondas, Gracias por jugar!`);
//   } else {
//     rondasAcertadas = 0;
//     alert("No acertaste");
//   }

//   salir = jugada;
// }

// Realiza un programa que le pida al usuario que teclee la 'letra magica' A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes

// let letra = "";

// do {
//   letra = prompt("Ingrese la letra magica");
// } while (letra !== "A");
// alert(`Acertaste! La letra magica es ${letra}`);

// removerDuplicados(array)
// Crear una función removerDuplicados que tome como argumento un array 'array' y que devuelva un array con los mismos valores de array pero sin valores duplicados.

const removerDuplicados = (arr) => {
  let sinDuplicados = [];
  arr.forEach((num, index) => {
    console.log(index);
    if (!sinDuplicados.includes(num)) {
      sinDuplicados.push(num);
    }
  });
  return sinDuplicados;
};

// console.log(removerDuplicados([1, 1, 1])); // [1]
// console.log(removerDuplicados([1, 1, 2, 2, 3, 3])); // [1, 2 ,3]
//console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]

const removerDuplicados2 = (array) => {
  return array.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

//console.log(removerDuplicados2([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]

// repetirLetras(palabra, cantidad)
// Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

const repetirLetras = (palabra, cantidad) => {
  let nuevaPalabra = "";
  for (let letra of palabra) {
    nuevaPalabra = nuevaPalabra + letra.repeat(cantidad);
  }
};

repetirLetras("hola", 2); // 'hhoollaa'
repetirLetras("ada", 3); // 'aaadddaaa'
repetirLetras("ah!", 5); // 'aaaaahhhhh!!!!!'
repetirLetras("basta", 1); // 'basta'
