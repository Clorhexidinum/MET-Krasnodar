var link =  document.querySelector(".nav--menu-list");
var menu =  document.querySelector(".nav--list");
var rem = document.getElementById('remeks');
var rev = document.getElementById('revel');
var sta = document.getElementById('staut');
var pop = document.getElementById('popup');

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("nav--list-show");
});

function remeks() {
    rem.classList.add("remeks-show");
}

function closeRm() {
	rem.classList.remove("remeks-show");
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
}

function close1() {
	pop.classList.toggle("popup-show");
}


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

document.getElementById('blur').style.display = "none";