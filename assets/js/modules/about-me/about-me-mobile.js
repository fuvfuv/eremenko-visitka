import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

let sliders = {
  2: {textSlide: `#content__slider__text2`},
  3: {textSlide: `#content__slider__text3`},
};
// const textThreeSlide = $(`.content__slider__text3`);

export function aboutMeMobileSlider() {
  $.each(sliders, function () {
    $(this.textSlide).slick({
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
  });
}
// console.log(element);
// console.log(index);
// let test = document.createElement(`div`);
// test.className = `index` + index + ` ` + `about-me-mobile__slider-bullets`;
// console.log(test);
// console.log(test.attributes);
// console.log(test.classList);
// element.parentElement.appendChild(test);
// console.log(element.parentElement);

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
