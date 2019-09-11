import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const aboutBlockSlider = $(`.about-me__list`);

export function aboutMeSlider() {
  const dots = document.querySelector(`#about-me__slider-controls`);
  // const swap = document.querySelector(`#fake-slider__slider-swap`);
  // const arrow = document.querySelector(`#fake-slider__arrow`);
  const fakeSlider = document.querySelector(`#about-me__fake-slider`);
  const pageHeader = document.querySelector(`.header--about-me`);
  const slideSixHeader = document.querySelector(`.header--slideSix`);
  console.log(fakeSlider);
  // console.log(swap);
  // console.log(arrow);

  aboutBlockSlider.on(`init`, function () {
    dots.style.visibility = `hidden`;
    fakeSlider.style.display = `flex`;
    // swap.style.display = `inline-block`;
    // arrow.style.display = `block`;
  });

  aboutBlockSlider.on(`beforeChange`, (event, slick, currentSlide, nextSlide) => {
    if (nextSlide === 0) {
      dots.style.visibility = `hidden`;
      fakeSlider.style.display = `flex`;
      // swap.style.display = `inline-block`;
      // arrow.style.display = `block`;
    } else if (nextSlide > 0) {
      dots.style.visibility = `visible`;
      fakeSlider.style.display = `none`;
      // swap.style.display = `none`;
      // arrow.style.display = `none`;
    }
    if (nextSlide === 6) {
      pageHeader.classList.add(`header--slideSix`);
      slideSixHeader.style.display = `flex`;
    } else if (nextSlide !== 6) {
      pageHeader.classList.remove(`header--slideSix`);
      slideSixHeader.style.display = `none`;
      pageHeader.style.display = `flex`;
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
    // responsive: true,
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
