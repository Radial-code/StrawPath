
const sidebar = document.querySelector(".overlay");

function Togleside() {
    sidebar.classList.add("show_nav");
    document.body.classList.add("vh-100");
}

function hideNav() {
    sidebar.classList.remove("show_nav");
    document.body.classList.remove("vh-100");
}
//   DEIFINE AOS ANIMATION ==========/
AOS.init({
    once: 'true',
    duration:"1000"
  });
//   DEIFINE BACK TO TOP CODE ==========/
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({
        scrollTop: 0,
      },
        40
      );
      return false;
    });
});
  

