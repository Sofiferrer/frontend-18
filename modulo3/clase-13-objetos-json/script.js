// import data from "./colors.json" assert { type: "json" };
// console.log(data);

// El formato JSON
//javascript Object Notation(JSON) es un formato ligero para almacenar y transportar datos. A menudo se usa cuando se envían datos desde un servidor a una página web, también es autodescriptivo y fácil de entender. Dado que el formato JSON es solo texto, puede enviarse fácilmente hacia y desde un servidor, y cualquier lenguaje de programación puede usarlo como formato de datos, es prácticamente compatible con todos los lenguajes de programación modernos de una forma u otra.

// La estructura de JSON se basa en dos estructuras básicas,

// *Una colección de pares clave/valor.
// *Una lista ordenada de valores.

// JSON permite 6 tipos de dato:
// - Array
// - Boolean
// - Null
// - Number
// - Object
// - String

//  JSON data in a javaScript variable
let user = '{"name": "Andre", "age": 19, "country": "Venezuela"}';

//METODOS
// JSON.stringify ==> transforma objetos de Js a string o JSON
// JSON.parse  ==> transforma un JSON a objeto de JS

// Converting JSON string into a javaScript object
let usuario = JSON.parse(user);
// console.log(usuario);
// console.log(usuario.name);

const newUser = {
  name: "Andre",
  age: 19,
  country: "Venezuela",
};

const userJSON = JSON.stringify(newUser);
//console.log(newUser);
//console.log(userJSON);

// Trabajando con Local Storage
//localStorage.clear(); // limpiar todo el local storage
//localStorage.setItem("usuarios", userJSON); // setear un item en local storage
//localStorage.getItem("usuarios"); // traer item del local storage
//localStorage.removeItem(); // eliminar un item del local storage

const bdUsers = localStorage.getItem("usuarios");
//console.log("base de datos user", bdUsers);
const userObj = JSON.parse(bdUsers);
//console.log("userObj", userObj);
//alert(`Bienvenide ${userObj.name}`);

// El objeto Date
// El objeto Date contiene un Number que representa los milisegundos transcurridos desde el 1 de Enero de 1970 UTC.

// Trabajando con fechas

const hoy = new Date();

console.log(hoy);
//console.log(hoy.getDate()); // devuelve el dia del mes en numero
// console.log(hoy.getMonth() + 1); // devuelve el mes en valor numerico
// console.log(hoy.getFullYear()); // devuelve los 4 digitos de un anio
// console.log(hoy.getHours()); // devuelve las horas en formato de 24hs
// console.log(hoy.getMinutes()); // devuelve los minutos en valor numerico de 0 a 59

//console.log(`${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`);
let operationDate = "";

const dateValue = document.getElementById("inputDate");

dateValue.addEventListener("change", () => {
  operationDate = new Date(dateValue.value);
  console.log(operationDate.getDate());
});
