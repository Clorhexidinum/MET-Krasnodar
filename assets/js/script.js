$(function(){

  $('.nav__menu-btn').on('click', function(){
    $('.header').toggleClass('header--active');
  })
  
  $('.nav__item').on('click', function(){
    $('.header').toggleClass('header--active');
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    dotsClass: 'slick-dots slider-dots',
    prevArrow: '  <button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '  <button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>'
  });

  $('.goods__list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 0,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    

  $('.goods__preview').on('click', function(){
    $(this).next('.card').addClass('card--active');
  });

  $('.close').on('click', function(){
    $('.card').removeClass('card--active');
    $('.popup').removeClass('popup--active');
  });

  $('.overlay').on('click', function(){
    $('.card').removeClass('card--active');
    $('.popup').removeClass('popup--active');
  });

  $('.goods__buy-btn').on('click', function(){
    $('.popup').addClass('popup--active');
  });

  $('.card__buy-btn').on('click', function(){
    $('.card').removeClass('card--active');
    $('.popup').addClass('popup--active');
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      $('.card').removeClass('card--active');
      $('.popup').removeClass('popup--active');
    };
  });
});