// Callbacks
// const mainContainer = document.getElementById('main-container')
// const resultado = document.createElement('p')

// const mostrar = (algo) => {
//     resultado.innerHTML = algo;
//     mainContainer.appendChild(resultado)
//     resultado.style.color = 'green'
// }

// const calculadora = (num1, num2, funcion) => {
//     let res = num1 + num2;
//     funcion(res)
// }

// calculadora(5, 5, mostrar);

// Propagación de eventos (bubbling) los eventos se propagan hacia arriba, a sus padres a menos que capturemos el objeto evento y le apliquemos el metodo .stopPropagation()

// Creando HTML

// Modificando el HTML
// innerHTML
// Templates de HTML

// Distinción entre validación de formulario del lado del cliente y del lado del servidor

// type: tener en cuenta que tipo de informacion quiero obtener de cada input y ponerle el type adecuado
// required: es un atributo que se agrega a la etiqueta input y lo hace un campo obligatorio
// minlength and maxlength: para validar largo en caracteres
// min and max: es para validar numeros minimos y maximos
// pattern: regular expression

const mailInput = document.getElementById("mail");
const boton = document.getElementById("submit-btn");

boton.addEventListener("click", () => enviarFormulario());

const enviarFormulario = () => {
  if (mailInput.value.includes("yahoo")) {
    alert("El formato de mail es muy antiguo");
  }
};
