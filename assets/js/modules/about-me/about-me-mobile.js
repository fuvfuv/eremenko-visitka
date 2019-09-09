import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

export function aboutMeMobileSlider() {
  $(`.slider`).slick({
    dots: true,
    dotsClass: `about-me-mobile__slider-bullets`,
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: false,
    prevArrow: null,
    nextArrow: null,
    responsive: true,
  });
}

$(`.slider`).on(`mousewheel`, function (evt) {
  evt.preventDefault();
  if (evt.deltaX > 0 || evt.deltaY < 0) {
    $($(`.slider`)).slick(`slickNext`);
  } else if (evt.deltaX < 0 || evt.deltaY > 0) {
    $($(`.slider`)).slick(`slickPrev`);
  }
});

export function changeToMobileSlider() {
  let desktopView = document.querySelector(`#about-me`);
  let mobileView = document.querySelector(`#about-me-mobile`);
  let page = document.querySelector(`.about-me-page`);

  if (document.body.clientWidth < 768) {
    desktopView.style.display = `none`;
    mobileView.style.display = `block`;
    page.style.overflow = `scroll`;
  }
}
