const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showView = (view) => {
  $$(".view").forEach((view) => view.classList.add("visually-hidden"));
  $(`#${view}`).classList.remove("visually-hidden");
};

let page = 1;

$("#home-btn").addEventListener("click", () => getCharacters());

const showCharacters = (characters) => {
  $("#charcaters-container").innerHTML = "";
  if (characters) {
    showView("charcaters-container");
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
  } else {
    showView("no-results");
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

const goNext = () => {
  if (page < 42) {
    page = page + 1;
    $("#page-number").innerHTML = `${page}`;
    pagination(page);
  }
};

const goPrev = () => {
  if (page > 1) {
    page = page - 1;
    $("#page-number").innerHTML = `${page}`;
    pagination(page);
  }
};

$("#page-number").innerHTML = `${page}`;
$("#prev-btn").addEventListener("click", () => goPrev());
$("#next-btn").addEventListener("click", () => goNext());

const filterCharacters = () => {
  let params = {
    name: $("#name-input").value,
    gender: $("#gender-select").value,
    status: $("#status-select").value,
  };
  getFilterCharacters(new URLSearchParams(params).toString());
};

$("#search-btn").addEventListener("click", () => filterCharacters());

const getEpisodeName = () => {};
