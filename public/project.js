
const mainMenu = document.querySelector('.navbar');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-30%';
}

//THEME Selector

const defaultTheme = document.getElementById('defaultTheme');
const draculaBtn = document.getElementById('draculaBtn');
const lunariaBtn = document.getElementById('lunariaBtn');
const gruvboxBtn = document.getElementById('gruvboxBtn');
const afterglowBtn = document.getElementById('afterglowBtn');

const bodySelector = document.querySelector('body'); //bg
const header = document.querySelector('header'); //fg
const cardSelector = document.querySelectorAll("[data-card]");

const title = document.querySelectorAll("[data-title]")
const projectCards = document.querySelectorAll('.card')
const subtitle = document.querySelectorAll('[data-subtitle]')
const text = document.querySelectorAll('[data-text]')
const buttonBg = document.querySelectorAll('[data-bg]')
const skill = document.querySelectorAll('.skill')
const sprite = document.querySelectorAll('[data-sprite]')
const socmed = document.querySelectorAll('.socmed-icon')

draculaBtn.addEventListener('click',() => {
    bodySelector.style.background = "#282a36";
    header.style.background = "#191a24";
    cardSelector.forEach((e) => {
        e.style.background = "#191a24";
    })
    title.forEach((e) => {
        e.style.color = "#ff79c6";
    })
    projectCards.forEach((e) => {
        e.style.background = "#282a36";
    })
    subtitle.forEach((e) => {
        e.style.color = "#6272a4";
    })
    text.forEach((e) => {
        e.style.color = "#fff";
    })
    buttonBg.forEach((e) => {
        e.style.background = "#ff79c6";
    })
    skill.forEach((e) => {
        e.style.background = "#282a36";
    })
    sprite.forEach((e) => {
        e.classList.add('drc-sprite');
        e.classList.remove('nav-sprite', 'afg-sprite', 'grv-sprite', 'lun-sprite')
    })
    socmed.forEach((e) => {
        e.classList.remove('lun-sprite');
    })
    mainMenu.style.background = "#191a24";
})


lunariaBtn.addEventListener('click', () => {
    bodySelector.style.background = "#d5cfcc";
    header.style.background = "#ebe4e1";
    cardSelector.forEach((e) => {
        e.style.background = "#ebe4e1";
    })
    title.forEach((e) => {
        e.style.color = "#3e3c3d";
    })
    projectCards.forEach((e) => {
        e.style.background = "#d5cfcc";
    })
    subtitle.forEach((e) => {
        e.style.color = "#3778a9";
    })
    text.forEach((e) => {
        e.style.color = "#121212";
    })
    buttonBg.forEach((e) => {
        e.style.background = "#497d46";
    })
    skill.forEach((e) => {
        e.style.background = "#d5cfcc";
    })
    sprite.forEach((e) => {
        e.classList.add('lun-sprite');
        e.classList.remove('drc-sprite', 'afg-sprite', 'grv-sprite', 'nav-sprite')
    })
    socmed.forEach((e) => {
        e.classList.add('lun-sprite');
    })
    mainMenu.style.background = "#ebe4e1";
})

gruvboxBtn.addEventListener('click', () => {
    bodySelector.style.background = "#313030";
    header.style.background = "#282828";
    cardSelector.forEach((e) => {
        e.style.background = "#282828";
    })
    title.forEach((e) => {
        e.style.color = "#cc241d";
    })
    projectCards.forEach((e) => {
        e.style.background = "#222222";
    })
    subtitle.forEach((e) => {
        e.style.color = "#d79921";
    })
    text.forEach((e) => {
        e.style.color = "#ebdbb2";
    })
    buttonBg.forEach((e) => {
        e.style.background = "#98971a";
    })
    skill.forEach((e) => {
        e.style.background = "#222222";
    })
    socmed.forEach((e) => {
        e.classList.remove('lun-sprite');
    })
    sprite.forEach((e) => {
        e.classList.add('grv-sprite');
        e.classList.remove('nav-sprite', 'drc-sprite', 'lun-sprite', 'afg-sprite');
    })
    mainMenu.style.background = "#282828";
})

afterglowBtn.addEventListener('click', () => {
    bodySelector.style.background = "#222222";
    header.style.background = "#151515";
    cardSelector.forEach((e) => {
        e.style.background = "#151515";
    })
    title.forEach((e) => {
        e.style.color = "#d3a04d";
    })
    projectCards.forEach((e) => {
        e.style.background = "#222222";
    })
    subtitle.forEach((e) => {
        e.style.color = "#a53c23";
    })
    text.forEach((e) => {
        e.style.color = "#d0d0d0";
    })
    buttonBg.forEach((e) => {
        e.style.background = "#d3a04d";
    })
    skill.forEach((e) => {
        e.style.background = "#222222";
    })
    sprite.forEach((e) => {
        e.classList.add('afg-sprite');
        e.classList.remove('drc-sprite', 'lun-sprite', 'grv-sprite', 'nav-sprite')
    })
    mainMenu.style.background = "#151515";
})

defaultTheme.addEventListener('click', () => {
    bodySelector.style.background = "#222";
    header.style.background = "#1c1c1c";
    cardSelector.forEach((e) => {
        e.style.background = "#1c1c1c";
    })
    title.forEach((e) => {
        e.style.color = "#8eb33b";
    })
    projectCards.forEach((e) => {
        e.style.background = "#222";
    })
    subtitle.forEach((e) => {
        e.style.color = "#6587a3";
    })
    text.forEach((e) => {
        e.style.color = "#fff";
    })
    buttonBg.forEach((e) => {
        e.style.background = "#8eb33b";
    })
    skill.forEach((e) => {
        e.style.background = "#222";
    })
    socmed.forEach((e) => {
        e.classList.remove('lun-sprite');
    })
    sprite.forEach((e) => {
        e.classList.add('nav-sprite');
        e.classList.remove('drc-sprite', 'lun-sprite', 'grv-sprite', 'afg-sprite');
    })
    mainMenu.style.background = "#1c1c1c";
})
