wow = new WOW(
  {
  boxClass:     'wow',      
  animateClass: 'animated', 
  offset:       0,          
  mobile:       true,       
  live:         true        
})
wow.init();

   
function scrollWindow() {
  var scroll = $(window).scrollTop();
  if (scroll >= 120) {
    $('header').addClass('fixed-header');
  } else {
    $('header').removeClass('fixed-header');
  }
}

$(document).ready(function() {
 
  scrollWindow();
  $(".scrollTo").click(function (event) {
      event.preventDefault();
      var $anchor = $('#' + this.hash.substring(1));
      $('html,body').animate({
          scrollTop: $anchor.offset().top - $anchor.attr('data-section-offset')
      }, 500);
  });
  $('.m_menu_btn').click(function() { 
      $('nav').toggleClass('open bounceInRight');
      $('.m_menu_btn').toggleClass('cross');
  });
  $('nav').click(function() {
      $('nav').removeClass('open bounceInRight');
      $('.m_menu_btn').removeClass('cross');
  });
  if ($('header').offset().top > 0) {
    $('header .wow').each(function() {
      $(this).addClass('fixedWow');
    });
  }
 

  $('.about_slider').slick();  
  $('.blog_slider').slick({ 
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }    
      ]
    });
  });


$(window).scroll(function() {
  scrollWindow();
});