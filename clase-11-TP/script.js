const textButton = document.getElementById('text-btn');
const imgButton = document.getElementById('img-btn');
const modeButton = document.getElementById('mode-btn');

const textAside = document.getElementById('aside-text');
const imgAside = document.getElementById('aside-img');
const bothAsides = document.getElementsByClassName('aside')

textButton.addEventListener('click', ()=> hideTextAside());
imgButton.addEventListener('click', ()=> hideImgAside());
modeButton.addEventListener('click', () => changeMode())

const hideTextAside = () => {
    imgAside.classList.add('hidden');
    textAside.classList.remove('hidden');
}

const hideImgAside = () => {
    textAside.classList.add('hidden');
    imgAside.classList.remove('hidden');   
}

const changeMode = () => {
    bothAsides[0].classList.add('dark-aside')
    bothAsides[1].classList.add('dark-aside')
console.log(bothAsides)
}


// MEME

const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('meme-img');

urlInput.addEventListener('input', ()=> changeBackground())

const changeBackground = () => {
    memeImg.style.backgroundImage = `url('${urlInput.value}')`

}

const brightInput = document.getElementById('bright-input');
const contrastInput = document.getElementById('contrast-input');

console.log(brightInput.value);
console.log(contrastInput.value)

const filtros = () => {    
    memeImg.style.filter = `brightness(${brightInput.value}) opacity(1) blur(0px) contrast(${contrastInput.value}%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0)`
   
}

brightInput.addEventListener('input', ()=> filtros());
contrastInput.addEventListener('input', ()=> filtros())