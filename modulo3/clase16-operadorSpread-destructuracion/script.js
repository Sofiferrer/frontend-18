//datos {
//  theme: ''
//  categorias: [{
//                 id: '',
//                 nombre: ''
//              }],
//  operaciones: [{
//               categoria:'',
//               descripcion: '',
//               fecha:'',
//               id:'',
//               monto:'',
//               tipo:'',
//               }]
// }

//categorias = comida, servicios, salidas, transporte, educacion, trabajo

// const obtenerCategorias = () => {
//     return obtenerDatos().categorias;
//   };

//   const obtenerOperaciones = () => {
//     return obtenerDatos().operaciones;
//   };

const randomId = () => self.crypto.randomUUID();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const traerDatos = () => {
  return JSON.parse(localStorage.getItem("datos"));
};

// const subirDatos = () => {
//   localStorage.setItem("datos");
// };

const traerCategorias = () => {
  return traerDatos()?.categorias;
};

// let datos = {
//   operaciones: [],
//   categorias: [
//     {
//       id: randomId(),
//       nombre: "ropa",
//     },
//   ],
// };

// localStorage.setItem("datos", JSON.stringify(datos));

let categorias = traerCategorias() || [
  {
    id: randomId(),
    nombre: "comida",
  },
  {
    id: randomId(),
    nombre: "servicios",
  },
  {
    id: randomId(),
    nombre: "salidas",
  },
  {
    id: randomId(),
    nombre: "transporte",
  },
  {
    id: randomId(),
    nombre: "educacion",
  },
  {
    id: randomId(),
    nombre: "trabajo",
  },
];

console.log(categorias);

const llenarSelect = (categories) => {
  $$(".categorias-select").forEach((select) => {
    for (let { nombre, id } of categories) {
      select.innerHTML += `<option value="${id}">${nombre}</option>`;
    }
  });
};

llenarSelect(categorias);
$("#filtro-categoria").addEventListener("change", () => {
  console.log($("#filtro-categoria").value);
});
