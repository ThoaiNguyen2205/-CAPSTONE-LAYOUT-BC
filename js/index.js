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
    
// THEME
document.getElementById("switchButton").onclick = function () {
  
  document.getElementById("myBody").classList.toggle("dark");
  $('.header-bottom').toggleClass('header-dark-theme')
  $('.header-top').toggleClass('top-dark')
  $('.nav-link').toggleClass('navbar-dark')
  $('.dropdown-item').toggleClass('navbar-dark')
  $('.dropdown-menu').toggleClass('theme-dark')
  $('.header-title').toggleClass('navbar-dark')
  $('.title h1').toggleClass('info-light')
  $('.studious-text a').toggleClass('navbar-dark')
  $('.studious-item span').toggleClass('icon-dark')
  $('.course').toggleClass('course-dark')
  $('.card-body ').toggleClass('course-dark')
  $('.card-text ').toggleClass('info-gray')
  $('.card-title ').toggleClass('navbar-dark')
  $('.icon ').toggleClass('info-light')
  $('.icon-service i ').toggleClass('icon-dark')
  $('.col-items').toggleClass('course-dark')
  $('.icon-info h5').toggleClass('info-light')
  $('.counter-item div').toggleClass('info-light')
  $('.counter-item p').toggleClass('info-light')
  $('.text-left h5').toggleClass('info-light')
  $('.services-card a').toggleClass('navbar-dark')
  $('.title-style').toggleClass('info-light')
  $('.right-side').toggleClass('header-dark-theme')
  $('.title-head').toggleClass('info-light')
  $('.feedback-items').toggleClass('feedback-dark-theme')
};