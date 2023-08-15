const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let inputs = $$(".input");

// for (let input of inputs) {
//   input.classList.add("is-focused");
// }

const cursos = ["Frontend", "Backend", "QA testing", "Ux/Ui"];

const armarSelect = (listadoCursos) => {
  $("#classSelect").innerHTML = "";
  for (let curso of listadoCursos) {
    let option = document.createElement("option");
    option.setAttribute("value", curso);
    option.innerHTML = `${curso}`;
    $("#classSelect").appendChild(option);
  }
};
armarSelect(cursos);
const agregarCurso = () => {};

// $("#deleteBtn").addEventListener("click", () => {
//   console.log($("#classSelect").value);
//   let indice = cursos.indexOf($("#classSelect").value);
//   cursos.splice(indice, 1);
//   armarSelect(cursos);
// });

const birthdayInput = $("#birthInput");
//console.log(birthdayInput.value);

$("#birthInput").addEventListener("change", () => {
  console.log($("#birthInput").value);
});
// let today = new Date();
// console.log(today);

const inicializar = () => {
  const inputsFecha = $$('input[type="date"]');
  inputsFecha.forEach((input) => {
    input.valueAsDate = new Date();
  });
};

inicializar();

$("#addBtn").addEventListener("click", () => {
  //console.log("abrir modal");

  $(".modal").classList.add("is-active");
  $("#curseName").innerHTML = "";
});

const cerrarModal = () => {
  $(".modal").classList.remove("is-active");
};

$(".modal-close").addEventListener("click", cerrarModal);

$("#addCourse").addEventListener("click", () => {
  const nuevoCurso = $("#curseName").value;
  cursos.push(nuevoCurso);
  armarSelect(cursos);
  cerrarModal();
});

const curso = {
  nombre: "Frontend",
  horasDuracion: "140hs",
  profe: "Sofia Ferrer",
};

//console.log(curso);

let nuevosCursos = [];

nuevosCursos.push(curso);
//console.log(nuevosCursos);
