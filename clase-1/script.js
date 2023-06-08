var nombre_empleado = 'Sofia';
var nombre2 = 'Lore';
//var ya no se utiliza

let apellido = 'Ferrer';
const mensaje = 'mensaje de prueba "hola"';
console.log(apellido)
apellido = 'Petriella'
// mensaje = 'hola, bienvenide'; 
//a las constantes no se les puede cambiar el valor
console.log(apellido)

// TIPOS DE DATOS

//datos primitivos
//string = cadenas de caracteres
//number = numeros
//boolean = true / false
//undefined = no definido
//null = nulo
//NaN = Not a Number

let uno;
let dos = '1'

console.log(uno)

////////////// 

// let name = prompt('Ingresa tu nombre', 'nombre')
// let lastName = prompt('Ingresa tu apellido', 'apellido')
// let age = prompt('Ingresa tu edad', 'edad')

// console.log('nombre', name)
// console.log('apellido', lastName);
// console.log('edad', age)

// alert(`Hola ${name}`)      

let primerNumero = prompt('ingrese un numero', '')
let segundoNumero = prompt('ingrese un numero para ser sumado', '')
let resultado = Number(primerNumero) - Number(segundoNumero);

alert(`El resultado es ${resultado}`)

