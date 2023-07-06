const textButton = document.getElementById("text-btn");
const imgButton = document.getElementById("img-btn");
const modeButton = document.getElementById("mode-btn");

const textAside = document.getElementById("aside-text");
const imgAside = document.getElementById("aside-img");
const mainContainer = document.getElementById("main-container");

//const bothAsides = document.getElementsByClassName("aside");

textButton.addEventListener("click", () => hideTextAside());
imgButton.addEventListener("click", () => hideImgAside());
modeButton.addEventListener("click", () => changeMode());

const hideTextAside = () => {
  imgAside.classList.add("hidden");
  textAside.classList.remove("hidden");
};

const hideImgAside = () => {
  textAside.classList.add("hidden");
  imgAside.classList.remove("hidden");
};

// const changeMode = () => {
//   bothAsides[0].classList.add("dark-aside");
//   bothAsides[1].classList.add("dark-aside");
//   console.log(bothAsides);
// };

const changeMode = () => {
  textAside.classList.toggle("dark-aside");
  imgAside.classList.toggle("dark-aside");
  mainContainer.classList.toggle("main-container-dark");

  //if (modeButton.innerText === "Modo oscuro") {
  //modeButton.innerHTML = "Modo claro";
  //} else {
  //modeButton.innerHTML = "Modo oscuro";
  //}

  if (mainContainer.classList.contains("main-container-dark")) {
    modeButton.innerText = "🌅 Modo claro";
    //modeButton.innerHTML = '<i class="fa-solid fa-align-left"></i> Modo claro';
  } else {
    modeButton.innerText = "🌃 Modo oscuro";
  }
};

// MEME

const urlInput = document.getElementById("url-input");
const memeImg = document.getElementById("meme-img");

urlInput.addEventListener("input", () => changeBackground());

const changeBackground = () => {
  memeImg.style.backgroundImage = `url('${urlInput.value}')`;
};

const brightInput = document.getElementById("bright-input");
const contrastInput = document.getElementById("contrast-input");

const filtros = () => {
  memeImg.style.filter = `brightness(${brightInput.value}) opacity(1) blur(0px) contrast(${contrastInput.value}%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0)`;
};

brightInput.addEventListener("input", () => filtros());
contrastInput.addEventListener("input", () => filtros());

const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

topTextInput.addEventListener("change", () => hideTopText());
bottomTextInput.addEventListener("change", () => hideBottomText());

// const hideTopText = () => {
//   console.log(checkbox.checked);
//   topText.classList.toggle("hidden");
// };

const hideBottomText = () => {
  if (bottomTextInput.checked) {
    bottomText.classList.add("hidden");
  } else {
    bottomText.classList.remove("hidden");
  }
};
const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");

const cambiarFondoMeme = () => {
  let colorElegido = colorPicker.value;
  colorName.innerHTML = `${colorElegido}`;
};

colorPicker.addEventListener("input", () => cambiarFondoMeme());

// DOWNLOAD MEME

const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
  domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
  });
};

//SELECT FUENTES
const fontSelector = document.getElementById("font-selector");
console.log(fontSelector.value);

const changeFontFamily = () => {
  topText.style.fontFamily = `${fontSelector.value}`;
  bottomText.style.fontFamily = `${fontSelector.value}`;
};

fontSelector.addEventListener("change", () => changeFontFamily());
