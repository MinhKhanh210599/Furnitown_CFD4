$(document).on("click", ".menu", function () {
  $(".nav").addClass("act_nav");
});

// $(document).on("click", ".nav .nav_bottom .left .close", function () {
//   $(".nav").removeClass("act_nav");
// });
$(".nav .nav_bottom .left .close").on("click", function () {
  $(".nav").removeClass("act_nav");
});
$("body").on("click", function (e) {
  $(".nav").removeClass("act_nav");
});
$(".nav").on("click", function (e) {
  e.stopPropagation();
});
//slider;
let $carousel = $(".homepage .slider .slider__list");
$carousel.flickity({
  contain: true,
  cellAlign: "left",
  wrapAround: true,
  imagesLoaded: true,
  autoPlay: true,
});
$(".homepage .slider .slider__bottom .control .previous").on(
  "click",
  function () {
    $carousel.flickity("previous");
  }
);
$(".homepage .slider .slider__bottom .control .next").on("click", function () {
  $carousel.flickity("next");
});

//change slider
setTimeout(function () {
  $(".homepage .slider .slider__list item:nth-child(1)").addClass("show");
}, 500);
$carousel.on("change.flickity", function (event, index) {
  setTimeout(function () {
    $(".homepage .slider .slider__list item").removeClass("show");
    $(".homepage .slider . item:nth-child(" + (index + 1) + ")").addClass(
      "show"
    );
  }, 500);
});

//back to top
let backtotop = document.querySelector(".back-to-top");
backtotop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
