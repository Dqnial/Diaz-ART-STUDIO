const swiper = new Swiper(".swiper-critique", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 5,
  spaceBetween: 56,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 56,
    },
  },
});

const swiper2 = new Swiper(".we-work-swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 64,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 35,
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 64,
    },
  },
});
