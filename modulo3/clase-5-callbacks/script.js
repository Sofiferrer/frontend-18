// CALLBACKS 
// Un callback no es más que una función que se pasa como argumento de otra función, y que será invocada para completar algún tipo de acción. El propósito principal de una callback es ejecutar código en respuesta a un evento. Estos eventos pueden ser iniciados por el usuario, como hacer click con el mouse o escribir. O pueden ser la respuesta de una funcion asincrona. 


// crearUsuario(callback)
// Crear una funcióm crearUsuario que reciba como argumento una callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.

// const confirmarCreacion = () => alert(`Usuario creado!`) // callback

// crearUsuario = (callback) => {
//     const nombreUsuario = prompt('Ingrese su nombre de usuario');
//     callback();
// }

// crearUsuario(confirmarCreacion)


// validarUsuario(validador)
// Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La funci´ón validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// que no tenga espacios
// que tenga más de X caracteres
// que no tenga números
// que tenga mayúsculas
// validarUsuario(tieneMayusculas)

const validadorMinLength = (string) => {
    // REFACTORIZACION = operador ternario
    return string.length > 5 ? true : false;
    //forma larga
    // if (string.length > 5) {
    //     return true
    // } else {
    //     return false
    // }
}

const validadorMaxLength = (string) => {
    return string.length < 20 ? true : false;
}

// const validarUsuario = (callback) => {
//  const nombreUsuario = prompt('Ingrese su nombre de usuario');

// return callback(nombreUsuario) ? alert(`bienvenidx ${nombreUsuario}`) : alert('Usuario incorrecto, intentelo nuevamente')

// //  if (callback(nombreUsuario)) {
// //     alert(`bienvenidx ${nombreUsuario}`)
// //  } else {
// //     alert('Usuario incorrecto, intentelo nuevamente')
// //  }
// }

//validarUsuario(validadorMinLength);
//validarUsuario(validadorMaxLength);



// map(array, callback)
// Crear una función map que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento obtenga el resultado lo pushee a un nuevo array devuelva el array final con el resultado de cada una de las llamadas al callback.

// Ejemplo:
//const numeros = [1, 2, 3]
const duplicar = (x) => x * 2

const map = (array, callback) => {
    const nuevoArray = [];
    for(let item of array) {
        nuevoArray.push(callback(item))
    }
    return nuevoArray;
}

//console.log(map(numeros, duplicar)) // [2, 4, 6]

// every(array, callback)
// Crear una función every que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento devuelva true si todas las llamadas al callback devolvieron true
// Ejemplo:

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0

const every = (array, callback) => {
    for (let item of array) {
        if (!callback(item)) {
            return false
        }
    }
    return true
}

console.log(every(numeros, multiploDe10)) // false
console.log(every(numeros, esPositivo)) // true