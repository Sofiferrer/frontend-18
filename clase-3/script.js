//METODOS DE STRINGS

let mensaje = 'Hola chicas esto es un mensaje';
let telefono = 114589625;
console.log(telefono, typeof(telefono))
let telefonoFijo = '11545846843'

// Para ver el largo de mi cadena de caracteres
console.log(mensaje.length); // devuelve un NUMERO

// Para cambiar a mayusculas mi cadena de caracteres
console.log(mensaje.toUpperCase()); // devuelva LA MISMA cadena de caracteres pero en mayuscula

// Para cambiar a minusculas mi cadena de caracteres
console.log(mensaje.toLowerCase()); // devuelve LA MISMA cadena de caracteres pero en minuscula

//Para cortar una cadena de caratceres recibe como parametro 2 valores, el inicio y el fin del recorte, el segundo parametro es opcional, y puede ser un numero negativo
console.log(mensaje.slice(0, 10));
console.log(mensaje.slice(5));
console.log(mensaje.slice(5, -1));
console.log(mensaje.slice(mensaje.length - 5));
console.log(mensaje.slice(-10, -1)); // devuelve una OTRO STRING con la porcion cortada de mi cadena de caracteres

// Si quiero saber si mi cadena de caracteres incluye algun caracter especifico
console.log(mensaje.includes('a')); //true
console.log(mensaje.includes('@')); //false
console.log(mensaje.includes('chica')); //true
console.log(mensaje.includes('z')); // devuelve un BOOLEANO true/false

// indexOf me devuelve el NUMERO de posicion de la primera coincidencia que encuentra
console.log(mensaje.indexOf('chicas'));
console.log(mensaje.indexOf('z'));

// replace recibe 2 parametros, el primero es la palabra o caracter a reemplazar y el segundo la palabra o caracter con la quiero reemplazar
// replace() reemplaza la primer coincidencia y replaceAll() reemplaza todas las coincidencias
console.log(mensaje.replace('chicas', 'chiques'))
console.log(mensaje.replaceAll('a', 'i'))


// toString convierte el tipo de dato a STRING
console.log(typeof(telefono)) //number
console.log(typeof(telefono.toString())) //string
console.log(telefono, telefono.toString())

telefono = telefono.toString()
console.log(telefono, typeof(telefono))

//METODOS DE NUMBERS

let edad1 = 45
let edad2 = 33
let edad3 = 47
let edad4 = 21
//Para convertir un dato a tipo NUMBER
console.log(Number(telefonoFijo));

// El objeto Math
// random devuelve un numero aleatorio entre 0 y 1
console.log(Math.random())

// min recibe valores numericos como parametro y me devuelve el menor
console.log(Math.min(edad1, edad2, edad3, edad4))

// max recibe valores numericos como parametro y me devuelve el mayor
console.log(Math.max(edad1, edad2, edad3, edad4))

// round redondea un numero decimal, hacia el entero mas cercano
console.log('ROUND', Math.round(0.949))

// ceil redondea un numero decimal, hacia arriba
console.log(Math.ceil(1.5))

// floor redondea un numero decimal, hacia abajo
console.log(Math.floor(1.5))

// isNaN nos devuelve un BOOLEANO true si el tipo de dato es NaN o un false si no lo es
console.log(isNaN(telefono)) //false
console.log(isNaN(NaN)) //true


