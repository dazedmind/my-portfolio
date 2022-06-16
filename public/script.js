

//function fadeIn() {
 //   document.getElementById('section2-content-1').style.opacity="1"
//}

//function changeCss () {
    //document.getElementById("section2-content-1").className = 'fadein';

    //var divElement = document.getElementById('section2-content-1');

  //  this.scrollY > 300 ? divElement.style.opacity = 1 : divElement.style.opacity = 0;
//}
//  window.addEventListener("scroll", changeCss , false);

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
