// Entorno de ejecucion, el navegagor que ionterpreta nuestro codigo.
// objeto WINDOW que nos provee metodos como: 
//let nombre = prompt('Ingrese su nombre')
//alert(`el nombre ingresado es ${nombre}`)


// DOM 
// document object model

const inputNombre = document.getElementById('name'); // me devuelve UN elemtno html
//console.log(inputNombre)
const parrafos = document.getElementsByTagName('p'); // devuelve una lista de html elements
//console.log(parrafos)
const listaDeParrafosRojos = document.getElementsByClassName('red'); // devuelve una lista de html elements
//console.log(listaDeParrafosRojos) // lista de elementos html que comparten la clase 'red'
const parrafos2 = document.querySelector('.parrafo'); // busca por clase de css
const input = document.querySelector('#name'); // busca por ID

//query selector devuelve una lista de nodos

//console.log(parrafos2)
const todosParrafos = document.querySelectorAll('.parrafo')
//console.log(todosParrafos)

// console.log(listaDeParrafosRojos[0].classList)
// console.log(listaDeParrafosRojos[0].innerText)

const parrafosTag = document.getElementsByTagName('p');
// console.log('Estos los fui a buscar con tagName',parrafosTag)
const parrafosQuery = document.querySelectorAll('p');
// console.log('Estos los fui a buscar con query selector', parrafosQuery)

inputNombre.setAttribute('maxlength', '30')
inputNombre.setAttribute('minlength', '10')
inputNombre.removeAttribute('key')

//const imgUrl = prompt('Ingrese la url de su imagen elegida')
const imagen = document.getElementById('meme-img')

//imagen.setAttribute('src', imgUrl)

listaDeParrafosRojos[0].style.color = 'red';
listaDeParrafosRojos[0].style.fontSize = '40px'
listaDeParrafosRojos[0].style.textDecoration = 'underline'


const parrafoVerde = document.getElementById('parrafo-verde')

parrafoVerde.classList.remove('green')
parrafoVerde.classList.add('green')

const titulo = document.getElementsByTagName('h2');

titulo[0].classList.add('modo-oscuro')
titulo[0].classList.remove('titulo')