$(function(){
  //the shrinkHeader variable is where you tell the scroll effect to start.
  var shrinkHeader = 70;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= shrinkHeader ) {
            $('.header-bottom').addClass('smaller');
         }
         else {
             $('.header-bottom').removeClass('smaller');
         }
   });
 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
 });
// Simple dark mode with jQuery
// Write by:‌ Mehdi Najafi

$(function() {
  $('#toggleDayOrNight').click(function(e) {
      // toggle classes
      $('#theme').toggleClass('header-dark-mode ')
      $('.header-bottom').toggleClass('header-dark-mode')
      $('.header-navbar a').toggleClass('navbar-dark')
      $('.dropdown-menu').toggleClass('dark-theme')
      $('.logo-text').toggleClass('dark-theme')
      $('body').toggleClass('dark-theme')
      // set background-image when clicked
      if($('#theme')[0]) {
        $('#toggleDayOrNight').css({'background-image':'url(https://img.icons8.com/dusk/64/000000/summer.png)',
        'background-color': '#FFF'})
        }
         else {
        $('#toggleDayOrNight').css({'background-image':'url(https://img.icons8.com/dusk/64/000000/new-moon.png)',
        'background-color': '#000'})
        }
    
  })
})
    

  