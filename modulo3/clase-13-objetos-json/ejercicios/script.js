const usuario = {
  nombre: "Maria",
  apellido: "Lopez",
  email: "maria@gmail.com",
  telefono: "4582145821",
  edad: 58,
};

const compra = {
  articulo: "campera",
  precio: 15621,
  cantidad: 1,
  comprador: "Juan",
};

const venta = {
  articulo: "bicicleta",
  precio: 1456256,
  cantidad: 1,
  vendedor: "Pedro",
};

const aplicacion = {
  usuarios: [],
  compras: [],
  ventas: [],
};

aplicacion.usuarios.push(usuario);
aplicacion.compras.push(compra);
aplicacion.ventas.push(venta);

console.log(aplicacion);

localStorage.setItem("mercadoLibre", JSON.stringify(aplicacion));
