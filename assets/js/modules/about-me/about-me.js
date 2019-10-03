import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const aboutBlockSlider = $(`.about-me__list`);

export function aboutMeSlider() {
  const dots = document.querySelector(`.about-me__slider-controls`);
  const pageHeader = document.querySelector(`.header--about-me`);
  const slideSixHeader = document.querySelector(`.header--slideSix`);
  const swapElement = document.querySelector(`.about-me__slider-swap`);

  aboutBlockSlider.on(`init`, function () {
    pageHeader.classList.add(`header--about-intro`);
    dots.classList.add(`about-me__slider-controls--intro`);
  });

  aboutBlockSlider.on(`beforeChange`, (event, slick, currentSlide, nextSlide) => {
    if (nextSlide === 0) {
      dots.classList.add(`about-me__slider-controls--intro`);
      pageHeader.classList.add(`header--about-intro`);
    } else if (nextSlide > 0) {
      dots.classList.remove(`about-me__slider-controls--intro`);
      pageHeader.classList.remove(`header--about-intro`);
    }

    if (nextSlide === slick.slideCount - 1) {
      swapElement.classList.add(`hidden`);
    } else {
      swapElement.classList.remove(`hidden`);
    }
  });

  aboutBlockSlider.slick({
    slidesToShow: 1,
    dots: true,
    dotsClass: `about-me__slider-bullets`,
    appendDots: $(`.about-me__slider-controls`),
    infinite: false,
    prevArrow: null,
    nextArrow: null,
    vertical: true,
    verticalSwiping: true,
  });
}

aboutBlockSlider.on(`mousewheel`, function (evt) {
  evt.preventDefault();
  if (evt.deltaX > 0 || evt.deltaY < 0) {
    $(aboutBlockSlider).slick(`slickNext`);
  } else if (evt.deltaX < 0 || evt.deltaY > 0) {
    $(aboutBlockSlider).slick(`slickPrev`);
  }
});

export function changeToMobileSlider() {
  let desktopView = document.querySelector(`#about-me`);
  let mobileView = document.querySelector(`#about-me-mobile`);
  let page = document.querySelector(`.about-me-page`);
  let btnViewRes = document.querySelector(`#btn--about`);

  window.onload = function () {
    if (document.body.clientWidth > 768) {
      mobileView.remove();
    } else if (document.body.clientWidth < 767 || document.body.clientWidth === 767) {
      desktopView.remove();
      page.style.overflow = `scroll`;
      btnViewRes.classList.add(`hidden`);
    }
  };
}
