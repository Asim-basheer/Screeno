// owl code

$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  dots: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// scroll top code

const scrollTop = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (window.scrollY >= 1200) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
};
