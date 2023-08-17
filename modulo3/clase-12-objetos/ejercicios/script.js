// 04 - email
// Partiendo de un objeto guardado en la variable user
// Verificar si tiene la propiedad email
// Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
// Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'
// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };

// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };

// console.log(user.email);

// if (user.email) {
//   alert("El usuario tiene la propiedad email");
// } else {
//   alert("El usuario NO tiene la propiedad email");
// }

// 05 - propiedad
// Completa el código dentro de la función hasProperty
// Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
// Sino retorna false

const hasProperty = (object, property) => {
  for (let prop in object) {
    if (prop === property) {
      return true;
    }
  }
  return false;
};

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

const user2 = {
  username: "grace_hopper",
  password: "1234567890!",
  email: "grace@hopper.com",
};

console.log(hasProperty(user, "email")); // false
console.log(hasProperty(user, "password")); // true
console.log(hasProperty(user, "id")); // false

console.log(hasProperty(user2, "email")); // true
console.log(hasProperty(user2, "password")); // true
console.log(hasProperty(user2, "id")); // false
