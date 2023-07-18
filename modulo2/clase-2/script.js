// const marca = 'Fiat';
// let modelo;
// let anio;
// let patente;
// let color;
// let motor;
// let naftero;

//prompt('mensaje', 'default')
//alert(`${nombre}`)

// function saludar(dato) {
//     console.log('¡Hola ' + dato + '!');
// }

// console.log(marca)

// saludar(nombrePersona);

//arrow function o  funciones flecha

// let primerNumero = Number(prompt('Ingrese el primer numero', 0));
// let segundoNumero = prompt('Ingese el segundo numero', 0);

// console.log(`el dato ingresado por el usuario es ${primerNumero} y es de tipo ${typeof(primerNumero)}`);
// console.log(`el dato ingresado por el usuario es ${segundoNumero} y es de tipo ${typeof(segundoNumero)}`);


// const typeOf = (variable) => {
//     '- chequear que tipo de dato es' variable
//     '-Devolver el tipo de dato'
// }


// const prompt = (mensaje, valorDefault) => {
//     '- abrir un modal con un' mensaje 'y un input con un' valorDefault;
//     '-tomar el' valorDefault 'del input';
//     '-validar que el dato ingresado sea un numero'
//     '-devolver' valorDefault;
// }


// const suma = (num1, num2) => {
//   return Number(num1 - num2)
// };

// suma(primerNumero, segundoNumero);


// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!


// const gritar = (str) => {
//     return `¡${str}!`
// }

// console.log(gritar('hola'));
// console.log(gritar('aaaaaaaaaa'));
// console.log(gritar('cocooooo'));


// obtenerDatosDeCiudad(nombre, poblacion, pais)
// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

console.log('soy un console log en la linea 71');

const obtenerDatosDeCiudad = () => {
    let ciudad = prompt('Ingrese su ciudad');
    let habitantes = Number(prompt('Ingrese cantidad de habitantes'));
    let country = prompt('Ingrese el pais');
    return `La ciudad de ${ciudad} tiene una población de ${habitantes} habitantes y está ubicada en ${country}`
};


console.log('hola');



console.log(obtenerDatosDeCiudad());


