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
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

  //plan & map modal
  $('.apart-plan-btn').on('click',function(e){
    e.preventDefault();
    let src = $(this).attr('data-plan');
    $('.apart-plan-pic').attr('src',src);
    $('.apart-plan-modal').addClass('visible');
  });
  $('.apart-map-btn').on('click',function(e){
    e.preventDefault();
    $('.apart-map-modal').addClass('visible');
  });
  $('.apart-close').on('click',function(){
    $('.apart-modal').removeClass('visible');
  });

  $('.current-apart').on('click',function(){
    $(this).next('.another-aparts').toggleClass('active');
  });

});