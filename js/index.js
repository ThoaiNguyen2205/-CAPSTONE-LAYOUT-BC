// SHRINK HEADER

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

// BACK TO TOP
var btn = $("#button");

      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });

      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
      });
    

  