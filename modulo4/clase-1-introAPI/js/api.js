const baseURL = "https://rickandmortyapi.com/api";
//https://rickandmortyapi.com/api/character?page=19
//https://rickandmortyapi.com/api/character/?name=summer

const getCharacters = () => {
  fetch(`${baseURL}/character`) //promesa
    .then((response) => response.json()) // respuesta parseada
    .then((data) => showCharacters(data.results)) // data
    .catch((error) => alert(error));
};

const getCharacterById = (id) => {
  fetch(`${baseURL}/character/${id}`) //promesa
    .then((response) => response.json()) // respuesta parseada
    .then((data) => showCharacterDetail(data)) // data
    .catch((error) => alert(error));
};

const pagination = (page) => {
  fetch(`${baseURL}/character?page=${page}`)
    .then((response) => response.json())
    .then((data) => showCharacters(data.results));
};

const getFilterCharacters = (params) => {
  fetch(`${baseURL}/character?${params}`)
    .then((response) => response.json())
    .then((data) => showCharacters(data.results))
    .catch((error) => window.alert(`HAY ERROOOOR ${error}`));
};

const getEpisodes = () => {
  fetch(`${baseURL}/episode`) //promesa
    .then((response) => response.json()) // respuesta parseada
    .then((data) => console.log(data)); // data
};

window.onload = getCharacters();
