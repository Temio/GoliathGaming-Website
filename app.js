console.log("Init.");


$(function () {


  // update navigation
  $('nav ').on('click', 'li:not(.is-active)',function (e) {
    $('.top-nav .is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('nav').removeClass('is-open');
    e.preventDefault();
  });

  $('nav').on('click', '.is-active', function (e) {
    $('nav').toggleClass('is-open');    
    e.preventDefault();
  });


  $('nav .menu-btn').click(function (e) {
    $('nav').addClass('is-open');
  });



  // Change slides


  var $slider = $('.slider');


  function onNextBtnClick () {
    var $currentSlide   = $slider.find('.slide.is-active');
    var $nextSlide;      

    if ($currentSlide.is(':last-child')) {
      $nextSlide = $slider.find('li:first-child');
    }else{
      $nextSlide = $currentSlide.next();
    }

    $currentSlide.removeClass('is-active');
    $nextSlide.addClass('is-active');
  };

var $slider = $('.slider');


  function onPreviousBtnClick () {
    var $currentSlide   = $slider.find('.slide.is-active');
    var $nextSlide;      

    if ($currentSlide.is(':first-child')) {
      $nextSlide = $slider.find('li:last-child');
    }else{
      $nextSlide = $currentSlide.prev();
    }

    $currentSlide.removeClass('is-active');
    $nextSlide.addClass('is-active');

    
  };


  // 1. go back
  // 2. goto(n) should show the nth image instead of (n-1)th, 
  // eg. goto(2) should show the 2nd element

  function goto (index) {
    $slider
      .find('.slide.is-active')
      .removeClass('is-active');
    $slider
      .find('.slide')
      .eq(index)
        .addClass('is-active');
  };

  window.goto = goto;

  $('.slider-next').on('click', onNextBtnClick);
  $('.slider-prev').on('click', onPreviousBtnClick);






});