// esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

// esImpar(2) // false
// esImpar(3) // true

const esImpar = (numero) => {
    return (numero % 2) === 1
}; 

const esPar = (numero) => {
    return (numero % 2) === 0
};

//console.log(esImpar(15)); // true
//console.log(esImpar(346)); // false
//console.log(esPar(156)); // true
//console.log(esPar(349)); // false

// Operadores de igualdad

// dos == compara valor
// tres === compara valor y TIPO DE DATO

//console.log(1 == '1'); //true
//console.log(1 === '1'); //false





//CONDICIONALES

// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// Operadores relacionales
// > mayor que
// < menor que
// = igual que 

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if(edad >= 15) {
        console.log('se cumple la condicion y el usuario es mayor de edad')
        return true;
    } else if(tieneAutorizacion) {
        console.log('no es mayor de edad pero si se cumple la condicion de tener autorizacion')
        return true;
    } else {
        console.log('no se cumple ninguna condicion, el usuario no puede ver la pelicula')
        return false;
    }    
}

//console.log(puedeVerPelicula(12, false)) // false
//console.log(puedeVerPelicula(12, true))  // true
//console.log(puedeVerPelicula(16, false)) // true
//console.log(puedeVerPelicula(18, true)) // true