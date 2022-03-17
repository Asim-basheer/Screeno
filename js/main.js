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

ScrollReveal({ reset: true, distance: "30px", duration: 2500, delay: 200 });

ScrollReveal().reveal(".main-title", { delay: 200, origin: "left" });
ScrollReveal().reveal(".animation-top", { delay: 400, origin: "top" });
ScrollReveal().reveal(".animation-bottom", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".animation-left", { delay: 400, origin: "left" });
ScrollReveal().reveal(".animation-right", {
  delay: 400,
  origin: "right",
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
