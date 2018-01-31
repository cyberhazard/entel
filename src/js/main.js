/***
 *    ▓█████     ███▄    █    ▄▄▄█████▓   ▓█████     ██▓
 *    ▓█   ▀     ██ ▀█   █    ▓  ██▒ ▓▒   ▓█   ▀    ▓██▒
 *    ▒███      ▓██  ▀█ ██▒   ▒ ▓██░ ▒░   ▒███      ▒██░
 *    ▒▓█  ▄    ▓██▒  ▐▌██▒   ░ ▓██▓ ░    ▒▓█  ▄    ▒██░
 *    ░▒████▒   ▒██░   ▓██░     ▒██▒ ░    ░▒████▒   ░██████▒
 *    ░░ ▒░ ░   ░ ▒░   ▒ ▒      ▒ ░░      ░░ ▒░ ░   ░ ▒░▓  ░
 *     ░ ░  ░   ░ ░░   ░ ▒░       ░        ░ ░  ░   ░ ░ ▒  ░
 *       ░         ░   ░ ░      ░            ░        ░ ░
 *       ░  ░            ░                   ░  ░       ░  ░
 *
 */
const feedbackPhone = document.querySelector('.contacts-land__form_input[name="tel"]');
feedbackPhone && new Inputmask({ mask: '+7 (999) 999-99-99' }).mask(feedbackPhone);
// почта
var sendMail = function sendMail(selector) {
  return fetch('/mail.php', {
    method: 'POST',
    body: new FormData(document.querySelector(selector))
  }).catch(function (error) {
    alertify.error("Ошибка. Повторите отправку позже");
  });
};

/**
 * Отправка заявки главная
 */
var sendForm = function(){
  if(!document.querySelector(".contacts-land__form")) return null
  const submit = document.querySelector('.footer__submit')
  const checkbox = document.querySelector('.contacts-land__form_checkbox')
  document.querySelector(".contacts-land__form").onsubmit = function(e){
    e.preventDefault();
    if(!checkbox.checked){
      alertify.error("Вы не приняли соглашение об обработке персональных данных");
    } else {
      sendMail('.contacts-land__form').then(_ => (alertify.success("Ваша заявка отправленна"), document.querySelector(".contacts-land__form").reset()))
    }
  }
}
sendForm();


// Modal callback header
var modal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['call__wrapper', 'custom-class-2'],
  onOpen: function(){
    const button = document.querySelector('.policy__callback')
    button.onclick = function(e){
      e.preventDefault();
      showPolitics();
      console.log(modal.close());
    }
  },
});
// wrapper callback
const callBackWrap = () => {
  return`<div class="call">
          <div class="call__title">Заказать звонок</div>
          <form class="call__form">
            <div class="contacts-land__form_item call__item">
              <input type="text" name="name" class="contacts-land__form_input call__input" required/>
              <label class="contacts-land__form_label"> Ваше имя </label>
            </div>
            <div class="contacts-land__form_item call__item">
              <input type="tel" name="tel" class="contacts-land__form_input call__input" required/>
              <label class="contacts-land__form_label"> Ваш телефон </label>
            </div>
            <div class="contacts-land__form_offer call__offer">
              <label>
                <input type="checkbox" class="contacts-land__form_checkbox" id="check-modal" />
                <span />
              </label>
              <div class="contacts-land__form_offer_inner">Я принимаю <a class="policy__callback"><span>соглашение сайта</span></a> об обработке персональных данных</div>
            </div>
            <div class="contacts-land__form_footer">
              <button type="submit" class="button"> Отправить </button>
            </div>
          </form>
         </div>е
  `
};
const callBack = function(){
  const callBackButton = Array.prototype.slice.call(document.querySelectorAll('.header__callback'));
  if(!callBackButton) return null;
  callBackButton.forEach((el) => el.onclick = function(e){
    e.preventDefault();
    modal.setContent(callBackWrap());
    modal.open();
    [...document.querySelectorAll('input[type="tel"]')].forEach(input => new Inputmask('+7 (999) 999-99-99').mask(input));
    const checkbox = document.querySelector('#check-modal')
    document.querySelector(".call__form").onsubmit = function(e){
      e.preventDefault();
      if(!checkbox.checked){
        alertify.error("Вы не приняли соглашение об обработке персональных данных");
      } else {
        sendMail('.call__form').then(_ => (alertify.success("Ваша заявка отправленна"), document.querySelector(".call__form").reset()))
        modal.close();
      }
    }
  })
}();

var politicModal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['politic_wrapper', 'custom-class-2']
});

const politic = `<div style="">
<h2>Политика конфиденциальности</h2>
<p>Настоящий документ «Политика конфиденциальности» представляет собой правила использования персональной информации Пользователя.</p>
<p>Предоставляя свои персональные данные Пользователь даёт согласие на обработку, хранение и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в следующих целях:</p>
<ul>
  <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг, обработку запросов и заявок от Пользователя.</li>
  <li>Осуществление клиентской поддержки</li>
  <li>Получения Пользователем информации о маркетинговых событиях</li>
  <li>Проведения аудита и прочих внутренних исследований с целью повышения качества предоставляемых услуг</li>
</ul>
<h3>Персональная информация</h3>
<p>Под персональными данными подразумевается любая информация, предоставляемая пользователем самостоятельно, включая персональные данные пользователя, такие как:</p>
<ul>
<li>Фамилия, Имя, Отчество</li>
<li>Контактный телефон</li>
<li>Адрес электронной почты</li>
</ul>
А также данные, которые передаются в автоматическом режиме.
<p>Персональные данные Пользователей хранятся исключительно на электронных носителях и обрабатываются с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка персональных данных необходима в связи с исполнением требований законодательства.</p>
<p>Компания обязуется не передавать полученные персональные данные третьим лицам, за исключением следующего случая:</p>
<ul>
<li>По запросам уполномоченных органов государственной власти РФ только по основаниям и в порядке, установленным законодательством РФ.</li>
</ul>
<p> Компания оставляет за собой право вносить изменения в одностороннем порядке в настоящие правила, при условии, что изменения не противоречат действующему законодательству РФ. Изменения условий настоящих правил вступают в силу после их публикации на Сайте.
</p></div>
`;

var showPolitics = function(){
  politicModal.setContent(politic);
  politicModal.open();
}
/**
 * Вызов политики конф в футер форме
 */
var openFooterPolitics = function(){
  const button = [...document.querySelectorAll('.policy__callback')]
  button.forEach(el=> {el.onclick = function(e){
    e.preventDefault();
    modal.close();
    showPolitics();
  }})
}
openFooterPolitics();

//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');
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
  const header = document.querySelector('.sidebar-product__header');
  const wrapper = document.querySelector('.sidebar-product__wrapper');
  const height = header.clientHeight;
  if (innerWidth < 1025) wrapper.style.height = height + 'px'
  header.onclick = () => {
    if (innerWidth > 1025) return null
    if (wrapper.classList.contains('active-tab')) wrapper.style.height = height + 'px';
    else  wrapper.style.height = wrapper.scrollHeight + 'px';
    wrapper.classList.toggle('active-tab')
  }

  // tabs.forEach((tab,i)=>{
  //   tab.onclick = (e) => {
  //     tabs.forEach(el=>el.classList.remove('sidebar-product__item_active'));
  //     e.currentTarget.classList.add('sidebar-product__item_active');
  //   }
  // })
}
tabsClick();

//certificates slider, about company page
const certificatesSliderAbout = new Swiper('.about-company__slider_cert', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '#certificate .about-company__slider_next',
    prevEl: '#certificate .about-company__slider_prev',
  },
  breakpoints: {
    675: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }
  }
});

const clientsSliderAbout = new Swiper('.about-company__slider_clients', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#clients .about-company__slider_next',
    prevEl: '#clients .about-company__slider_prev',
  },
  breakpoints: {
    675: {
      slidesPerView: 3
    },
    560: {
      slidesPerView: 2
    },
    400: {
      slidesPerView: 1
    }
  }
});

/**
 * Слайдер новости и мероприятия
 */
new Swiper('.news-s__slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.news-s__next',
    prevEl: '.news-s__prev',
  },
  breakpoints: {
    720: {
      slidesPerView: 1
    }
  }
})

halkaBox.run("certif-mini__gallery");

// Открытие инструкции на странице товара

const openInstruction = function(){
  if(!document.querySelector('.card-item__documentation')) return null;
  const link = document.querySelector('.card-item__documentation');
  const content = document.querySelector('.card-item__instruction');
  const triangle = document.querySelector('.card-item__documentation_after');
  const cross = document.querySelector('.card-item__cross');
  link.onclick = function(){
    if(content.style.display==="") {
      triangle.style.overflow = 'inherit';
      content.style.display = 'block';
      cross.style.transform = 'rotate(180deg)';
      cross.style.paddingRight = '1rem';
      cross.style.paddingLeft = '0rem';
    } else {
      triangle.style.overflow = '';
      content.style.display = '';
      cross.style.transform = '';
      cross.style.paddingRight = '';
      cross.style.paddingLeft = '';
    }
  }
}
openInstruction()


// select страница Пресс-центр
const selectNews = function(){
  if(!document.querySelector('.news-page__select')) return null
  const selects = [...document.querySelectorAll('.news-page__select')];
  selects.forEach(select => {
    const value = select.querySelector('.news-page__select_value');
    const wrapper = select.querySelector('.news-page__select_wrapper');
    const options = select.querySelector('.news-page__select_options');
    const option = [...select.querySelectorAll('.news-page__select_option')];

    const calcWrapperPosition = () => {
      options.style.width =  select.clientWidth + 'px';
      const { bottom, left } = select.getBoundingClientRect();
      options.style.top = bottom + 'px';
      options.style.left = left + 1 + 'px';
    }

    option.forEach(opt => opt.onclick = () => {
      value.textContent = opt.textContent;
      select.querySelector('input').value = opt.textContent;
    })

    value.onclick = () => {
      wrapper.classList.toggle('active');
      calcWrapperPosition();
    }
    window.addEventListener('scroll', () => wrapper.classList.contains('active') && calcWrapperPosition())
    window.addEventListener('resize', () => wrapper.classList.contains('active') && calcWrapperPosition())
    wrapper.onclick = () => wrapper.classList.toggle('active')
  })

  const header = document.querySelector('.sidebar-product__header');
  const wrapper = document.querySelector('.news-page__sidebar');
  const height = header.clientHeight;
  if (innerWidth < 1025) wrapper.style.height = height + 'px'
  header.onclick = () => {
    if (innerWidth > 1025) return null
    if (wrapper.classList.contains('active-tab')) wrapper.style.height = height + 'px';
    else  wrapper.style.height = wrapper.scrollHeight + 'px';
    wrapper.classList.toggle('active-tab')
  }
}()


/**
 * Открытие/Закрытие мобильного меню
 */
!function(){
  const menuButton = document.querySelector('.mobile__menu');
  const closeButton = document.querySelector('.header__close');
  const menu = document.querySelector('.header__nav');
  menuButton.onclick = () => menu.style.transform = 'translateX(0%)';
  closeButton.onclick = () => menu.style.transform = '';
}()

/**
 * Удаление пагинации
 */

const deletePagination = function(){
  if(!document.querySelector('.news-page__pagination_number')) return null
  const buttons = document.querySelectorAll('.news-page__pagination_number');
  const block = document.querySelector('.news-page__pagination');
  if(buttons.length===1){
    block.style.display = "none";
  };
}
deletePagination();


+function(){
  if(!document.querySelector('.card-item__grid')) return null
  const cardsItems = [...document.querySelectorAll('.card-item__grid')];
  cardsItems.forEach(cardItem => {
    const not_empty = [...cardItem.querySelectorAll('.card-item__grid_item')].some(el=>{
      if (el.children.length == 0) {
        el.remove(); return false
        }
    return true
    });
    if(!not_empty) cardItem.querySelector('.card-item__block_title').remove();
  })
}();

+function(){
  if(!document.querySelector('.news-page__sidebar_content')) return null;
  [...document.querySelectorAll('.news-page__sidebar_content')].forEach(el=>
    el.textContent.trim() == '' && el.closest('.card-item__sidebar_item').remove()
  )
}();


!function(){
  if (innerWidth <= 1024) return null
  const leftBlock = document.querySelector('.sidebar-product.goods-page__sidebar');
  const rightBlock = document.querySelector('.categories__inside');
  const sidebar = document.querySelector('.sidebar-product__wrapper');
  if (!sidebar) return null
  let height = sidebar.clientHeight;

  const makeFixed =() => {
    const { top, left } = leftBlock.getBoundingClientRect();
    const { bottom } = rightBlock.getBoundingClientRect();
    if (top < 30) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '30px';
      sidebar.style.left = left + 'px';
      sidebar.style.width = leftBlock.clientWidth + 'px';
    }
    if (top > 30 && sidebar.style.position == 'fixed') {
      sidebar.style.position = sidebar.style.top = sidebar.style.left = sidebar.style.width = '';
    }
    if (bottom <= height + 30) {
      height = sidebar.clientHeight;
      sidebar.style.top = bottom - height - 40 + 'px'
    }
  }

  makeFixed();

  window.addEventListener('scroll', makeFixed)
  window.addEventListener('resize', () => {
    if (sidebar.style.position == 'fixed') {
      const { left } = leftBlock.getBoundingClientRect();
      sidebar.style.left = left + 'px';
      sidebar.style.width = leftBlock.clientWidth + 30 + 'px';
    }
    if (innerWidth <= 1024) sidebar.style.position = sidebar.style.top = sidebar.style.left = sidebar.style.width = '';
  })
}()

//- Search
!function(){
  const menu = document.querySelector('.header__nav');
  const search = document.querySelector('.search');
  const loop = document.querySelector('.search__loop');
  const close = document.querySelector('.search__close');
  const input = document.querySelector('.search__input');
  const results = document.querySelector('.search__results');

  const makeLink = ({link, name, category}) => `<a href="${link}" class="search__link">${name} <span>${category}</span></a>`

  loop.onclick = () => {
    search.classList.add('active');
    input.style.width = menu.clientWidth + 'px';
    if (!window.searchData) {
      window.searchData = { categories: {} };
      fetch('/wp-json/wp/v2/categories?per_page=100').then(r=>r.json())
        .then(categories => categories.forEach(({id, name}) => window.searchData.categories[id] = name ))
        .then(_ => {
          fetch('/wp-json/wp/v2/products?per_page=100').then(r => r.json())
          .then(products => window.searchData.products = products.map(
            (p) => ({
              name: p.title.rendered,
              link: p.link,
              category: window.searchData.categories[p.categories[0]]
            })
          ))
        }).catch(console.log)
    }
  }
  close.onclick = () => {
    search.classList.remove('active');
    input.style.width = '';
    input.value = results.innerHTML = '';
  }
  input.oninput = (e) => {
    if (!window.searchData.products) return null
    const searchString = e.target.value;
    let rez = window.searchData.products.filter(p => p.name.toLowerCase().includes(searchString.toLowerCase()));
    if(rez) {
      if (rez.length > 6) rez.length = 6;
      results.innerHTML = rez.map(makeLink).join('');
    }
  }
}()
