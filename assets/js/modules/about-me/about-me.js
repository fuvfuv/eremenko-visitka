import {MEDIA} from "../constants/constants";
import "slick-carousel";
import "jquery-mousewheel";
import Swiper from "swiper";

export function aboutMeSlider() {
  const pageHeader = document.querySelector(`.header--about-me`);
  const swapElement = document.querySelector(`.about-me__slider-swap`);
  const aboutBlockSlider = document.querySelector(`.about-me__list-wrap`);
  const dots = document.querySelector(`.about-me__slider-controls`);

  const sliderOpts = {
    init: false,
    direction: `vertical`,
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    slideClass: `slider-item`,
    slideActiveClass: `slider-item-active`,
    pagination: {
      el: dots.querySelector(`.swiper-pagination`),
      type: `bullets`,
    },
  };

  const slider = new Swiper(aboutBlockSlider, sliderOpts);

  slider.on(`init`, () => {
    pageHeader.classList.add(`header--about-intro`);
    dots.classList.add(`about-me__slider-controls--intro`);
  });

  slider.on(`slideChange`, () => {
    if (slider.isBeginning) {
      dots.classList.add(`about-me__slider-controls--intro`);
      pageHeader.classList.add(`header--about-intro`);
    } else {
      dots.classList.remove(`about-me__slider-controls--intro`);
      pageHeader.classList.remove(`header--about-intro`);
    }

    if (slider.isEnd) {
      swapElement.classList.add(`hidden`);
    } else {
      swapElement.classList.remove(`hidden`);
    }
  });

  slider.init();
}

export function changeToMobileSlider() {
  let desktopView = document.querySelector(`#about-me`);
  let mobileView = document.querySelector(`#about-me-mobile`);
  let page = document.querySelector(`.about-me-page`);
  let btnViewRes = document.querySelector(`#btn--about`);

  window.onload = function () {
    if (window.matchMedia(`(min-width: ${MEDIA.MD}px)`).matches) {
      mobileView.remove();
    } else {
      desktopView.remove();
      page.style.overflow = `scroll`;
      btnViewRes.classList.add(`hidden`);
    }
  };
}
