// OBJETOS

// Uno de los aspectos más importantes del lenguaje Javascript puesto que prácticamente todo lo que utilizamos en Javascript, son objetos.

// Una primera forma de verlo, es como una variable especial que puede contener más variables en su interior. De esta forma, tenemos la posibilidad de organizar múltiples variables de la misma temática en el interior de un objeto.

// En muchos lenguajes de programación, para crear un objeto se utiliza la palabra clave new.

//const objeto = new Object();

// En Javascript, se prefiere utilizar la notación literal
// Los literales de los objetos en Javascript son las llaves {}. Este ejemplo es equivalente al anterior, pero es más corto, rápido y cómodo, por lo que se aconseja declararlos siempre así:

const objeto = {};

const curso = {
  nombre: "Frontend",
  horasDuracion: "140hs",
  profe: "Sofia Ferrer",
};

// Cambiamos valor de una prop de un objeto accediendo a la prop con un punto. y asignandole un nuevo valor con el operador de asignacion =  curso.nombre = "Backend";

//console.log(curso);
const frutas = ["limon", "naranja", "frutilla", "kiwi"];
const miNombre = "sofia";
// setTimeout(() => {
//   curso.nombre = "Backend";
//   console.log(curso);
// }, "3000");

//console.log(curso);

const persona = {
  nombre: "Maria",
  apellido: "Lopez",
  edad: 35,
  hijos: false,
  estudios: ["primario", "secundario", "terciario"],
  mensaje: function () {
    alert(`Bienvenida ${this.nombre} ${this.apellido}`);
  },
  cursos: [
    {
      nombre: "Frontend",
      horasDuracion: "140hs",
      profe: "Sofia Ferrer",
    },
    {
      nombre: "Backend",
      horasDuracion: "150hs",
      profe: "Caro",
    },
  ],
};

//console.log(persona);

persona.direccion = "Av Siempreviva";

//persona.mensaje();
miNombre.toUpperCase();

frutas.push("manzana");
//console.log(miNombre.toUpperCase());

const operacion = {
  descripcion: "",
  monto: 0,
  tipo: "",
  categoria: "",
  fecha: "",
};

for (let prop in persona) {
  console.log(persona[prop]);
}
