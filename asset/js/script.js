"strict";

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Volleyball player",
      "Basketball Player",
      "good in documentation",
      "good in organizational and analytical skills",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    fadeOut: true,
  });
  var typed = new Typed(".typing-2", {
    strings: [
      "Volleyball player",
      "Basketball Player",
      "good in documentation",
      "good in organizational and analytical skills",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  myFunction();
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
AOS.init({ easing: "ease-in", delay: 100, duration: 300, offset: 100 });
window.addEventListener("load", AOS.refresh);
