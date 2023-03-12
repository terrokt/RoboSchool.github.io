
import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: 4,
  spaceBetween: 40,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.trainers__button--next',
    prevEl: '.trainers__button--prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }


});
