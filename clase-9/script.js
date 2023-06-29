//EVENTOS, acontecimientos, interacciones con elementos de un sitio web o una app

// Event handler
const caja = document.getElementById('box')
const boton = document.getElementById('boton')
let colorcito;

const cajaDelInput = document.getElementById('otra-box')

const cambioDeColor = (color) => {
  console.log(color)
  caja.style.backgroundColor = color
}

boton.addEventListener('click', () => cambioDeColor(colorcito));
boton.addEventListener('click', () => modoOscuro())

// Eventos de mouse y teclado
// El objeto Event

const input = document.getElementById('my-input');

const obtenerColor = (e) => {
  colorcito = e.target.value;
}

const modoOscuro = () => {
  cajaDelInput.style.backgroundColor = 'rgb(18,15,20)'
}

input.addEventListener('input', (evento) => obtenerColor(evento))
