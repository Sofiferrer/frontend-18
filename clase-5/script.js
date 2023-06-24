// Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee

//  contarPalabras('javascript')
// 1
//  contarPalabras('ada lovelace')
// 2
//  contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')

// const contarPalabrasCorto = (mensaje) => {
//     return mensaje.split(' ').length  
// }

const contarPalabras = (mensaje) => {
    let mensajeCortado = mensaje.split(' ')
    let num = mensajeCortado.length
    return num
}

//console.log(contarPalabras('javascript'));
//console.log(contarPalabras('ada lovelace'));
//console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));

//CONDICIONALES II
// operadores && => y , || => or 


// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (color) => {
    if (color.toLowerCase() === 'verde') {
        return true
    } else if (color.toLowerCase() === 'rojo' || color.toLowerCase() === 'amarillo') { 
        return false
    } else {
        return alert(`Error: color de semáforo ${color} es inválido`)
    }
}

puedeAvanzar('verde')     // true
puedeAvanzar('amarillo')  // false
puedeAvanzar('rojo')      // false
//puedeAvanzar('lila')      // 'Error: color de semáforo inválido'
//puedeAvanzar('frutilla')  



// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRangoAtigua = (valor, minimo, maximo) => {
    if (valor >= minimo) {
        if (valor <= maximo) {
            return true
        }
    }
    return false
}

const estaEnRango = (valor, minimo, maximo) => {
    if (valor >= minimo && valor <= maximo) {        
        return true;        
    }
    return false
}

// console.log(estaEnRango(3, 1, 10))  // true
// console.log(estaEnRango(1, 1, 10))  // true
// console.log(estaEnRango(10, 1, 10)) // true
// console.log(estaEnRango(12, 1, 10)) // false
// console.log(estaEnRango(-3, 1, 10)) // false


//SWITCH 

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

const semaforo = (color) => {
    let puedePasar;
    switch (color) {
        case 'verde':
            puedePasar = true;
            break;
        case 'amarillo':
            puedePasar = false;
            break;
        case 'rojo':
            puedePasar = false;
            break;
        default:
            puedePasar = 'color invalido'
            break;
    }
    return puedePasar
};

// console.log(semaforo('rojo'));
// console.log(semaforo('frutilla'));
// console.log(puedePasar)
//semaforo('rojo') vale false


//SWITCH

// switch (color) {
//     case 'verde':
    
//         break;
//     case 'amarillo':

//         break;
//     case 'rojo':
       
//         break;
//     default:
     
//         break;
// }


// const ocultarContrasenia=(contrasenia)=>{
//     return contrasenia.toString().replace(/[0-9]/g, '*')
// };

   
// console.log(ocultarContrasenia(123456));
// console.log(ocultarContrasenia(111222333));
 

// const aHackerSpeak= (str)=>{
//     return str.toString().replace(/[iI]/g,'1').replace(/[eE]/g,'3').replace(/[aA]/g,'4').replace(/[sS]/g,'5').replace(/[oO]/g,'0');
//   }

// console.log(aHackerSpeak('javascript'))
// console.log(aHackerSpeak('soy una hacker'))
// console.log(aHackerSpeak('ADA LOVELACE'))

