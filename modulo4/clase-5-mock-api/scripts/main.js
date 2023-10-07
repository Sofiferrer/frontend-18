const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showView = (view) => {
  $$(".view").forEach((view) => view.classList.add("visually-hidden"));
  $(`#${view}`).classList.remove("visually-hidden");
};
