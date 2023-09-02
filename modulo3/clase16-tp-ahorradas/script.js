const traerDatos = () => {
  return JSON.parse(localStorage.getItem("datos"));
};

const subirDatos = (datos) => {
  localStorage.setItem("datos", JSON.stringify({ ...traerDatos(), ...datos }));
};

const datos = traerDatos() || {
  categorias: [],
  operaciones: [],
};

const randomId = () => self.crypto.randomUUID();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const traerCategorias = () => {
  return traerDatos()?.categorias;
};

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

const llenarSelect = (categories) => {
  $$(".categorias-select").forEach((select) => {
    select.innerHTML = "";
    for (let { nombre, id } of categories) {
      select.innerHTML += `<option value="${id}">${nombre}</option>`;
    }
  });
};

const listaCategorias = (categorias) => {
  console.log(categorias);
  $("#categorias").innerHTML = "";
  for (let { nombre, id } of categorias) {
    $(
      "#categorias"
    ).innerHTML += `<li class="is-flex is-justify-content-space-between">
    <p>${nombre}</p>
    <div>
      <button onclick="showEditCategory('${id}')" id="${id}" class="is-primary edit-btn">Editar</button>
      <button onclick="removeCategory('${id}')" id="${id}" class="is-primary">Eliminar</button>
    </div>
    </li>`;
  }
};

const obtenerCategoria = (idCategoria, categorias) => {
  return categorias.find((categoria) => categoria.id === idCategoria);
};

const showEditCategory = (id) => {
  $("#vista-editar-categoria").classList.remove("is-hidden");
  let categoriaAEditar = obtenerCategoria(id, traerCategorias());
  $("#editar-categoria-input").value = categoriaAEditar.nombre;
  $("#editar-categoria-boton").addEventListener("click", () =>
    editCategory(categoriaAEditar.id)
  );
};

const editCategory = (id) => {
  let nuevaCategoria = {
    id: id,
    nombre: $("#editar-categoria-input").value,
  };
  let categoriasActualizadas = traerCategorias().map((categoria) =>
    categoria.id === id ? { ...nuevaCategoria } : categoria
  );
  listaCategorias(categoriasActualizadas);
  llenarSelect(categoriasActualizadas);
  subirDatos({ categorias: categoriasActualizadas });
};

llenarSelect(traerCategorias());
listaCategorias(traerCategorias());

$$(".vista").forEach((vista) => console.log(vista.id));

const showVista = (vistaAMostrar) => {
  $$(".vista").forEach((vista) => vista.classList.add("is-hidden"));
  $(`#${vistaAMostrar}`).classList.remove("is-hidden");
};

$("#ver-categorias").addEventListener("click", () =>
  showVista("vista-categoria")
);

$("#ver-balance").addEventListener("click", () => showVista("vista-balance"));
