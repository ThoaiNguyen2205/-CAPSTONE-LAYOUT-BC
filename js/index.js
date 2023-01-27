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