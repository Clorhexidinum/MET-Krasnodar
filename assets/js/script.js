
window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    pop.classList.remove("popup-show");
    sta.classList.remove("staut-show");
    rev.classList.remove("revel-show");
    rem.classList.remove("remeks-show");
  }
});

$(function(){

  $('.nav__menu-btn').on('click', function(){
    $('.header').toggleClass('header--active');
  })
  
  $('.nav__item').on('click', function(){
    $('.header').toggleClass('header--active');
  });

  $('.goods__item').on('click', function(){
    $(this).children('.card').addClass('card--active');
  });
  
});