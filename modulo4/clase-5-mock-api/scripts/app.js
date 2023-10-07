const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showView = (view) => {
  $$(".view").forEach((view) => view.classList.add("visually-hidden"));
  $(`#${view}`).classList.remove("visually-hidden");
};

getJobs = async () => {
  showView("spinner");
  let response = await fetch(
    "https://652088b6906e276284c48803.mockapi.io/api/jobs"
  );
  let data = await response.json();
  console.log(data);
  setTimeout(() => {
    renderJobs(data);
  }, 3000);
};

renderJobs = (jobs) => {
  console.log(jobs);
  showView("jobs-list");
};

getJobs();

// agregar un nuevo puesto de trabajo u oferta laboral ==> POST ==> agregarEmpleo()
// editar ==> PATCH para editar parcialmente o PUT si queremos cambiarle todos los campos ==> editarEmpleo(id)
// borrar ==> DELETE ==> borrarEmpleo(id)

borrarEmpleo = async (id) => {
  //DELETE
  let response = await fetch(
    "https://652088b6906e276284c48803.mockapi.io/api/jobs",
    {
      method: "DELETE",
      headers: "",
      body: "",
    }
  );
  let data = await response.json();
  getJobs();
};

// fetch('url', {
//     method: 'DELETE'
// })
