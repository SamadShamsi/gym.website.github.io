// Slick Carosal (Banner) starts here

$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
    arrows:false,
  adaptiveHeight: true,
    autoplay: true,
    fade:true,
     cssEase: 'linear'
});

// Slick Carosal (Banner) ends here

// Venobox (About_us) starts here

$(document).ready(function(){
    $('.venobox').venobox({
        frameheight:'300px',
       spinner:'wave',
        spinColor:'red',
        
    }); 
});

// Venobox (About_us) ends here


// Isotop starts here 

$(document).ready(function(){
    $('.gallery-slide').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
})

// Isotop ends here 

// Slick carousal Gallery starts here


$('.slide-gallery').slick({
  dots: false,
  infinite: true,
  speed: 300,
    fade:true,
    arrows:false,
  slidesToShow: 1,
  adaptiveHeight: true,
    autoplay:true,
});

// Slick carousal Gallery ends here


// Slick carosal Team starts here 

$('.team-slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:false,
    dots:false,
    autoplay:true,
    speed:200,
     responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Slick carosal Team ends here 

// Testimonial Part Slick carousal starts here 



$('.testimonial-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
    arrows:false,
    autoplay:true,
});

// Testimonial Part Slick carousal ends here 

// Counter Plugin starts

$('.counter').counterUp({
    delay: 25,
    time: 1000
});

// Counter plugin ends


// Our Classes (Mixitup) starts here
$(function(){
    var containerEl = document.querySelector('.activity');

    var mixer = mixitup(containerEl);
});

// Our Classes (Mixitup) ends here



// Sponsors Slick carosal starts

$('.sponsors-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
nextArrow:'<i class="fas fa-chevron-right next"></i>',
    prevArrow:'<i class="fas fa-chevron-left prev"></i>'
});


// Sponsors Slick carosal ends



// Navbar Fixed///

$navoffset=$('#navigation').offset().top;
$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navoffset){
        $('#navigation').addClass('navFixed');
    }
    else{
        $('#navigation').removeClass('navFixed');
    }
    
    if($scrolling > 500){
       $('.up-arrow').fadeIn();
    }
    else{
        $('.up-arrow').fadeOut();
    }
});

// Up Arrow Button //

$('.up-arrow').click(function(){
    $('html').animate({
        scrollTop:0
    },1000)
});


// Up Arrow Button //



