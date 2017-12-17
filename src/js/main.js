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

// certificates slider
const certificatesSlider = new Swiper('.certificates-slider__container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.certificates-slider__next',
    prevEl: '.certificates-slider__prev',
  },
  breakpoints: {
    // when window width is <= 320px
    1338: {
      slidesPerView:3,
    },
    1020: {
      slidesPerView:2,
    },
    685: {
      slidesPerView:1,
    },
  }
});

halkaBox.run("certificates-slider__gallery");


// clients slider
const clientsSlider = new Swiper('.clients-slider__container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.clients-slider__next',
    prevEl: '.clients-slider__prev',
  },
  breakpoints: {
    // when window width is <= 320px
    1375: {
      spaceBetween: 0,
    },
    1050: {
      slidesPerView:3,
    },
    786: {
      slidesPerView:2,
    },
    564: {
      slidesPerView:1,
    },
  }
});

// tabs categories page sidebar
const tabsClick = function(){
  if(!document.querySelector('.sidebar-product')) return null
  const tabs = [...document.querySelectorAll('.sidebar-product__item')];
  const contents = [...document.querySelectorAll('.sidebar-product__content')];
  const titles = [...document.querySelectorAll('.sidebar-product__title')];
  tabs.forEach((tab,i)=>{
    tab.onclick = (e) => {
      tabs.forEach(el=>el.classList.remove('sidebar-product__item_active'));
      e.currentTarget.classList.add('sidebar-product__item_active');
    }
  })
}
tabsClick();
