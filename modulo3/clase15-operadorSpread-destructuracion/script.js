// DESTRUCTURACION
// Permite descomprimir valores de arrays o propiedades de objetos en variables distintas.

const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
const finde = ["sabado", "domingo"];

// let dia1 = diasSemana[0];
// let dia2 = diasSemana[1];
// let dia3 = diasSemana[2];
let [primerDia, , , , ultimoDia] = diasSemana;
let [dia1, ...arr] = diasSemana;
const todaSemana = [...diasSemana, ...finde];
let [cursada1, , cursada2, , cursada3] = todaSemana;

//console.log(todaSemana);
//console.log(cursada1, cursada2, cursada3);
//console.log(primerDia, ultimoDia);
//console.log(diasSemana);
//console.log(dia1, arr);

const usuario = {
  id: "shxycuivkdsm4865467",
  name: "Juan",
  lastName: "Lopez",
  email: "juanlopez@gmail.com",
};

const estudios = {
  primario: "completo",
  secundario: "completo",
  terciario: "en curso",
};
//console.log(estudios);

let { id, name, lastName, email } = usuario;
let { terciario, primario, secundario } = estudios;

const estudiante = { ...usuario, ...estudios };
//console.log(primario, terciario, secundario);

//console.log(estudiante);

estudiante.terciario = "completo";

//console.log(estudiante);
// console.log(name);
// console.log(lastName);
// console.log(email);

//`<h1>${nombre}>/h1>`;

// Operador spread
//concatenar arrays

//const todaSemana = [...diasSemana, ...finde];
//console.log(todaSemana);

//fusionar o clonar objetos

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  b: 3,
  c: 4,
};

const nuevoObj = { ...obj1, ...obj2 };
//console.log(nuevoObj);

// Operador rest
const sumar = (a, b, ...resto) => {
  let result = a + b;
  for (let n of resto) {
    result += n;
  }
  return result;
};

//console.log(sumar(10, 6, 8, 7, 1, 5));

const usuarios = [
  {
    name: "Lucia",
    lastName: "Torres",
    email: "luciatorres@gmail.com",
  },
  {
    name: "Maria",
    lastName: "Perez",
    email: "mariaperez@gmail.com",
  },
  {
    name: "Pedro",
    lastName: "Ramos",
    email: "pedroramos@gmail.com",
  },
];

//console.log(usuarios);
//usuarios.push(usuario);
let nuevoArr = [...usuarios, usuario];
//console.log(usuarios);
//console.log(nuevoArr);

// let fruta = "naranja";
// let color = fruta;
// color = "verde";
// console.log("fruta", fruta);
// console.log("color", color);

// let colores = ["verde", "rojo", "azul"];
// let colors = colores;
// colors.push("amarillo");
// console.log("colorEs", colores);
// console.log("colors", colors);

const vehiculo = {
  marca: "Ford",
  color: "Blanco",
  modelo: "Fiesta",
  patente: "abc854",
};

const { marca, color, patente, modelo: model } = vehiculo;

console.log(marca, color, model);

let auto = { ...vehiculo };

auto.marca = "Toyota";
console.log(vehiculo);
console.log(auto);
