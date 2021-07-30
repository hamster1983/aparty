$(document).ready(function(){
	
  $('.current-lang').on('click',function(){
    $(this).next('.change-lang').toggleClass('active');
  });

  $('.navbar-toggler').on('click',function(){
    $(this).next('.apart-nav').toggleClass('visible');
  });

  $('.apart-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.apart-slider-nav',
    autoplay: true
  });
  $('.apart-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.apart-slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

});