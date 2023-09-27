const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const baseURL = "https://rickandmortyapi.com/api";

const showView = (view) => {
  $$(".view").forEach((view) => view.classList.add("visually-hidden"));
  $(`#${view}`).classList.remove("visually-hidden");
};

const getCharacters = () => {
  fetch(`${baseURL}/character`) //promesa
    .then((response) => response.json()) // respuesta parseada
    .then((data) => showCharacters(data.results)); // data
};

const getCharacterById = (id) => {
  fetch(`${baseURL}/character/${id}`) //promesa
    .then((response) => response.json()) // respuesta parseada
    .then((data) =>
      id ? showCharacterDetail(data) : showCharacters(data.results)
    ); // data
};

// const getLocation = (location) => {
//   fetch(`${baseURL}/location/${location}`) //promesa
//     .then((response) => response.json()) // respuesta parseada
//     .then((data) => console.log(data)); // data
// };

const showCharacters = (characters) => {
  $("#charcaters-container").innerHTML = "";
  for (let { image, name, id } of characters) {
    $("#charcaters-container").innerHTML += `
        <div class="card col-3">
        <img src="${image}" class="card-img-top" alt="character-picture" />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
        </div>
        <a href="#" class='btn btn-info' onclick=getCharacterById(${id})>Ver detalles</a>
    </div>
    `;
  }
};

const showCharacterDetail = ({
  name,
  image,
  status,
  species,
  gender,
  origin,
}) => {
  showView("character-detail");
  $("#character-detail").innerHTML = `
  <div class="card col-6">
  <img src="${image}" class="card-img-top" alt="character-picture" />
  <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <ul>
        <li>Estado: ${status}</li>
        <li>Especie: ${species}</li>
        <li>Genero: ${gender}</li>
        <li>Origen: ${origin.name}</li>
      </ul>
  </div>
 
</div>
`;
};

window.onload = getCharacters();
