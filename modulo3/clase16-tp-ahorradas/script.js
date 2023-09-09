const traerDatos = () => {
  return JSON.parse(localStorage.getItem("datos"));
};

const subirDatos = (datos) => {
  localStorage.setItem("datos", JSON.stringify({ ...traerDatos(), ...datos }));
};

const randomId = () => self.crypto.randomUUID();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const traerCategorias = () => {
  return traerDatos()?.categorias;
};

const traerOperaciones = () => {
  return traerDatos()?.operaciones;
};

let operaciones = traerOperaciones() || [
  {
    id: randomId(),
    descripcion: "compras super",
    monto: 15000,
    tipo: "gasto",
    categoria: "comida",
    fecha: "",
  },
  {
    id: randomId(),
    descripcion: "salida cena",
    monto: 5000,
    tipo: "gasto",
    categoria: "salidas",
    fecha: "",
  },
  {
    id: randomId(),
    descripcion: "sueldo",
    monto: 150000,
    tipo: "ganancia",
    categoria: "trabajo",
    fecha: "",
  },
  {
    id: randomId(),
    descripcion: "carga sube",
    monto: 500,
    tipo: "gasto",
    categoria: "transporte",
    fecha: "",
  },
  {
    id: randomId(),
    descripcion: "ropa",
    monto: 15000,
    tipo: "gasto",
    categoria: "ropa",
    fecha: "",
  },
];

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
  subirDatos({ categorias: categoriasActualizadas });
  //actualizarVistas(traerDatos());
};

const actualizarVistas = (datos) => {
  listaCategorias(datos.categorias);
  llenarSelect(datos.categorias);
  listaOperaciones(datos.operaciones);
};

llenarSelect(categorias);
listaCategorias(categorias);

//$$(".vista").forEach((vista) => console.log(vista.id));

const showVista = (vistaAMostrar) => {
  $$(".vista").forEach((vista) => vista.classList.add("is-hidden"));
  $(`#${vistaAMostrar}`).classList.remove("is-hidden");
};

$("#ver-categorias").addEventListener("click", () =>
  showVista("vista-categoria")
);

$("#ver-balance").addEventListener("click", () => showVista("vista-balance"));

const addOperation = () => {
  let operation = {
    id: randomId(),
    description: $("#descripcion-input").value,
    amount: $("#monto-input").value,
    type: $("#tipo-operacion").value,
    category: $("#categorias-select").value,
    date: $("#fecha-input").value,
  };

  console.log(operation);
  subirDatos({ operaciones: [...traerOperaciones(), operation] });
  cargarOperaciones(traerOperaciones());
  mostrarVista("balance");
};

$("#agregar-operacion-boton").addEventListener("click", addOperation);

// El valor devuelto por el método getTime() es un número de milisegundos desde el 1 de enero de 1970 00:00:00 UTC.
const ordernarPorFecha = (operaciones, orden) => {
  return [...operaciones].sort((a, b) => {
    const fechaA = new Date(a.fecha);
    const fechaB = new Date(b.fecha);
    return orden === "ASC"
      ? fechaA.getTime() - fechaB.getTime()
      : fechaB.getTime() - fechaA.getTime();
  });
};

$("#filtro-tipo").addEventListener("change", () => aplicarFiltros);

const filtrarPorTipo = (listaOperaciones, tipoOperacion) => {
  return listaOperaciones.filter(
    (operacion) => operacion.tipo === tipoOperacion
  );
};

const filtrarPorCategoria = (operaciones, categoria) => {
  return operaciones.filter((operacion) => operacion.categoria === categoria);
};

const aplicarFiltros = () => {
  let operacionesFiltradas = [...operaciones];

  let filtroTipo = $("#filtro-tipo").value;
  let filtroCategoria = $("#filtro-categoria").value;

  operacionesFiltradas = filtrarPorTipo(operaciones, filtroTipo);
  operacionesFiltradas = filtrarPorCategoria(operaciones, filtroCategoria);

  mostrarOperaciones(operacionesFiltradas);
};
