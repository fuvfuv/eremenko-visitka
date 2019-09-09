import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const aboutMobSlider = $(`.content__slider__text`);
// const aboutMobSlider = document.querySelector(`.content__slider__text`);

export function aboutMeMobileSlider() {
  aboutMobSlider.slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    dotsClass: `about-me-mobile__slider-bullets`,
    appendDots: $(`.about-me-mobile__slider-controls`),
    infinite: false,
    prevArrow: null,
    nextArrow: null,
    responsive: true,
  });
}

// aboutMobSlider.on(`mousewheel`, function (evt) {
//   evt.preventDefault();
//   if (evt.deltaX > 0 || evt.deltaY < 0) {
//     $(aboutMobSlider).slick(`slickNext`);
//   } else if (evt.deltaX < 0 || evt.deltaY > 0) {
//     $(aboutMobSlider).slick(`slickPrev`);
//   }
// });

// // мобтльный слайдер
export function changeToMobileSlider() {
  let desktopView = document.querySelector(`#about-me`);
  let mobileView = document.querySelector(`#about-me-mobile`);
  if ($(window).width() < MEDIA.MD) {
    desktopView.style.display = `none`;
    mobileView.style.display = `block`;
  }
}
