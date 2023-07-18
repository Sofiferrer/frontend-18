// saludo
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

//const nombre = prompt('Ingrese un nombre');
const titulo = document.getElementById('titulo')

titulo.innerText = `Hola ${nombre}, bienvenide!!`

titulo.style.textAlign = 'center';
titulo.style.fontSize = '80px';
titulo.style.fontFamily = 'Helvetica';
titulo.style.color = 'pink';

//titulo.setAttribute('class', 'titulo-ejercicio')
titulo.classList.add('titulo-ejercicio')