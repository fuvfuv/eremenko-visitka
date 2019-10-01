import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const aboutBlockSlider = $(`.about-me__list`);

export function aboutMeSlider() {
  const dots = document.querySelector(`#about-me__slider-controls`);
  const caption = document.querySelector(`#caption__text`);
  const fakeSlider = document.querySelector(`#about-me__fake-slider`);
  const pageHeader = document.querySelector(`.header--about-me`);
  const slideSixHeader = document.querySelector(`.header--slideSix`);
  const btnViewRes = document.querySelector(`#btn--about`);

  if (dots && caption && fakeSlider && pageHeader && slideSixHeader && btnViewRes) {
    aboutBlockSlider.on(`init`, function () {
      dots.style.visibility = `hidden`;
      fakeSlider.style.display = `flex`;
      caption.style.display = `block`;
      btnViewRes.classList.remove(`hidden`);
    });
    aboutBlockSlider.on(`beforeChange`, (event, slick, currentSlide, nextSlide) => {
      if (nextSlide === 0) {
        dots.style.visibility = `hidden`;
        fakeSlider.style.display = `flex`;
        caption.style.display = `block`;
        btnViewRes.classList.remove(`hidden`);
      } else if (nextSlide > 0) {
        dots.style.visibility = `visible`;
        fakeSlider.style.display = `none`;
        caption.style.display = `none`;
        btnViewRes.classList.add(`hidden`);
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
  }

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
    if (window.matchMedia(`(max-width: ${MEDIA.SM}px)`).matches) {
      desktopView.remove();
      page.style.overflow = `scroll`;
      btnViewRes.classList.add(`hidden`);
    } else {
      mobileView.remove();
    }
  };
}
