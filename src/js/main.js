//header slider
const headerSlider = new Swiper('.header-slider__container', {
  spaceBetween: 0,
  slidesPerView: 1.3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.header-slider__next',
    prevEl: '.header-slider__prev',
  },
  pagination: {
    el: '.header-slider__pagination',
  },
  breakpoints: {
    // when window width is <= 320px
    660: {
      slidesPerView: 1
    },
  }
})


// clients slider
const clientsSlider = new Swiper('.clients-slider__container', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
