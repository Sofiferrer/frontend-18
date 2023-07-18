// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), definí una función saludarGritando que reciba como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

const obtenerNombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`       // recibe 2 argumentos y devuelve UN string
}

const saludar = (nombre) => {
    return `Hola ${nombre}, un gusto conocerte`  // RECIBE un argumento y lo devuelve con saludo
}

const gritar = (string) => {
    return `¡${string}!`  // recibe 1 argumento y lo devuelve con signos !!
}

const saludarGritando = (name, lastname) => {
    const nombreCompleto = obtenerNombreCompleto(name, lastname);
    console.log(nombreCompleto)
    const saludo = saludar(nombreCompleto);
    console.log(saludo);
    console.log(gritar(saludo))
    return gritar(saludo);
}

const saludarGritando2 = (name, lastname) => {
    return gritar(saludar(obtenerNombreCompleto(name, lastname)));
}

// saludarGritando('Ada', 'Lovelace');
// saludarGritando('Lore', 'Petriella');
// saludarGritando('Sol', 'Gonzalez');
// saludarGritando('Coco', 'Talledo');


// Definí una función calcularPorcentaje que tome por parámetros un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

const calcularPorcentaje = (numero, porcentaje) => {
    return Number(numero) * Number(porcentaje) / 100
}

// Definí una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

const sumarPorcentaje = (num, por) => {
    return num + calcularPorcentaje(num, por)
}

// console.log(sumarPorcentaje(100, 15))
// console.log(sumarPorcentaje(10, 50))
// console.log(sumarPorcentaje(200, 10))

// esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

const esHoraValida = (string) => {
    console.log(string)
    const recorte = string.split(':');
    const horas = Number(recorte[0]);
    const minutos = Number(recorte[1]);
    if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59) {
        return true
    }
    return false
}

console.log(esHoraValida('12:23'));
console.log(esHoraValida('12:65'));
console.log(esHoraValida('28:05'));
console.log(esHoraValida('00:00'));
console.log(esHoraValida('2:10'));