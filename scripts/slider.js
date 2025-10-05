document.addEventListener('DOMContentLoaded', function () {
  const previousButton = document.querySelector('.reviews__arrow-button-prev');
  const nextButton = document.querySelector('.reviews__arrow-button-next');
  const pagination = document.querySelector('.pagination__list');

  const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    direction: 'horizontal',

    breakpoints: {
      0: {
        slidesPerView: 0.9,
        slidesPerGroup: 1,
      },
      481: {
        slidesPerView: 1.4,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1.4,
        slidesPerGroup: 1,
      },
      1024: {
        allowTouchMove: false,
      },

      1441: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: pagination,
      bulletClass: 'pagination__button',
      bulletActiveClass: 'is-current',
      clickable: true,
    },

    navigation: {
      nextEl: nextButton,
      prevEl: previousButton,
    },
  });
});