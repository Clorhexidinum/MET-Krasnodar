var link =  document.querySelector(".nav__menu-btn");
var menu =  document.querySelector(".nav__list");
var rem = document.getElementById('remeks');
var rev = document.getElementById('revel');
var sta = document.getElementById('staut');
var pop = document.getElementById('popup');
var over = document.querySelector(".overlay");


menu.classList.remove('nav__list--no-js');

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("nav__list-show");
});

function remeks() {
  rem.classList.add("remeks-show");
}

function closeRm() {
  rev.classList.remove("remeks-show");
}

function revel() {
  rev.classList.add("revel-show");
}

function closeRv() {
  rev.classList.remove("revel-show");
}

function staut() {
  sta.classList.add("staut-show");
}

function closeSt() {
  sta.classList.remove("staut-show");
}

function popup() {
  pop.classList.add("popup-show");
  sta.classList.remove("staut-show");
  rev.classList.remove("revel-show");
  rev.classList.remove("remeks-show");
}

function close1() {
  pop.classList.toggle("popup-show");
}


over.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop.classList.remove("popup-show");
  sta.classList.remove("staut-show");
  rev.classList.remove("revel-show");
  rem.classList.remove("remeks-show");
});


window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    pop.classList.remove("popup-show");
    sta.classList.remove("staut-show");
    rev.classList.remove("revel-show");
    rem.classList.remove("remeks-show");
  }
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}