
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
  




// Js Class --------------------------------------------
function maxProductAndValues(n) {
  var maxProduct = null;
  var maxProductValues = [];

  for (var i = 0; i < n.length - 1; i++) { 
    var sum = n[i] * n[i + 1];
    if (maxProduct === null || sum > maxProduct) {
      maxProduct = sum;
      maxProductValues = [n[i], n[i + 1]];
    }
  }
  return { maxProduct, maxProductValues };
}
var n = [3, 4, 5, 6, -7, -10,5];
var result = maxProductAndValues(n);
console.log("Maximum sum:", result.maxProduct);
console.log("Last two values:", result.maxProductValues);
