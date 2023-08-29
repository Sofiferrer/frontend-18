const randomId = () => self.crypto.randomUUID();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const tienda = JSON.parse(localStorage.getItem("miTienda")) || {
  usuarios: [],
  ventas: [],
  favoritos: [],
  carrito: [],
};

const actualizarTienda = (datos) => {
  localStorage.setItem("miTienda", JSON.stringify(datos));
};

const traerDatos = () => {
  return JSON.parse(localStorage.getItem("miTienda"));
};

const productos = [
  {
    id: randomId(),
    nombre: "Cama Yaya",
    precio: "12000",
    foto: "https://images.unsplash.com/photo-1600369671854-f3293a0da0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtYSUyMGdhdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: randomId(),
    nombre: "Cama Crop",
    precio: "10000",
    foto: "https://images.unsplash.com/photo-1575337582562-a9bb16ed3cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtYSUyMGdhdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: randomId(),
    nombre: "Rascador",
    precio: "15000",
    foto: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbWElMjBnYXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: randomId(),
    nombre: "Vara",
    precio: "8000",
    foto: "https://plus.unsplash.com/premium_photo-1664371206022-59b8607e00ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdCUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: randomId(),
    nombre: "Rascador 2 pisos",
    precio: "25000",
    foto: "https://images.unsplash.com/photo-1625142918110-5f9fe7a56027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const cardContainer = $("#card-container");

const crearCards = (listaProductos) => {
  listaProductos.forEach((prod) => {
    cardContainer.innerHTML += `<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="${prod.foto}"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
       ${prod.nombre}
      </div>
    </div>
    <div class="card-footer is-flex is-justify-content-space-between">
      <div>$ ${prod.precio}</div>
      <button id="${prod.id}" class="add-button">Agregar al carrito</button>
    </div>
    </div>`;
  });
};

crearCards(productos);

const agregarAlCarrito = (idProducto) => {
  let productoFiltrado = productos.filter((prod) => prod.id === idProducto);
  console.log(productoFiltrado[0]);
  if (!tienda.carrito.includes(productoFiltrado[0])) {
    tienda.carrito.push(productoFiltrado[0]);
  }
  actualizarTienda(tienda);
  mostrarCarrito();
};

const botones = $$(".add-button");

botones.forEach((boton) =>
  boton.addEventListener("click", () => agregarAlCarrito(boton.id))
);

const eliminarDeCarrito = () => {
  let datosActualizados = traerDatos();
};

$("#carrito").addEventListener("click", () => {
  $("#modal").classList.add("is-active");
});

$("#close-modal").addEventListener("click", () => {
  $("#modal").classList.remove("is-active");
});

const mostrarCarrito = () => {
  $("#modal-content").innerHTML = "";
  traerDatos().carrito.forEach(
    (item) => ($("#modal-content").innerHTML += `<li>${item.nombre}</li>`)
  );
};

mostrarCarrito();
